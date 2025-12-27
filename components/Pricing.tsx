
import React, { useState, useEffect } from 'react';
import { Check, ExternalLink, Flame, Cpu } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [currency, setCurrency] = useState('$');
  const [symbol, setSymbol] = useState('$');

  useEffect(() => {
    try {
      const locale = navigator.language;
      const euroLocales = ['de', 'fr', 'it', 'es', 'nl', 'be', 'at', 'pt', 'fi', 'ie', 'gr', 'sk', 'si', 'ee', 'lv', 'lt', 'mt', 'cy'];
      const isEuroZone = euroLocales.some(lang => locale.startsWith(lang));
      
      if (isEuroZone) {
        setCurrency('EUR');
        setSymbol('€');
      } else {
        setCurrency('USD');
        setSymbol('$');
      }
    } catch (e) {
      setCurrency('USD');
      setSymbol('$');
    }
  }, []);

  return (
    <section className="py-24 px-6 relative bg-slate-50 scroll-mt-24" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
            <Flame className="w-3 h-3" />
            Limited One-Time Fee
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">Anti-Subscription.</h2>
          <p className="text-slate-600 text-lg font-medium">No accounts. No credit cards stored. Just the tool.</p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="flex flex-col p-10 rounded-3xl border-2 border-yellow-400 bg-white shadow-2xl shadow-yellow-500/10 scale-105 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-100 rounded-full blur-2xl opacity-50" />
            
            <div className="mb-10 relative">
              <div className="flex items-center gap-2 text-slate-900 font-black mb-1">
                <Cpu className="w-5 h-5 text-yellow-600" />
                <span>CPU Friendly</span>
              </div>
              <h3 className="text-2xl font-black mb-2 text-slate-900">
                Zest Lifetime License
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-6xl font-black text-slate-900">{symbol}45</span>
                <span className="text-slate-400 font-bold uppercase text-sm">one-time</span>
              </div>
              <p className="text-slate-500 font-medium">Secure your copy of the local CLI companion</p>
            </div>

            <ul className="space-y-5 mb-10 flex-grow">
              {[
                "100% Local intelligence",
                "100% Offline usage",
                "No tracking or analytics",
                "Optimised for any laptop CPU",
                "Anti-subscription forever",
                "0ms cloudl latency"
              ].map((feat, j) => (
                <li key={j} className="flex items-start gap-3 text-slate-700 font-medium">
                  <div className="mt-1 p-0.5 rounded-full bg-yellow-400">
                    <Check className="w-4 h-4 text-white shrink-0" />
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-5 px-6 rounded-3xl font-black text-lg flex items-center justify-center gap-3 transition-all zest-gradient-bg text-white shadow-2xl shadow-red-500/20 hover:scale-105 active:scale-95">
              Buy now
              <ExternalLink className="w-5 h-5" />
            </button>
            
            <p className="text-center mt-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed px-4">
              Securely processed via Polar.sh. <br />
              We never see or store card details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};