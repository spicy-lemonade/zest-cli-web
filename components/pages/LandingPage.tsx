import React, { useState } from "react";
import {
  Download, ShieldCheck, Cpu, Citrus, Flame, Zap,
  Layers, CheckCircle2
} from "lucide-react";
import { Terminal } from "../Terminal";
import { Features } from "../Features";
import { Pricing } from "../Pricing";
import { GradientButton } from "../shared/GradientButton";
import { Card } from "../shared/Card";
import type { View } from "../../hooks/useNavigation";

interface LandingPageProps {
  onNavigate: (view: View, sectionId?: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const [isStackExpanded, setIsStackExpanded] = useState(false);

  return (
    <>
      <section className="pt-48 pb-32 px-6 relative overflow-hidden" id="hero">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-yellow-100/50 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-red-50/50 blur-[100px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-700 px-4 py-2 rounded-full border border-yellow-400/20 font-bold text-sm">
              <Flame className="w-4 h-4 text-red-500" />
              New: Zest v1.0 (Qwen Engine)
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-slate-900 max-w-5xl leading-[1.05]">
            Give your shell a <br />
            <span className="zest-gradient-text">spicy upgrade.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mb-14 leading-relaxed font-medium">
            Natural language to CLI commands. <br className="hidden md:block" />
            100% private. 100% offline.
          </p>
          <div className="flex flex-col items-center justify-center mb-24 w-full">
            <GradientButton
              onClick={() => onNavigate("landing", "pricing")}
              size="lg"
              className="w-full sm:w-auto flex items-center justify-center gap-3 hover:scale-105"
            >
              <Download className="w-6 h-6" />
              Get Zest CLI (macOS)
            </GradientButton>
            <p className="mt-4 text-slate-400 font-bold text-sm">Coming soon for Windows</p>
          </div>

          <div id="playground" className="w-full scroll-mt-32">
            <Terminal />
          </div>

          {/* Performance & Model Info Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl text-left">
            <Card padding="lg" className="relative overflow-hidden group flex flex-col">
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Layers className="w-12 h-12 text-slate-900" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4 relative z-10">Powered by Qwen3</h3>
              <p className="text-slate-600 font-medium mb-6 leading-relaxed relative z-10 flex-grow">
                Built on fully open-source, commercial-friendly foundations. Fine-tuned specifically on millions of real-world CLI examples.
              </p>
              <div className="flex flex-wrap gap-4 relative z-10">
                <span className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider">Local Inference</span>
                <span className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider">Zero Tracking</span>
              </div>
            </Card>

            <Card padding="lg" className="relative overflow-hidden group flex flex-col">
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <CheckCircle2 className="w-12 h-12 text-red-500" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4 relative z-10">96%+ Accuracy</h3>
              <p className="text-slate-600 font-medium mb-6 leading-relaxed relative z-10 flex-grow">
                Verified performance on internal benchmarks covering real-world workloads. Designed for reliable command translation across a wide range of technical use cases. <span className="text-[8px] text-slate-400 font-black inline tracking-widest uppercase ml-1 opacity-80">(Zest Extra Spicy)</span>
              </p>
              <div className="flex flex-wrap gap-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-slate-500" />
                  <span>Enterprise-Grade Reliability</span>
                </div>
              </div>
            </Card>

            <div className="md:col-span-2 p-12 rounded-[3rem] zest-gradient-bg relative overflow-hidden text-white shadow-2xl shadow-yellow-500/20">
              <div className="relative z-10">
                <h3 className="text-4xl font-black mb-6">Built for the modern stack.</h3>
                <p className="text-xl font-bold mb-10 opacity-90 max-w-2xl">
                  Supports <strong>Docker, Kubernetes, Git, AWS, Bash</strong> and 100+ standard Unix tools out of the box.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Docker", "Kubernetes", "Git", "AWS", "Bash"].map((tool) => (
                    <span key={tool} className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-md font-black text-sm">{tool}</span>
                  ))}
                  <button
                    onClick={() => setIsStackExpanded(!isStackExpanded)}
                    className={`px-6 py-2 rounded-full font-black text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2 ${isStackExpanded ? "bg-white/40" : "bg-white text-slate-900"}`}
                  >
                    {isStackExpanded ? "Show less" : "100+ more"}
                  </button>
                </div>

                {isStackExpanded && (
                  <div className="mt-10 pt-10 border-t border-white/20 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="grid grid-cols-[auto_20px_auto_20px_auto_20px_auto] gap-y-2 font-bold text-base items-center w-fit">
                      {/* Row 1 */}
                      <span>gcloud</span><span className="opacity-40 text-center">·</span>
                      <span>Azure</span><span className="opacity-40 text-center">·</span>
                      <span>Terraform</span><span className="opacity-40 text-center">·</span>
                      <span>Ansible</span>

                      {/* Row 2 */}
                      <span>ssh</span><span className="opacity-40 text-center">·</span>
                      <span>curl</span><span className="opacity-40 text-center">·</span>
                      <span>wget</span><span className="opacity-40 text-center">·</span>
                      <span>brew</span>

                      {/* Row 3 */}
                      <span>apt</span><span className="opacity-40 text-center">·</span>
                      <span>yum</span><span className="opacity-40 text-center">·</span>
                      <span>yarn</span><span className="opacity-40 text-center">·</span>
                      <span>awk</span>

                      {/* Row 4 */}
                      <span>tar</span><span className="opacity-40 text-center">·</span>
                      <span>gzip</span><span className="opacity-40 text-center">·</span>
                      <span>jq</span><span className="opacity-40 text-center">·</span>
                      <span>ffmpeg</span>
                    </div>
                    <div className="text-sm font-black opacity-60 uppercase tracking-widest pt-6">and many more</div>
                  </div>
                )}
              </div>
              {/* Lemon slice brand icon in background */}
              <Citrus className="absolute -bottom-16 -right-16 w-80 h-80 text-white/10 rotate-12" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 w-full max-w-5xl">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-50 rounded-3xl flex items-center justify-center mb-4 border border-yellow-100 shadow-sm">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="text-3xl font-black text-slate-900 mb-1 text-center">100% offline</h4>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs text-center">0ms Network latency</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-50 rounded-3xl flex items-center justify-center mb-4 border border-red-100 shadow-sm">
                <ShieldCheck className="w-8 h-8 text-red-500" />
              </div>
              <h4 className="text-3xl font-black text-slate-900 mb-1 text-center">100% Private</h4>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs text-center">local data only</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center mb-4 border border-slate-100 shadow-sm">
                <Cpu className="w-8 h-8 text-slate-600" />
              </div>
              <h4 className="text-3xl font-black text-slate-900 mb-1 text-center">Low Impact</h4>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs text-center">optimised for CPU</p>
            </div>
          </div>
        </div>
      </section>

      <Pricing />

      <Features />
    </>
  );
};
