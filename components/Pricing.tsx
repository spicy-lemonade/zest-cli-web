
import React, { useState, useEffect } from "react";
import { Check, Download, Flame, Zap, ShieldCheck, Laptop, MonitorSmartphone, Cpu, HardDrive, SquareAsterisk } from "lucide-react";

const DOWNLOAD_URLS = {
  lite: "https://storage.googleapis.com/nlcli-models/Zest-Lite-1.0.0.dmg",
  hot: "https://storage.googleapis.com/nlcli-models/Zest-Hot-1.0.0.dmg",
  extra_spicy: "https://storage.googleapis.com/nlcli-models/Zest-Extra-Spicy-1.0.0.dmg"
};

export const Pricing: React.FC = () => {
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    try {
      const locale = navigator.language;
      const euroLocales = ["de", "fr", "it", "es", "nl", "be", "at", "pt", "fi", "ie", "gr", "sk", "si", "ee", "lv", "lt", "mt", "cy"];
      const isEuroZone = euroLocales.some(lang => locale.startsWith(lang));
      setSymbol(isEuroZone ? "€" : "$");
    } catch {
      setSymbol("$");
    }
  }, []);

  const handleDownload = (productType: "lite" | "hot" | "extra_spicy") => {
    window.location.href = DOWNLOAD_URLS[productType];
  };

  const PricingCard = ({
    name,
    price,
    originalPrice,
    discountPercent,
    description,
    tagline,
    features,
    productType,
    highlight = false,
    disabled = false
  }: {
    name: string;
    price: number;
    originalPrice: number;
    discountPercent: number;
    description: string;
    tagline: string;
    features: string[];
    productType: "lite" | "hot" | "extra_spicy";
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
          <div className="absolute top-[32px] right-[-50px] w-56 bg-yellow-400 text-slate-900 text-[10px] font-black py-2.5 rotate-45 uppercase tracking-[0.2em] text-center shadow-lg z-20 pointer-events-none border-b border-yellow-500/40">
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
          
          <div className="flex flex-col gap-1 mb-6">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-slate-300 line-through decoration-red-400 decoration-2">{symbol}{originalPrice}</span>
              <span className="text-7xl font-black text-slate-900 tracking-tighter">{symbol}{price}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                highlight ? 'bg-yellow-100 text-yellow-700' : 'bg-slate-100 text-slate-500'
              }`}>
                Early adopter price
              </span>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-red-100 text-red-600">
                {discountPercent}% OFF
              </span>
            </div>
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
          5-day free trial. {symbol}{price} after.
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
            Choose the model that fits your hardware. All are 100% private and run entirely on your machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto mb-16">
          <PricingCard
            name="Zest Lite"
            price={39}
            originalPrice={59}
            discountPercent={20}
            tagline="CPU Optimized"
            description="The essential companion for your daily terminal workflow. Fine-tuned for speed and efficiency, it handles standard CLI tasks instantly while maintaining a tiny resource footprint. Perfect for any laptop, anywhere."
            productType="lite"
            features={[
              "100% Offline usage",
              "No tracking of prompts or outputs",
              "No GPU required (CPU Optimized)",
              "Instant 0ms network latency",
              "Fine-tuned for everyday CLI tasks",
              "One-time purchase. Buy it, own it"
            ]}
          />

          <PricingCard
            name="Zest Hot"
            price={49}
            originalPrice={69}
            discountPercent={29}
            tagline="Balanced Performance"
            description="Our signature blend of power and precision. Designed for developers who need deeper logic for complex shell pipes and automation, without sacrificing system speed. The professional's choice for a private, local AI."
            productType="hot"
            features={[
              "100% Offline usage",
              "No tracking of prompts or outputs",
              "No GPU required (Balanced Power)",
              "Instant 0ms network latency",
              "Enhanced accuracy for complex logic",
              "One-time purchase. Buy it, own it"
            ]}
          />

          <PricingCard
            highlight
            name="Zest Extra Spicy"
            price={59}
            originalPrice={89}
            discountPercent={34}
            tagline="Maximum Precision"
            description="The purest, uncompromised model for mission-critical operations. Preserves full precision for the highest possible accuracy in multi-step scripts and complex command generation. Built for modern, high-performance systems."
            productType="extra_spicy"
            features={[
              "100% Offline usage",
              "No tracking of prompts or outputs",
              "No GPU required (High-Precision)",
              "Instant 0ms network latency",
              "Maximum logic for multi-step scripts",
              "One-time purchase. Buy it, own it"
            ]}
          />
        </div>

        <div className="mb-20 text-center">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            Securely processed with Stripe — We never see your card details.
          </p>
        </div>

        {/* Detailed Technical Requirements */}
        <div className="max-w-6xl mx-auto bg-slate-50 rounded-[4rem] p-10 md:p-20 border border-slate-100 relative">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight mx-auto inline-block">Technical Requirements</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-4">
            {/* Column Headers */}
            <div className="flex items-center gap-4 pb-6 border-b border-slate-200 mb-4">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center shadow-xl">
                <Laptop className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900">Zest Lite</h4>
                <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">Fast & Light</p>
              </div>
            </div>

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
                <MonitorSmartphone className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900">Zest Extra Spicy</h4>
                <p className="text-red-600 font-bold text-[10px] uppercase tracking-widest">Maximum Accuracy</p>
              </div>
            </div>

            {/* Recommendation Blurbs */}
            <p className="text-slate-600 font-bold text-sm leading-relaxed border-l-4 border-slate-400 pl-4 lg:min-h-[64px] flex items-center mb-4">
              MacBook Air, Mac Mini, or greater — Optimized for everyday hardware.
            </p>
            <p className="text-slate-600 font-bold text-sm leading-relaxed border-l-4 border-yellow-500 pl-4 lg:min-h-[64px] flex items-center mb-4">
              MacBook Pro with 12GB+ RAM — Balanced performance for developers.
            </p>
            <p className="text-slate-600 font-bold text-sm leading-relaxed border-l-4 border-red-500 pl-4 lg:min-h-[64px] flex items-center mb-4">
              MacBook Pro or Mac Studio with 16GB+ RAM — Maximum precision.
            </p>

            {/* Spec Rows */}
            <SpecItem
              icon={<Cpu className="w-5 h-5" />}
              label="Processor"
              value="All modern Apple Silicon and Intel Macs"
              iconColor="text-slate-900"
            />
            <SpecItem
              icon={<Cpu className="w-5 h-5" />}
              label="Processor"
              value="Apple Silicon or Intel (M-series recommended)"
              iconColor="text-yellow-700"
            />
            <SpecItem
              icon={<Cpu className="w-5 h-5" />}
              label="Processor"
              value="Apple Silicon optimized for best experience"
              iconColor="text-red-600"
            />

            <SpecItem
              icon={<SquareAsterisk className="w-5 h-5" />}
              label="Memory (RAM)"
              value="8GB RAM minimum"
              iconColor="text-slate-900"
            />
            <SpecItem
              icon={<SquareAsterisk className="w-5 h-5" />}
              label="Memory (RAM)"
              value="12GB RAM recommended"
              iconColor="text-yellow-700"
            />
            <SpecItem
              icon={<SquareAsterisk className="w-5 h-5" />}
              label="Memory (RAM)"
              value="32GB+ RAM recommended"
              iconColor="text-red-600"
            />

            <SpecItem
              icon={<HardDrive className="w-5 h-5" />}
              label="Storage"
              value="2.9GB DMG (3GB available space)"
              iconColor="text-slate-900"
            />
            <SpecItem
              icon={<HardDrive className="w-5 h-5" />}
              label="Storage"
              value="5.4GB DMG (6GB available space)"
              iconColor="text-yellow-700"
            />
            <SpecItem
              icon={<HardDrive className="w-5 h-5" />}
              label="Storage"
              value="11.9GB DMG (16GB available space)"
              iconColor="text-red-600"
            />

            <SpecItem
              icon={<Zap className="w-5 h-5" />}
              label="Graphics"
              value="CPU Optimized; no dedicated GPU required"
              iconColor="text-slate-900"
            />
            <SpecItem
              icon={<Zap className="w-5 h-5" />}
              label="Graphics"
              value="Unified Memory for optimized performance"
              iconColor="text-yellow-700"
            />
            <SpecItem
              icon={<Zap className="w-5 h-5" />}
              label="Graphics"
              value="Unified Memory for 0ms local latency"
              iconColor="text-red-600"
            />

            <SpecItem
              icon={<ShieldCheck className="w-5 h-5" />}
              label="OS Version"
              value="macOS 12.0 (Monterey) or later"
              iconColor="text-slate-900"
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
