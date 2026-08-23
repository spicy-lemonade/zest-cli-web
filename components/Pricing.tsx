
import React from "react";
import { Check, Download, Flame, Zap, ShieldCheck, Rocket, Cpu, HardDrive, SquareAsterisk } from "lucide-react";

const DOWNLOAD_URLS = {
  hot: "https://storage.googleapis.com/nlcli-downloads/Zest-Hot-1.0.0.dmg",
  extra_spicy: "https://storage.googleapis.com/nlcli-downloads/Zest-Extra-Spicy-1.0.0.dmg"
};

export const Pricing: React.FC = () => {
  const handleDownload = (productType: "hot" | "extra_spicy") => {
    window.location.href = DOWNLOAD_URLS[productType];
  };

  const PricingCard = ({
    name,
    price,
    description,
    tagline,
    features,
    productType,
    highlight = false,
    disabled = false
  }: {
    name: string;
    price: number;
    description: string;
    tagline: string;
    features: string[];
    productType: "hot" | "extra_spicy";
    highlight?: boolean;
    disabled?: boolean;
  }) => {

    return (
      <div className={`flex flex-col p-10 rounded-[3rem] border-2 transition-all duration-500 bg-white relative overflow-hidden h-full ${
        highlight 
          ? 'border-yellow-400 shadow-2xl shadow-yellow-500/20 z-10 hover:border-red-500' 
          : 'border-slate-100 shadow-xl shadow-slate-200/50 grayscale-[0.2] hover:grayscale-0 hover:border-yellow-400'
      }`}>
        {highlight && (
          <div className="absolute top-[44px] right-[-50px] w-56 bg-yellow-400 text-slate-900 text-[10px] font-black py-2.5 rotate-45 uppercase tracking-[0.2em] text-center shadow-lg z-20 pointer-events-none border-b border-yellow-500/40">
            Most Accurate
          </div>
        )}
        
        <div className="mb-8 relative">
          <div className={`flex items-center gap-2 font-black mb-2 ${highlight ? 'text-red-500' : 'text-slate-400'}`}>
            {highlight ? <Flame className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
            <span className="uppercase tracking-[0.2em] text-[10px]">{tagline}</span>
          </div>
          <h3 className="text-3xl font-black mb-4 text-slate-900 leading-tight">
            {name}
          </h3>
          
          <div className="mb-6">
            <span className="text-7xl font-black text-slate-900 tracking-tighter">${price}</span>
          </div>
          
          <p className="text-slate-500 font-medium text-sm leading-relaxed min-h-[80px]">{description}</p>
        </div>

        <ul className="space-y-4 mb-10 flex-grow">
          {features.map((feat, j) => (
            <li key={j} className="flex items-start gap-3 text-slate-700 text-base font-semibold">
              <div className={`mt-1 p-0.5 rounded-full ${highlight ? 'bg-yellow-400' : 'bg-slate-200'}`}>
                <Check className="w-3.5 h-3.5 text-white shrink-0" />
              </div>
              <span className="leading-snug">{feat}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => !disabled && handleDownload(productType)}
          disabled={disabled}
          className={`w-full py-5 px-6 rounded-3xl font-black text-base md:text-lg flex items-center justify-center gap-3 transition-all ${
            highlight
              ? "zest-gradient-bg text-white shadow-2xl shadow-red-500/20 hover:scale-[1.01]"
              : "bg-slate-900 text-white hover:bg-slate-800"
          } ${disabled ? "opacity-50 cursor-not-allowed" : ""} active:scale-95`}
        >
          {disabled ? (
            "Coming Soon"
          ) : (
            <>
              <Download className="w-5 h-5" />
              Download Free Trial
            </>
          )}
        </button>

        <p className="text-center mt-4 text-xs text-slate-500 font-medium leading-relaxed px-4">
          5-day trial. ${price} one-time payment after.
        </p>
        <p className="text-center mt-2 text-[10px] text-slate-400 font-medium">
          Already paid? Activate in the app.
        </p>
      </div>
    );
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
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight">Pick your <span className="zest-gradient-text">spice level.</span></h2>
          <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">
            Choose the model that fits your hardware. All models are 100% private and run entirely on your machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto mb-16">
          <PricingCard
            name="Zest Hot"
            price={5}
            tagline="Balanced Performance"
            description="Our signature blend of power and precision. Designed for developers who need deeper logic for complex shell pipes and automation, without sacrificing system speed. The professional's choice for a private, local AI."
            productType="hot"
            features={[
              "Zest 7B Coder (Qwen2.5-Coder-7B-Instruct-FP16)",
              "100% Offline usage",
              "No tracking of prompts or outputs",
              "No GPU required (CPU Optimized)",
              "Instant 0ms network latency",
              "Enhanced accuracy for complex logic",
              "Buy once, keep forever"
            ]}
          />

          <PricingCard
            highlight
            name="Zest Extra Spicy"
            price={8}
            tagline="Maximum Precision"
            description="Our most intelligent model with 14 billion parameters — twice the reasoning power of the 7B. Efficient Q5 quantisation means a smaller download than Hot, but double the parameter count drives deeper logic for mission-critical operations."
            productType="extra_spicy"
            features={[
              "Zest 14B Coder (Qwen2.5-Coder-14B-Instruct-Q5)",
              "100% Offline usage",
              "No tracking of prompts or outputs",
              "No GPU required (CPU Optimized)",
              "Instant 0ms network latency",
              "2x the parameters, 2x the reasoning power",
              "Buy once, keep forever"
            ]}
          />
        </div>

        <div className="max-w-2xl mx-auto mb-16 text-center">
          <p className="text-slate-500 font-medium leading-relaxed">
            There is no service to keep running and nothing to bill you for again. The price just helps cover hosting and bandwidth for the multi-gigabyte model downloads.
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

        {/* Detailed Technical Requirements */}
        <div className="max-w-6xl mx-auto bg-slate-50 rounded-[4rem] p-10 md:p-20 border border-slate-100 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
            {/* Column Headers */}
            <div className="flex items-center gap-4 pb-6 border-b border-slate-200 mb-4">
              <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center shadow-xl">
                <Flame className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900">Zest Hot</h4>
                <p className="text-yellow-700 font-bold text-[10px] uppercase tracking-widest">Balanced Power</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pb-6 border-b border-slate-200 mb-4">
              <div className="w-14 h-14 zest-gradient-bg rounded-2xl flex items-center justify-center shadow-xl shadow-red-500/20">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900">Zest Extra Spicy</h4>
                <p className="text-red-600 font-bold text-[10px] uppercase tracking-widest">Maximum Accuracy</p>
              </div>
            </div>

            {/* Recommendation Blurbs */}
            <p className="text-slate-600 font-bold text-sm leading-relaxed border-l-4 border-yellow-500 pl-4 lg:min-h-[64px] flex items-center mb-4">
              MacBook Pro or Mac Studio with 32GB+ RAM — Full precision demands it.
            </p>
            <p className="text-slate-600 font-bold text-sm leading-relaxed border-l-4 border-red-500 pl-4 lg:min-h-[64px] flex items-center mb-4">
              MacBook Pro with 16GB+ RAM — 14B intelligence, efficient download.
            </p>

            {/* Spec Rows */}
            <SpecItem
              icon={<Cpu className="w-5 h-5" />}
              label="Processor"
              value="Apple Silicon optimized for best experience"
              iconColor="text-yellow-700"
            />
            <SpecItem
              icon={<Cpu className="w-5 h-5" />}
              label="Processor"
              value="Apple Silicon or Intel (M-series recommended)"
              iconColor="text-red-600"
            />

            <SpecItem
              icon={<SquareAsterisk className="w-5 h-5" />}
              label="Memory (RAM)"
              value="32GB+ RAM recommended"
              iconColor="text-yellow-700"
            />
            <SpecItem
              icon={<SquareAsterisk className="w-5 h-5" />}
              label="Memory (RAM)"
              value="16GB RAM recommended"
              iconColor="text-red-600"
            />

            <SpecItem
              icon={<HardDrive className="w-5 h-5" />}
              label="Storage"
              value="~50MB DMG + 14.4GB model download (18GB recommended)"
              iconColor="text-yellow-700"
            />
            <SpecItem
              icon={<HardDrive className="w-5 h-5" />}
              label="Storage"
              value="~50MB DMG + 9.8GB model download (12GB recommended)"
              iconColor="text-red-600"
            />

            <SpecItem
              icon={<Zap className="w-5 h-5" />}
              label="Graphics"
              value="Metal GPU (CPU fallback)"
              iconColor="text-yellow-700"
            />
            <SpecItem
              icon={<Zap className="w-5 h-5" />}
              label="Graphics"
              value="Metal GPU (CPU fallback)"
              iconColor="text-red-600"
            />

            <SpecItem
              icon={<ShieldCheck className="w-5 h-5" />}
              label="OS Version"
              value="macOS 12.0 (Monterey) or later"
              iconColor="text-yellow-700"
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
