import React, { useState } from "react";
import { MessageSquare, ShieldCheck, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { PageHeader } from "../shared/PageHeader";
import { GradientButton } from "../shared/GradientButton";

interface ReportIssuesPageProps {
  onBack: () => void;
}

const FEEDBACK_API_URL = "https://zestcli.com/api/feedback";

export const ReportIssuesPage: React.FC<ReportIssuesPageProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [failedOutput, setFailedOutput] = useState("");
  const [expectedOutput, setExpectedOutput] = useState("");
  const [modelVersion, setModelVersion] = useState("Zest Lite");
  const [website, setWebsite] = useState(""); // Honeypot field

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(FEEDBACK_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, failedOutput, expectedOutput, modelVersion, website }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit feedback");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto animate-in fade-in duration-500">
        <PageHeader onBack={onBack} title="Thank You" subtitle="Feedback Received" icon={<CheckCircle2 className="w-10 h-10 text-white" />} />
        <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 text-center">
          <h3 className="text-2xl font-black text-slate-900 mb-4">We've got it!</h3>
          <p className="text-slate-600 font-medium mb-8 max-w-lg mx-auto leading-relaxed">
            Thank you for helping us improve Zest. We'll use your report to refine our Small Language Models in future releases.
          </p>
          <button
            onClick={onBack}
            className="px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all"
          >
            Return to Landing
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto animate-in fade-in duration-500">
      <PageHeader onBack={onBack} title="Report Issues" subtitle="Help us refine the engine" icon={<MessageSquare className="w-10 h-10 text-white" />} />

      <div className="prose prose-slate lg:prose-xl font-medium text-slate-600 space-y-10">
        <div className="bg-slate-50 border-l-4 border-slate-900 p-8 rounded-r-[2rem]">
          <h3 className="text-slate-900 font-black flex items-center gap-3 mt-0">
            <ShieldCheck className="w-6 h-6 text-slate-900" />
            Privacy First
          </h3>
          <p className="mb-0">
            Zest is built on a foundation of absolute privacy. Because we <strong>never</strong> collect or track your prompts or outputs, we rely entirely on your manual feedback to identify and fix <strong>your</strong> edge cases.
          </p>
        </div>

        <p>
          We truly appreciate your confidence in being an early adopter. While we've optimized Zest to meet high-quality internal and external benchmarks and our own production-grade needs, we understand that every developer's workflow is unique. If the model failed to generate a correct command, please share the details below.
        </p>

        <p>
          This feedback is critical for our research lab to refine the model for future updates. While we are also improving the model ourselves through research, we rely on your help to locate your specific issues and edge cases that our internal benchmarks might miss.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8 mt-12 not-prose">
          {/* Honeypot field - hidden from users, catches bots */}
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWebsite(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="absolute left-[-9999px] w-1 h-1 overflow-hidden"
            aria-hidden="true"
          />

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Natural Language Prompt</label>
            <p className="text-xs text-slate-400 ml-4 mt-1">You can use comma-separated values to report multiple issues</p>
            <textarea
              required
              value={prompt}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value)}
              placeholder="e.g. 'show me all docker images created last week'"
              className="w-full p-6 bg-white border-2 border-slate-100 rounded-3xl focus:border-red-500 focus:outline-none transition-all font-mono text-sm min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Failed Model Output</label>
            <p className="text-xs text-slate-400 ml-4 mt-1">You can use comma-separated values to report multiple issues</p>
            <textarea
              required
              value={failedOutput}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFailedOutput(e.target.value)}
              placeholder="The incorrect command Zest suggested..."
              className="w-full p-6 bg-white border-2 border-slate-100 rounded-3xl focus:border-red-500 focus:outline-none transition-all font-mono text-sm min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Expected Model Output <span className="text-slate-300">(Optional)</span></label>
            <p className="text-xs text-slate-400 ml-4 mt-1">You can use comma-separated values to report multiple issues</p>
            <textarea
              value={expectedOutput}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setExpectedOutput(e.target.value)}
              placeholder="The expected command..."
              className="w-full p-6 bg-white border-2 border-slate-100 rounded-3xl focus:border-red-500 focus:outline-none transition-all font-mono text-sm min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Model Version</label>
            <select
              value={modelVersion}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setModelVersion(e.target.value)}
              className="w-full p-6 bg-white border-2 border-slate-100 rounded-3xl focus:border-red-500 focus:outline-none transition-all font-mono text-sm"
            >
              <option value="Zest Lite">Zest Lite</option>
              <option value="Zest Hot">Zest Hot</option>
              <option value="Zest Extra Spicy">Zest Extra Spicy</option>
            </select>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <p className="text-sm text-red-700 font-medium">{error}</p>
            </div>
          )}

          <GradientButton type="submit" size="lg" fullWidth disabled={loading} className="flex items-center justify-center gap-3">
            <Send className="w-5 h-5" />
            {loading ? "Sending..." : "Send Feedback"}
          </GradientButton>
        </form>
      </div>
    </section>
  );
};
