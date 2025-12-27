
import React from 'react';
import { Terminal } from './components/Terminal';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Download, Menu, X, ArrowRight, ShieldCheck, Cpu, Apple, Citrus, Flame, Zap } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={scrollToTop}
          >
            <div className="w-10 h-10 zest-gradient-bg rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/20 group-hover:rotate-6 transition-transform">
              <Citrus className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
               <span className="text-xl font-black tracking-tight text-slate-900">Zest CLI</span>
               <span className="text-[10px] font-black text-red-500 uppercase tracking-widest leading-none">Spicy Lemonade</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-slate-500 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-wider">Features</a>
            <a href="#pricing" className="text-slate-500 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-wider">Pricing</a>
            <a href="#docs" className="text-slate-500 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-wider">Docs</a>
            <a href="#pricing" className="zest-gradient-bg text-white px-6 py-3 rounded-full text-sm font-black transition-all shadow-lg shadow-red-500/20 hover:scale-105 active:scale-95">
              Get Started
            </a>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-8 text-2xl font-black">
            <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#docs" onClick={() => setIsMenuOpen(false)}>Docs</a>
            <a href="#pricing" className="zest-gradient-bg text-center text-white py-5 rounded-3xl shadow-xl" onClick={() => setIsMenuOpen(false)}>Get Started</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-yellow-100/50 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-red-50/50 blur-[100px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-700 px-4 py-2 rounded-full border border-yellow-400/20 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 font-bold text-sm">
            <Flame className="w-4 h-4 text-red-500" />
            New: Zest v1.0
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-slate-900 max-w-5xl leading-[1.05]">
            Give your shell a <br />
            <span className="zest-gradient-text">spicy upgrade.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mb-14 leading-relaxed font-medium">
            Natural language to CLI commands. <br className="hidden md:block" />
            100% private. 100% offline.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 mb-24 w-full">
            <a href="#pricing" className="w-full sm:w-auto px-12 py-5 zest-gradient-bg text-white font-black text-lg rounded-3xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-red-500/20">
              <Download className="w-6 h-6" />
              Download for Mac
            </a>
          </div>

          {/* Terminal Demo */}
          <Terminal />

          {/* Local Proof Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 w-full max-w-5xl">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-50 rounded-3xl flex items-center justify-center mb-4 border border-yellow-100 shadow-sm">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="text-3xl font-black text-slate-900 mb-1">No API Keys</h4>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">0ms Cloud Latency</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-50 rounded-3xl flex items-center justify-center mb-4 border border-red-100 shadow-sm">
                <ShieldCheck className="w-8 h-8 text-red-500" />
              </div>
              <h4 className="text-3xl font-black text-slate-900 mb-1">100% Private</h4>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Disk-local Intelligence</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center mb-4 border border-slate-100 shadow-sm">
                <Cpu className="w-8 h-8 text-slate-600" />
              </div>
              <h4 className="text-3xl font-black text-slate-900 mb-1 leading-tight uppercase">CPU Only</h4>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">No GPU Required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <Features />
      <Pricing />

      {/* Simplified Footer */}
      <footer className="bg-slate-50 py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 zest-gradient-bg rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/20">
                <Citrus className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                 <span className="text-2xl font-black tracking-tight text-slate-900">Zest CLI</span>
                 <span className="text-xs font-black text-red-500 uppercase tracking-widest leading-none">Spicy Lemonade</span>
              </div>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed">
              The privacy-focused companion for the modern engineer. Cloud free, subscription free, and 100% offline. Works where you work.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
            <div>
              <h5 className="font-black text-slate-900 mb-6 uppercase tracking-wider text-sm">Product</h5>
              <ul className="space-y-4 font-bold text-slate-500">
                <li><a href="#" className="hover:text-red-500 transition-colors">Changelog</a></li>
                <li><a href="#" className="text-xs hover:text-red-500 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-slate-900 mb-6 uppercase tracking-wider text-sm">Docs</h5>
              <ul className="space-y-4 font-bold text-slate-500">
                <li><a href="#" className="hover:text-red-500 transition-colors">Getting Started</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Shell Setup</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Architecture</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-slate-900 mb-6 uppercase tracking-wider text-sm">Company</h5>
              <ul className="space-y-4 font-bold text-slate-500">
                <li><a href="#" className="hover:text-red-500 transition-colors">Spicy Lemonade</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-bold text-slate-400">© 2026 Spicy Lemonade. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
