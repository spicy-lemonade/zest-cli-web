/**
 * Cloudflare Worker for handling Zest CLI feedback form submissions
 * Features:
 * - Email delivery via Resend API
 * - Rate limiting (1 request per 60 seconds per IP)
 * - Honeypot spam protection
 * - CORS handling for zestcli.com
 */

const RATE_LIMIT = 1; // Max submissions per 60-second window
const RATE_LIMIT_WINDOW = 60; // Window in seconds
const BLOCK_DURATION = 60; // Block duration in seconds after hitting limit

export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // Only allow POST requests
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    try {
      // Get client IP for rate limiting
      const clientIP = request.headers.get("CF-Connecting-IP") || "unknown";

      // Check rate limit
      const rateLimitResult = await checkRateLimit(clientIP, env);
      if (!rateLimitResult.allowed) {
        return new Response(
          JSON.stringify({
            error: "Rate limit exceeded. Please wait 30 seconds before trying again.",
            retryAfter: rateLimitResult.retryAfter
          }),
          {
            status: 429,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Retry-After": rateLimitResult.retryAfter.toString(),
            },
          }
        );
      }

      // Parse request body
      const body = await request.json();
      const { prompt, failedOutput, expectedOutput, modelVersion, website } = body;

      // Honeypot check - if filled, it's a bot (silently reject)
      if (website) {
        return new Response(
          JSON.stringify({ success: true, message: "Feedback submitted successfully" }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
      }

      // Validate input
      if (!prompt || !failedOutput) {
        return new Response(
          JSON.stringify({ error: "Missing required fields: prompt and failedOutput" }),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
      }

      // Send email via Resend
      const emailResult = await sendEmail(prompt, failedOutput, expectedOutput, modelVersion, clientIP, env);

      if (!emailResult.success) {
        throw new Error(emailResult.error);
      }

      // Return success response
      return new Response(
        JSON.stringify({
          success: true,
          message: "Feedback submitted successfully"
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    } catch (error) {
      console.error("Error processing feedback:", error);
      return new Response(
        JSON.stringify({
          error: "Failed to submit feedback. Please try again later."
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }
  },
};

/**
 * Check rate limit for a given IP address
 * Uses KV storage to track submission counts
 */
async function checkRateLimit(ip, env) {
  if (!env.RATE_LIMIT_KV) {
    // If KV is not configured, allow the request
    console.warn("RATE_LIMIT_KV not configured, skipping rate limit check");
    return { allowed: true };
  }

  const key = `ratelimit:${ip}`;
  const now = Math.floor(Date.now() / 1000);

  // Get existing rate limit data
  const data = await env.RATE_LIMIT_KV.get(key, { type: "json" });

  if (!data) {
    // First request from this IP
    await env.RATE_LIMIT_KV.put(
      key,
      JSON.stringify({ count: 1, firstRequest: now }),
      { expirationTtl: RATE_LIMIT_WINDOW }
    );
    return { allowed: true };
  }

  const { count, firstRequest, blockedUntil } = data;

  // Check if IP is currently blocked
  if (blockedUntil && now < blockedUntil) {
    return {
      allowed: false,
      retryAfter: blockedUntil - now
    };
  }

  // Check if we're still within the rate limit window
  const windowElapsed = now - firstRequest;

  if (windowElapsed > RATE_LIMIT_WINDOW) {
    // Window expired, reset count
    await env.RATE_LIMIT_KV.put(
      key,
      JSON.stringify({ count: 1, firstRequest: now }),
      { expirationTtl: RATE_LIMIT_WINDOW }
    );
    return { allowed: true };
  }

  // Check if rate limit exceeded
  if (count >= RATE_LIMIT) {
    const blockedUntil = now + BLOCK_DURATION;
    await env.RATE_LIMIT_KV.put(
      key,
      JSON.stringify({
        count: count + 1,
        firstRequest,
        blockedUntil
      }),
      { expirationTtl: RATE_LIMIT_WINDOW + BLOCK_DURATION }
    );
    return {
      allowed: false,
      retryAfter: BLOCK_DURATION
    };
  }

  // Increment count
  await env.RATE_LIMIT_KV.put(
    key,
    JSON.stringify({ count: count + 1, firstRequest }),
    { expirationTtl: RATE_LIMIT_WINDOW }
  );

  return { allowed: true };
}

/**
 * Send email via Resend API
 */
async function sendEmail(prompt, failedOutput, expectedOutput, modelVersion, clientIP, env) {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.FROM_EMAIL,
        to: env.TO_EMAIL,
        subject: "New Zest CLI Feedback Report",
        html: `
          <h2>New Feedback Report</h2>
          <p><strong>Submitted from IP:</strong> ${clientIP}</p>
          <p><strong>Model Version:</strong> ${escapeHtml(modelVersion || "Not specified")}</p>
          <hr />

          <h3>Natural Language Prompt:</h3>
          <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto;">${escapeHtml(prompt)}</pre>

          <h3>Failed Model Output:</h3>
          <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto;">${escapeHtml(failedOutput)}</pre>

          ${expectedOutput ? `
          <h3>Expected Model Output:</h3>
          <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto;">${escapeHtml(expectedOutput)}</pre>
          ` : ""}

          <hr />
          <p style="color: #666; font-size: 12px;">Submitted at: ${new Date().toISOString()}</p>
        `,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", result);
      return {
        success: false,
        error: result.message || "Failed to send email"
      };
    }

    return { success: true, emailId: result.id };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
