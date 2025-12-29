
import React, { useState } from 'react';
import { Terminal } from './components/Terminal';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { 
  Download, Menu, X, ArrowRight, ShieldCheck, 
  Cpu, Apple, Citrus, Flame, Zap, Users, 
  BookOpen, Globe, ArrowLeft, Mail, Github,
  History, Shield, FileText, Info, AlertTriangle, Lightbulb, BarChart3
} from 'lucide-react';

type View = 'landing' | 'about' | 'tos' | 'changelog' | 'privacy' | 'docs';

const PageHeader: React.FC<{ onBack: () => void; title: string; subtitle?: string; icon: React.ReactNode }> = ({ onBack, title, subtitle, icon }) => (
  <div className="mb-16">
    <button 
      onClick={onBack}
      className="group flex items-center gap-2 text-slate-500 hover:text-red-500 font-bold mb-16 transition-colors"
    >
      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
      Back to Zest
    </button>

    <div className="flex items-start gap-6">
      <div className="w-20 h-20 zest-gradient-bg rounded-[2rem] flex items-center justify-center shadow-xl shadow-yellow-500/20 shrink-0 mt-1">
        {icon}
      </div>
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none m-0 p-0">{title}</h1>
        {subtitle && (
          <p className="text-red-500 font-black uppercase tracking-[0.25em] text-[10px] md:text-xs mt-2 text-left leading-none m-0 p-0 pl-2">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  </div>
);

const DocsPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto animate-in fade-in duration-500">
    <PageHeader onBack={onBack} title="Getting Started" subtitle="User Guide & Best Practices" icon={<Info className="w-10 h-10 text-white" />} />
    
    <div className="prose prose-slate lg:prose-xl font-medium text-slate-600 space-y-16">
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-8 rounded-r-[2rem]">
        <h3 className="text-slate-900 font-black flex items-center gap-3 mt-0">
          <Lightbulb className="w-6 h-6 text-yellow-600" />
          The SLM Mindset
        </h3>
        <p className="mb-0">
          Zest is powered by a <strong>Small Language Model (SLM)</strong>. Unlike massive cloud LLMs, it is designed for efficiency and specific utility. It excels at direct command translation but isn't a conversational partner. Treat it like a precise tool, not a chat bot.
        </p>
      </div>

      <section>
        <h3 className="text-slate-900 font-black">1. Basic Usage</h3>
        <p>Once installed, simply prefix your natural language request with <code>zest</code> in your terminal:</p>
        <div className="bg-slate-900 rounded-2xl p-6 text-yellow-400 font-mono text-sm mb-4">
          $ zest show me my ip address
        </div>
        <p>Zest will suggest a command. Press <kbd className="bg-slate-100 px-2 py-1 rounded border">y</kbd> to execute it or <kbd className="bg-slate-100 px-2 py-1 rounded border">n</kbd> to cancel.</p>
      </section>

      <section>
        <h3 className="text-slate-900 font-black">2. Admin Commands</h3>
        <p>Manage your local installation and license using these flags:</p>
        <ul className="list-none pl-0 space-y-4">
          <li className="flex gap-4">
            <code className="text-red-500 bg-red-50 px-3 py-1 rounded-lg h-fit">--logout</code>
            <span>De-authorizes the current machine, freeing up a slot on your license.</span>
          </li>
          <li className="flex gap-4">
            <code className="text-red-500 bg-red-50 px-3 py-1 rounded-lg h-fit">--uninstall</code>
            <span>Completely removes the local model and binaries from your system.</span>
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-slate-900 font-black">3. Licensing (2 Device Limit)</h3>
        <p>Each Zest license allows for <strong>2 active personal devices</strong>. If you reach this limit, use <code>zest --logout</code> on one machine to free space for a new one. This registration is the only piece of functional data we capture to protect your privacy while managing seat counts.</p>
      </section>

      <section className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
        <h3 className="text-slate-900 font-black flex items-center gap-3 mt-0">
          <AlertTriangle className="w-6 h-6 text-yellow-500" />
          Prompting Tips
        </h3>
        <p className="text-sm uppercase tracking-widest font-black text-slate-400 mb-6">Maximize Zest's Accuracy</p>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 font-black text-xs">1</div>
            <p className="m-0"><strong>Keep it simple:</strong> Use direct verbs. Instead of "I would like to see my files," use "list files."</p>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 font-black text-xs">2</div>
            <p className="m-0"><strong>Avoid emotion:</strong> Zest doesn't understand "please," "thank you," or "urgently." Strip prompts of politeness or stress.</p>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 font-black text-xs">3</div>
            <p className="m-0"><strong>Use single tasks:</strong> While Zest can handle chained commands, direct and single commands are better.</p>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 font-black text-xs">4</div>
            <p className="m-0"><strong>Avoid ambiguity:</strong> Be specific about tools. For example, specify if you are targeting a <strong>Kubernetes</strong> pod vs a <strong>Docker</strong> container.</p>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 font-black text-xs">5</div>
            <p className="m-0"><strong>Zero Memory:</strong> In order to efficiently run on CPU the model has no memory and each zest command is independent. Follow the style guide/prompting tips each time.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-slate-900 font-black flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-red-500" />
          Benchmark
        </h3>
        <p>
          We evaluated Zest on the <a href="https://intercode-benchmark.github.io/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">intercode nl2bash benchmark</a>. Using an LLM judge (Opus 4.5), our local model completed <strong>34% of tasks with zero-shot prompting</strong>. This performance puts Zest in line with <strong>ChatGPT 4 (34% in 2023)</strong> and significantly ahead of older models like <strong>Llama-2-70B-Chat (31.5% in 2023)</strong> and <strong>Vicuna-13B (24.5% in 2023)</strong>.
        </p>
        <div className="mt-32 bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs italic w-full leading-relaxed">
          We built this tool to handle most everyday tasks, but it won’t get everything right all the time. If something doesn’t work as expected, let us know using the contact form. We really don’t collect or store your prompts or outputs, so we can’t see issues unless you tell us about them. We’re always working to improve, and your feedback really helps.
        </div>
      </section>
    </div>
  </section>
);

const AboutPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto animate-in fade-in duration-500">
    <PageHeader onBack={onBack} title="Spicy Lemonade" subtitle="Independent Research Lab" icon={<Citrus className="w-12 h-12 text-white" />} />
    <div className="prose prose-slate lg:prose-xl">
      <p className="text-2xl md:text-3xl text-slate-600 font-medium leading-relaxed mb-16">
        We believe the future of intelligence belongs to you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-4">
          <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-yellow-500" />
            Who We Are
          </h3>
          <p className="text-slate-600 leading-relaxed font-medium">
            Spicy Lemonade is a boutique collective of independent engineers and researchers. We come from diverse backgrounds across academia and industry, united by a shared obsession with high-performance computing and user empowerment.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-red-500" />
            Our Pedigree
          </h3>
          <p className="text-slate-600 leading-relaxed font-medium">
            Our team brings deep expertise in machine learning research, mathematics, and large-scale data systems. We optimize models and systems to run efficiently, ensuring performance and data sovereignty go hand-in-hand.
          </p>
        </div>
      </div>
      <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 mb-16">
        <h3 className="text-2xl font-black text-slate-900 mb-8">The Philosophy</h3>
        <div className="space-y-10">
          <div className="flex gap-6">
            <div className="w-10 h-10 rounded-2xl bg-yellow-400/20 flex items-center justify-center shrink-0">
              <span className="text-yellow-700 font-black text-sm">01</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2 text-lg">Radical Privacy</h4>
              <p className="text-slate-500 font-medium leading-relaxed">
                We believe in absolute data privacy. We design for privacy by default, not as an afterthought.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-10 h-10 rounded-2xl bg-red-400/20 flex items-center justify-center shrink-0">
              <span className="text-red-700 font-black text-sm">02</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2 text-lg">Anti-Subscription</h4>
              <p className="text-slate-500 font-medium leading-relaxed">
                Tools should be owned, not rented. We are strictly anti-monthly and anti-yearly subscriptions. Our desktop tools are pay-once. You buy it. You own it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ChangelogPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto animate-in fade-in duration-500">
    <PageHeader onBack={onBack} title="Changelog" icon={<History className="w-10 h-10 text-white" />} />
    <div className="space-y-12">
      <div className="border-l-4 border-yellow-400 pl-8 py-2">
        <h3 className="text-2xl font-black text-slate-900">v1.0.0 — The Spicy Release</h3>
        <p className="text-slate-400 font-bold mb-4">January 20, 2026</p>
        <ul className="space-y-4 text-slate-600 font-medium">
          <li>• Initial public launch of Zest CLI for macOS.</li>
          <li>• Optimized local model for 0ms cloud latency on Apple.</li>
          <li>• CPU capable if no GPU is detected.</li>
          <li>• Integrated shell support for Zsh and Bash.</li>
          <li>• Offline mode activated by default.</li>
          <li>• Compact ~2.9GB footprint for modern systems.</li>
        </ul>
      </div>
    </div>
  </section>
);

const PrivacyPolicyPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto animate-in fade-in duration-500">
    <PageHeader onBack={onBack} title="Privacy Policy" icon={<Shield className="w-10 h-10 text-white" />} />
    <div className="prose prose-slate lg:prose-xl font-medium text-slate-600 space-y-8">
      <div>
        <h3 className="text-slate-900 font-black">1. Local Processing</h3>
        <p>Zest CLI processes all language tasks locally on your device. We do not transmit your terminal commands or prompts to our servers.</p>
      </div>
      <div>
        <h3 className="text-slate-900 font-black">2. Data Collection</h3>
        <p>We do not collect usage analytics, patterns, or shell history. Your interaction with Zest is completely private.</p>
      </div>
      <div>
        <h3 className="text-slate-900 font-black">3. Functional Telemetry</h3>
        <p>The only telemetry that happens is registering a machine ID to your user i.d. to respect our 2 device limit. This is strictly for functional reasons such as license verification, machine authorization (e.g., via <code>zest --logout</code>), and proper cleanup during <code>zest --uninstall</code>.</p>
      </div>
      <div>
        <h3 className="text-slate-900 font-black">4. Third Party Services</h3>
        <p>Payments are handled by Polar.sh. We do not see or store your credit card details. Refer to Polar.sh for their specific privacy terms regarding billing.</p>
      </div>
    </div>
  </section>
);

