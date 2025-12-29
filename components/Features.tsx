
import React from 'react';
import { Shield, Cpu, Zap, Lock, Plane, Terminal, Package, Ban } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-6 h-6 text-red-500" />,
    title: "Privacy First",
    description: "Your prompts never leave your disk. Zest is cloud-free by design, ensuring your shell history is yours alone."
  },
  {
    icon: <Ban className="w-6 h-6 text-yellow-600" />,
    title: "Anti-Subscription",
    description: "Zero monthly fees. Buy once, use forever. No API bills, no rate limits, no recurring costs."
  },
  {
    icon: <Plane className="w-6 h-6 text-red-500" />,
    title: "Works on an Airplane",
    description: "Works where you work. No internet required. Perfect for high-security environments and remote travel."
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    title: "No API Keys Needed",
    description: "Suggestions appear with 0ms cloud latency. No cloud LLM overhead and no API configurations required."
  },
  {
    icon: <Package className="w-6 h-6 text-red-500" />,
    title: "Compact Binary",
    description: "A single native Mac binary. Efficiently optimized to run in the background with minimal RAM overhead."
  },
  {
    icon: <Terminal className="w-6 h-6 text-yellow-600" />,
    title: "Broad Tool Support",
    description: "Seamlessly integrates with Zsh and Bash. Supports all major CLI tools including Git, Docker, and Kubernetes."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white scroll-mt-24" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-slate-900">Works where you work. <span className="zest-gradient-text">Spiced up.</span></h2>
          <p className="text-slate-500 max-w-5xl mx-auto text-lg font-medium">
            Zest CLI is a local, command line AI tool for the privacy-conscious power user.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300 group">
              <div className="mb-6 inline-block p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
