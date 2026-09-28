
import React from "react";
import { Check, Download, Flame, ShieldCheck, Cpu, HardDrive, SquareAsterisk, Zap } from "lucide-react";

const DOWNLOAD_URL = "https://storage.googleapis.com/nlcli-downloads/Zest-1.0.0.dmg";

export const Pricing: React.FC = () => {
  const handleDownload = () => {
    window.location.href = DOWNLOAD_URL;
  };

  const SpecItem = ({ icon, label, value, iconColor }: { icon: React.ReactNode, label: string, value: string, iconColor: string }) => (
    <div className="flex gap-4 group h-full">
      <div className={`${iconColor} transition-colors shrink-0 mt-1`}>{icon}</div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{label}</p>
        <p className="text-sm font-bold text-slate-700 leading-tight">{value}</p>
      </div>
    </div>
  );

  return (
    <section className="pt-32 pb-12 px-6 relative bg-white scroll-mt-24" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3 h-3" />
            Anti-Subscription. Anti-Cloud.
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight">One model. <span className="zest-gradient-text">All the spice.</span></h2>
          <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">
            100% private and runs entirely on your machine.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-16">
          <div className="flex flex-col p-10 rounded-[3rem] border-2 border-yellow-400 shadow-2xl shadow-yellow-500/20 bg-white relative overflow-hidden h-full">
            <div className="mb-8 relative">
              <div className="flex items-center gap-2 font-black mb-2 text-red-500">
                <Flame className="w-5 h-5" />
                <span className="uppercase tracking-[0.2em] text-[10px]">Zest CLI</span>
              </div>
              <h3 className="text-3xl font-black mb-4 text-slate-900 leading-tight">
                Zest CLI
              </h3>

              <div className="mb-6">
                <span className="text-7xl font-black text-slate-900 tracking-tighter">$8</span>
              </div>

              <p className="text-slate-500 font-medium text-sm leading-relaxed min-h-[80px]">
                A single fine-tuned model for natural language to CLI command translation. Buy once, keep forever.
              </p>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "Qwen3.5-9B, fine-tuned for CLI commands",
                "100% Offline usage",
                "No tracking of prompts or outputs",
                "No GPU required (CPU Optimized)",
                "Instant 0ms network latency",
                "Buy once, keep forever"
              ].map((feat, j) => (
                <li key={j} className="flex items-start gap-3 text-slate-700 text-base font-semibold">
                  <div className="mt-1 p-0.5 rounded-full bg-yellow-400">
                    <Check className="w-3.5 h-3.5 text-white shrink-0" />
                  </div>
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={handleDownload}
              className="w-full py-5 px-6 rounded-3xl font-black text-base md:text-lg flex items-center justify-center gap-3 transition-all zest-gradient-bg text-white shadow-2xl shadow-red-500/20 hover:scale-[1.01] active:scale-95"
            >
              <Download className="w-5 h-5" />
              Download Free Trial
            </button>

            <p className="text-center mt-4 text-xs text-slate-500 font-medium leading-relaxed px-4">
              5-day trial. $8 one-time payment after.
            </p>
            <p className="text-center mt-2 text-[10px] text-slate-400 font-medium">
              Already paid? Activate in the app.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-16 text-center">
          <p className="text-slate-500 font-medium leading-relaxed">
            There is no service to keep running and nothing to bill you for again. The price just helps cover hosting and bandwidth for the multi-gigabyte model download.
          </p>
        </div>

        <div className="mb-20 text-center">
          <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-3xl mx-auto mb-6">
            This is a small language model that will make mistakes due to its size. While we make every effort to train it to be accurate, please treat your purchase with this in mind. The model is an assistant, not a tool to replace your workflow. If you find model mistakes, please use the "report issues" page.
          </p>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            Securely processed by Polar.sh via Stripe — We never see your card details.
          </p>
        </div>

        {/* Technical Requirements */}
        <div className="max-w-2xl mx-auto bg-slate-50 rounded-[4rem] p-10 md:p-16 border border-slate-100 relative">
          <div className="flex items-center gap-4 pb-6 border-b border-slate-200 mb-6">
            <div className="w-14 h-14 zest-gradient-bg rounded-2xl flex items-center justify-center shadow-xl shadow-red-500/20">
              <Flame className="w-7 h-7 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-black text-slate-900">Zest CLI</h4>
              <p className="text-red-600 font-bold text-[10px] uppercase tracking-widest">System Requirements</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-6">
            <SpecItem
              icon={<Cpu className="w-5 h-5" />}
              label="Processor"
              value="Apple Silicon or Intel Mac"
              iconColor="text-red-600"
            />
            <SpecItem
              icon={<SquareAsterisk className="w-5 h-5" />}
              label="Memory (RAM)"
              value="16GB recommended"
              iconColor="text-red-600"
            />
            <SpecItem
              icon={<HardDrive className="w-5 h-5" />}
              label="Storage"
              value="~7GB DMG + model download (7GB recommended)"
              iconColor="text-red-600"
            />
            <SpecItem
              icon={<Zap className="w-5 h-5" />}
              label="GPU"
              value="Metal GPU (CPU fallback)"
              iconColor="text-red-600"
            />
            <SpecItem
              icon={<ShieldCheck className="w-5 h-5" />}
              label="OS Version"
              value="macOS 13.0 (Ventura) or later"
              iconColor="text-red-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
