
import React from 'react';
import { Shield, Cpu, Zap, Lock, Plane, Terminal, Package, Ban, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: <CheckCircle2 className="w-6 h-6 text-red-500" />,
    title: "96%+ Accuracy",
    description: (
      <>
        Powered by Qwen. Achieves 96%+ accuracy* on internal benchmarks on real-world CLI commands ranging from daily shell operations to complex Docker and Kubernetes orchestration. <span className="text-xs text-slate-400">Zest Extra Spicy</span>
      </>
    )
  },
  {
    icon: <Shield className="w-6 h-6 text-yellow-600" />,
    title: "Privacy First",
    description: "Runs locally. Your data stays private. Built on fully open-source, industry approved, commercial-friendly foundations."
  },
  {
    icon: <Ban className="w-6 h-6 text-red-500" />,
    title: "Anti-Subscription",
    description: "Zero monthly fees. Buy once, use forever. No API bills, no rate limits, no recurring costs."
  },
  {
    icon: <Terminal className="w-6 h-6 text-yellow-600" />,
    title: "100+ Tools Supported",
    description: "Native support for Docker, Kubernetes, AWS, Git, and over 100 standard Unix administration tools."
  },
  {
    icon: <Zap className="w-6 h-6 text-red-500" />,
    title: "0ms Cloud Latency",
    description: "Instant suggestions without internet round-trips. Suggestions appear at the speed of your local CPU."
  },
  {
    icon: <Plane className="w-6 h-6 text-yellow-600" />,
    title: "Fully Offline",
    description: "Works on airplanes, in remote locations, or during outages. The model lives inside the app, not the cloud."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="pt-12 pb-24 px-6 bg-white scroll-mt-24" id="features">
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
