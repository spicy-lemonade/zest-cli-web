import React, { useState } from "react";
import { HelpCircle } from "lucide-react";
import { PageHeader } from "../shared/PageHeader";
import { FAQItem } from "../shared/FAQItem";
import type { View } from "../../hooks/useNavigation";

interface FAQPageProps {
  onBack: () => void;
  onNavigate: (view: View) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onBack, onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How does the free trial work?",
      a: (
        <>
          <p className="mb-4">Our 5-day free trial lets you experience Zest with full functionality before purchasing:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Download:</strong> Click "Download Free Trial" on any product above.</li>
            <li><strong>Install:</strong> Open the DMG and drag Zest to your Applications folder.</li>
            <li><strong>Activate:</strong> Run <code>zest</code> in Terminal and choose "Start free trial".</li>
            <li><strong>Verify:</strong> Enter your email and the 6-digit code sent to you.</li>
            <li><strong>Use:</strong> You have 5 days to try Zest on any device.</li>
          </ol>
          <p className="mt-4">After the trial expires, you'll be prompted to purchase. Payments are processed securely with Stripe and we never see your card details.</p>
        </>
      )
    },
    {
      q: "Can I try all three tiers?",
      a: (
        <>
          <p>Yes! Each tier (Lite, Hot, Extra Spicy) has its own independent 5-day trial. You can try different tiers on separate machines or all on the same machine to see which fits your workflow best.</p>
        </>
      )
    },
    {
      q: "I'm having installation issues. macOS says the app is blocked or can't be opened. What should I do?",
      a: (
        <div className="space-y-4">
          <p>This is a common macOS security feature when installing apps distributed outside of the App Store. Here's how to resolve it:</p>
          <ol className="list-decimal pl-5 space-y-3">
            <li><strong>Right-Click Method:</strong> Navigate to your Applications folder, right-click on Zest, and select "Open". You'll see a security prompt with an "Open" button.</li>
            <li><strong>System Settings Method:</strong> If the right-click method doesn't work, go to <strong>System Settings &gt; Privacy & Security</strong>, scroll down, and you'll see a message about Zest being blocked. Click "Open Anyway".</li>
          </ol>
          <p className="mt-4">This happens because Zest is not currently notarized by Apple. Notarization is Apple's process for scanning apps for malicious software, and it's required for apps distributed outside the App Store to open without warnings. We're actively working on getting Zest notarized to provide a smoother installation experience!</p>
        </div>
      )
    },
    {
      q: "The command generated isn't working as expected. What should I do?",
      a: (
        <>
          Zest is currently in its early version, and we truly appreciate your confidence in being an early adopter. While we strive for accuracy, edge cases occur. Please head over to our <button onClick={() => onNavigate("report")} className="text-red-500 underline font-bold hover:text-red-600">Report Issues</button> page to share the details. We are constantly improving the engine based on research and your valuable feedback helps us prioritize the most common failures. Thank you for helping us grow.
        </>
      )
    },
    {
      q: "I lost my download file (DMG). How can I reinstall Zest on another device?",
      a: (
        <div className="space-y-4">
          <p>No problem! You can download Zest again from the home page. After reinstalling, simply run <code>zest</code> in Terminal and re-enter your subscription email during setup. If you have an active subscription, your account will be automatically reactivated on the new device.</p>
        </div>
      )
    },
    {
      q: "How do I remove Zest and free up a license slot?",
      a: (
        <>
          <p className="mb-4">You have several ways to manage your device slots:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>zest --logout:</strong> Deregisters your machine while keeping the model files on disk. Perfect for temporary transfers.</li>
            <li><strong>zest --logout --remote:</strong> Remotely logout from any device without needing physical access to it. This is useful if you no longer have access to a device but need to free up a license slot.</li>
            <li><strong>zest --uninstall:</strong> Fully removes the model files and deregisters the device to free up disk space.</li>
            <li><strong>Drag and Drop:</strong> Dragging the Zest app to the Trash from your Applications folder is functionally identical to running <code>zest --uninstall</code>; it will automatically deregister your slot.</li>
          </ul>
          <p className="mt-4">Any of these methods will free up one of your 2 available device slots per product. Run <code>zest --help</code> for more information on available commands.</p>
        </>
      )
    },
    {
      q: "Why did you choose Qwen for Zest?",
      a: (
        <div className="space-y-4">
          <p className="mb-4">We selected Alibaba Cloud's Qwen model series for their exceptional balance of performance, size, and specialized capabilities:</p>

          <div className="mb-4">
            <h4 className="font-bold text-slate-900 mb-2">The Models We Use:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Qwen3-4b:</strong> An incredibly efficient 4-billion parameter model that provides fast, accurate responses for general CLI tasks while using minimal system resources.</li>
              <li><strong>Qwen-2.5-coder-7b:</strong> An advanced open-source coding model specifically optimized for code generation, code reasoning, and bug fixing. Despite being only 7 billion parameters, it rivals much larger models in coding performance.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-bold text-slate-900 mb-2">Key Benefits:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Small Size:</strong> Both models are compact enough to run efficiently on local machines without requiring powerful hardware or consuming excessive disk space.</li>
              <li><strong>Speed:</strong> Smaller model size means faster inference times, giving you near-instant command suggestions.</li>
              <li><strong>Privacy:</strong> Running locally means your commands and data never leave your machine.</li>
              <li><strong>Specialized Performance:</strong> Qwen-2.5-coder is specifically trained on code-related tasks, making it exceptionally good at understanding programming context and generating accurate shell commands.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-2">Our Data Preparation & Training Process:</h4>
            <p>We've fine-tuned these models using a rigorous human-in-the-loop approach. We combine sourced and synthetic datasets tailored for CLI commands, which are ranked by reasoning LLMs and manually validated by humans. The data is carefully balanced to ensure both rare and common tools are well-represented, then filtered to remove high-risk commands. Throughout the process, LLM-assisted improvements are paired with human review to ensure quality, accuracy, and safety.</p>
          </div>
        </div>
      )
    },
    {
      q: "How do I completely remove Zest from my computer?",
      a: (
        <div className="space-y-4">
          <p>Running <code>zest --uninstall</code> removes your license, model files, and the app from Applications, but keeps the CLI installed so you can check status or reinstall later.</p>
          <p>To completely remove all Zest files from your system, run the following commands in Terminal after uninstalling:</p>
          <div className="bg-slate-900 rounded-2xl p-6 text-yellow-400 font-mono text-sm space-y-1">
            <div>rm -rf ~/.zest</div>
            <div>rm -rf ~/Library/Application\ Support/Zest</div>
            <div>sudo rm /usr/local/bin/zest</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto animate-in fade-in duration-500">
      <PageHeader onBack={onBack} title="FAQ" subtitle="Common Questions & Answers" icon={<HelpCircle className="w-10 h-10 text-white" />} />

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            q={faq.q}
            a={faq.a}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
};