const TermsOfServicePage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto animate-in fade-in duration-500">
    <PageHeader onBack={onBack} title="Terms of Service" icon={<FileText className="w-10 h-10 text-white" />} />
    <div className="prose prose-slate lg:prose-xl font-medium text-slate-600 space-y-8">
      <div>
        <h3 className="text-slate-900 font-black">1. License</h3>
        <p>A purchase of Zest CLI grants you a non-exclusive, perpetual license for individual use on up to 2 personal devices owned by you.</p>
      </div>
      <div>
        <h3 className="text-slate-900 font-black">2. Usage</h3>
        <p>You may not reverse engineer, decompile, or redistribute the Zest CLI binary. The software is provided "as is" without warranty of any kind.</p>
      </div>
      <div>
        <h3 className="text-slate-900 font-black">3. Refund Policy</h3>
        <p>Due to the nature of downloadable software, all sales are final. Please review the documentation before purchase.</p>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentView, setCurrentView] = useState<View>('landing');

  const handleNav = (view: View, sectionId?: string) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    if (sectionId && view === 'landing') {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'about': return <AboutPage onBack={() => handleNav('landing')} />;
      case 'changelog': return <ChangelogPage onBack={() => handleNav('landing')} />;
      case 'privacy': return <PrivacyPolicyPage onBack={() => handleNav('landing')} />;
      case 'tos': return <TermsOfServicePage onBack={() => handleNav('landing')} />;
      case 'docs': return <DocsPage onBack={() => handleNav('landing')} />;
      default: return (
        <>
          <section className="pt-48 pb-32 px-6 relative overflow-hidden">
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
              <div className="flex flex-col items-center justify-center gap-4 mb-24 w-full">
                <a href="#pricing" className="w-full sm:w-auto px-12 py-5 zest-gradient-bg text-white font-black text-lg rounded-3xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-red-500/20">
                  <Download className="w-6 h-6" />
                  Download for Mac
                </a>
                <p className="text-sm font-bold text-slate-400 tracking-wide">Coming soon for Windows</p>
              </div>
              <Terminal />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 w-full max-w-5xl">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-yellow-50 rounded-3xl flex items-center justify-center mb-4 border border-yellow-100 shadow-sm">
                    <Zap className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 mb-1">No API Keys</h4>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">0ms Cloud latency</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-red-50 rounded-3xl flex items-center justify-center mb-4 border border-red-100 shadow-sm">
                    <ShieldCheck className="w-8 h-8 text-red-500" />
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 mb-1">100% Private</h4>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Local intelligence</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center mb-4 border border-slate-100 shadow-sm">
                    <Cpu className="w-8 h-8 text-slate-600" />
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 mb-1 leading-tight uppercase">CPU Capable</h4>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">High performance</p>
                </div>
              </div>
            </div>
          </section>
          <Features />
          <Pricing />
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={() => handleNav('landing')}
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
            <button onClick={() => handleNav('landing', 'features')} className="text-slate-500 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-wider">Features</button>
            <button onClick={() => handleNav('landing', 'pricing')} className="text-slate-500 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-wider">Pricing</button>
            <button onClick={() => handleNav('about')} className="text-slate-500 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-wider">About</button>
            <button onClick={() => handleNav('docs')} className="zest-gradient-bg text-white px-6 py-3 rounded-full text-sm font-black transition-all shadow-lg shadow-red-500/20 hover:scale-105 active:scale-95">
              Get Started
            </button>
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
            <button onClick={() => handleNav('landing', 'features')} className="text-left">Features</button>
            <button onClick={() => handleNav('landing', 'pricing')} className="text-left">Pricing</button>
            <button onClick={() => handleNav('about')} className="text-left">About</button>
            <button onClick={() => handleNav('docs')} className="zest-gradient-bg text-center text-white py-5 rounded-3xl shadow-xl">Get Started</button>
          </div>
        </div>
      )}

      {renderView()}

      {/* Simplified Footer */}
      <footer className="bg-slate-50 py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => handleNav('landing')}>
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
                <li><button onClick={() => handleNav('changelog')} className="hover:text-red-500 transition-colors text-left">Changelog</button></li>
                <li><button onClick={() => handleNav('privacy')} className="hover:text-red-500 transition-colors text-left">Privacy Policy</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-slate-900 mb-6 uppercase tracking-wider text-sm">Docs</h5>
              <ul className="space-y-4 font-bold text-slate-500">
                <li><button onClick={() => handleNav('docs')} className="hover:text-red-500 transition-colors text-left">Getting Started</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-slate-900 mb-6 uppercase tracking-wider text-sm">Company</h5>
              <ul className="space-y-4 font-bold text-slate-500">
                <li><button onClick={() => handleNav('about')} className="hover:text-red-500 transition-colors text-left">Spicy Lemonade</button></li>
                <li><button onClick={() => handleNav('tos')} className="hover:text-red-500 transition-colors text-left">Terms of Service</button></li>
                <li><button className="hover:text-red-500 transition-colors text-left">Contact Us</button></li>
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
