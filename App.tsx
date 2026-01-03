import React, { useState } from 'react';
import { Terminal } from './components/Terminal';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { 
  Download, Menu, X, ArrowRight, ShieldCheck, 
  Cpu, Apple, Citrus, Flame, Zap, Users, 
  BookOpen, Globe, ArrowLeft, Mail, Github,
  History, Shield, FileText, Info, AlertTriangle, Lightbulb, BarChart3,
  Layers, CheckCircle2, Boxes, MessageSquare, Send, HelpCircle,
  Search, ExternalLink, Trash2, ChevronDown
} from 'lucide-react';

type View = 'landing' | 'about' | 'tos' | 'changelog' | 'privacy' | 'docs' | 'report' | 'faq';

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

const FAQItem: React.FC<{ q: string; a: React.ReactNode; isOpen: boolean; onToggle: () => void }> = ({ q, a, isOpen, onToggle }) => (
  <div className="bg-slate-50 rounded-[2.5rem] border border-slate-100 overflow-hidden transition-all duration-300">
    <button 
      onClick={onToggle}
      className="w-full p-10 flex items-center justify-between text-left hover:bg-slate-100/50 transition-colors"
    >
      <h3 className="text-xl font-black text-slate-900 flex items-start gap-4">
        <span className="text-red-500 shrink-0">Q.</span>
        {q}
      </h3>
      <div className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </div>
    </button>
    <div 
      className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
    >
      <div className="px-10 pb-10">
        <div className="text-slate-600 font-medium leading-relaxed pl-10 border-l-2 border-slate-200">
          {a}
        </div>
      </div>
    </div>
  </div>
);

const FAQPage: React.FC<{ onBack: () => void; onNavigate: (view: View) => void }> = ({ onBack, onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showDmgModal, setShowDmgModal] = useState(false);
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleRequestLink = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setShowDmgModal(false);
      setSent(false);
      setEmail('');
    }, 3000);
  };

  const faqs = [
    {
      q: "The command generated isn't working as expected. What should I do?",
      a: (
        <>
          Zest is currently in its early version, and we truly appreciate your confidence in being an early adopter. While we strive for accuracy, edge cases occur. Please head over to our <button onClick={() => onNavigate('report')} className="text-red-500 underline font-bold hover:text-red-600">Report Issues</button> page to share the details. We are constantly improving the engine based on research and your valuable feedback helps us prioritize the most common failures. Thank you for helping us grow.
        </>
      )
    },
    {
      q: "I lost my download file (DMG). How can I reinstall Zest on another device?",
      a: (
        <div className="space-y-4">
          <p>If you've accidentally deleted your DMG and need a fresh link to install the model on another device, we've got you covered. Provide the email used for your purchase below, and if it matches our database, you'll receive a new download link instantly.</p>
          <button 
            onClick={() => setShowDmgModal(true)}
            className="px-6 py-3 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all text-sm flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Recover Download Link
          </button>
        </div>
      )
    },
    {
      q: "How do I remove Zest and free up a license slot?",
      a: (
        <>
          <p className="mb-4">You have three main ways to manage your device slots:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>zest --logout:</strong> Deregisters your machine while keeping the model files on disk. Perfect for temporary transfers.</li>
            <li><strong>zest --uninstall:</strong> Fully removes the model files and deregisters the device to free up disk space.</li>
            <li><strong>Drag and Drop:</strong> Dragging the Zest app to the Trash from your Applications folder is functionally identical to running <code>zest --uninstall</code>; it will automatically deregister your slot.</li>
          </ul>
          <p className="mt-4">Any of these methods will free up one of your 2 available device slots per product.</p>
        </>
      )
    },
    {
      q: "How do I completely remove Zest from my computer?",
      a: (
        <div className="space-y-4">
          <p>Running <code>zest --uninstall</code> removes your license, model files, and the app from Applications, but keeps the CLI installed so you can check status or reinstall later.</p>
          <p>To completely remove all Zest files from your system, run the following commands in Terminal after uninstalling:</p>
          <div className="bg-slate-900 rounded-2xl p-6 text-yellow-400 font-mono text-sm space-y-1">
            <div>rm -rf ~/.zest</div>
            <div>rm -rf ~/Library/Application\ Support/Zest</div>
            <div>sudo rm /usr/local/bin/zest</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto animate-in fade-in duration-500">
      <PageHeader onBack={onBack} title="FAQ" subtitle="Common Questions & Answers" icon={<HelpCircle className="w-10 h-10 text-white" />} />
      
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <FAQItem 
            key={i} 
            q={faq.q} 
            a={faq.a} 
            isOpen={openIndex === i} 
            onToggle={() => setOpenIndex(openIndex === i ? null : i)} 
          />
        ))}
      </div>

      {showDmgModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowDmgModal(false)} />
          <div className="bg-white p-10 rounded-[3rem] shadow-2xl relative z-10 max-w-md w-full animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowDmgModal(false)}
              className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Recover DMG</h3>
            <p className="text-slate-500 font-medium mb-8">Enter the email associated with your purchase.</p>
            
            {sent ? (
              <div className="bg-green-50 text-green-700 p-6 rounded-3xl border border-green-100 font-bold text-center">
                Email found! A new download link has been sent to your inbox.
              </div>
            ) : (
              <form onSubmit={handleRequestLink} className="space-y-4">
                <input 
                  type="email" 
                  required
                  placeholder="name@company.com"
                  className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-red-500 focus:outline-none transition-all font-bold"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  type="submit"
                  className="w-full py-5 zest-gradient-bg text-white font-black rounded-2xl shadow-xl shadow-red-500/20 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Request Download Link
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

const ReportIssuesPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto animate-in fade-in duration-500">
        <PageHeader onBack={onBack} title="Thank You" subtitle="Feedback Received" icon={<CheckCircle2 className="w-10 h-10 text-white" />} />
        <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 text-center">
          <h3 className="text-2xl font-black text-slate-900 mb-4">We've got it!</h3>
          <p className="text-slate-600 font-medium mb-8 max-w-lg mx-auto leading-relaxed">
            Thank you for helping us improve Zest. We'll use your report to refine our Small Language Model in future releases.
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
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Natural Language Prompt</label>
            <textarea 
              required
              placeholder="e.g. 'show me all docker images created last week'"
              className="w-full p-6 bg-white border-2 border-slate-100 rounded-3xl focus:border-red-500 focus:outline-none transition-all font-mono text-sm min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Failed Model Output</label>
            <textarea 
              required
              placeholder="The incorrect command Zest suggested..."
              className="w-full p-6 bg-white border-2 border-slate-100 rounded-3xl focus:border-red-500 focus:outline-none transition-all font-mono text-sm min-h-[100px]"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-5 zest-gradient-bg text-white font-black text-lg rounded-3xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-red-500/20"
          >
            <span className="flex items-center gap-2">
              <Send className="w-5 h-5" />
              Send Feedback
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

const DocsPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Account for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { label: 'Basic Usage', id: 'basic-usage' },
    { label: 'Using Both Models', id: 'both-models' },
    { label: 'Performance & Accuracy', id: 'performance' },
    { label: 'Licensing', id: 'licensing' },
    { label: 'Benchmark', id: 'benchmark' },
    { label: 'Prompting Tips', id: 'prompting-tips' },
  ];

  return (
    <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto animate-in fade-in duration-500">
      <PageHeader onBack={onBack} title="Getting Started" subtitle="User Guide & Best Practices" icon={<Info className="w-10 h-10 text-white" />} />
      
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Sidebar */}
        <aside className="lg:w-64 shrink-0">
          <nav className="sticky top-32 space-y-1">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-6 pl-4">On this page</p>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="w-full text-left px-4 py-3 rounded-2xl text-sm font-bold text-slate-500 hover:text-red-500 hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <div className="flex-grow prose prose-slate lg:prose-xl font-medium text-slate-600 space-y-24 max-w-4xl">
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-8 rounded-r-[2rem] !mt-0">
            <h3 className="text-slate-900 font-black flex items-center gap-3 mt-0">
              <Lightbulb className="w-6 h-6 text-yellow-600" />
              The SLM Mindset
            </h3>
            <p className="mb-0">
              Zest is powered by a <strong>Small Language Model (SLM)</strong>. Unlike massive cloud LLMs, it is designed for efficiency and specific utility. Our CLI Assistant is built on the industry leading <strong>Qwen 3 model</strong>, one of the most capable small language models, fine-tuned specifically using real world examples.
            </p>
          </div>

          <section id="basic-usage" className="scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-b-2 border-slate-100 pb-4">1. Basic Usage</h2>
            <p className="mb-6">
              On first install, you will be prompted to enter the <strong>email address</strong> you used to purchase your license. You will then receive a <strong>One-Time Password (OTP)</strong> via email to enter in your terminal. This process activates your license and registers your machine.
            </p>
            <p className="mb-6">
              You can repeat this process on one other machine (up to <strong>2 devices total</strong>). In order to deactivate a machine and free up a license slot, simply run <code>zest --logout</code> or <code>zest --uninstall</code>.
            </p>
            <p className="mb-6">After activation, simply prefix any natural language request with <code>zest</code>:</p>
            <div className="bg-slate-900 rounded-2xl p-6 text-yellow-400 font-mono text-sm mb-4">
              $ zest show me my ip address
            </div>
            <p>Zest will suggest a command. Press <kbd className="bg-slate-100 px-2 py-1 rounded border">y</kbd> to execute it or <kbd className="bg-slate-100 px-2 py-1 rounded border">n</kbd> to cancel.</p>
          </section>

          <section id="both-models" className="scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-b-2 border-slate-100 pb-4">1.1 Using Both Models</h2>
            <p className="mb-6">If you've purchased both FP16 (Extra Spicy) and Q5 (Lite) models:</p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 font-black text-xs">1</div>
                <p className="m-0">Install both apps to <code>/Applications</code></p>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 font-black text-xs">2</div>
                <div className="m-0">
                  <p className="m-0">Check your current status:</p>
                  <code className="block bg-slate-900 text-yellow-400 p-4 rounded-xl mt-2 font-mono text-sm">zest --status</code>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 font-black text-xs">3</div>
                <div className="m-0">
                  <p className="m-0">Switch between models:</p>
                  <code className="block bg-slate-900 text-yellow-400 p-4 rounded-xl mt-2 font-mono text-sm">
                    zest --model --fp      # Use FP16 model<br />
                    zest --model --q5      # Use Q5 model
                  </code>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-blue-50 p-6 rounded-3xl border border-blue-100 text-sm">
              <p className="m-0"><strong>Note:</strong> If both models are installed, Zest defaults to FP16 (higher quality). You can override this with <code>--model --q5</code>.</p>
            </div>

            <div className="mt-12 space-y-12">
              <div>
                <h4 className="text-xl font-black text-slate-900 mb-4">Licensing</h4>
                <p>Your license allows installation on up to <strong>2 devices per product</strong>. If you bought both FP16 and Q5, you have:</p>
                <ul className="list-disc pl-6 space-y-1 font-bold text-slate-700">
                  <li>2 device slots for FP16</li>
                  <li>2 device slots for Q5</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-black text-slate-900 mb-4">Logout (Frees device slot)</h4>
                <p className="mb-4 text-sm">Use <code>--logout</code> to free a device slot while keeping the model on disk. You can re-activate later without re-downloading.</p>
                <code className="block bg-slate-900 text-yellow-400 p-4 rounded-xl font-mono text-sm">
                  zest --logout           # Log out from ALL products<br />
                  zest --logout --fp      # Log out from FP16 only<br />
                  zest --logout --q5      # Log out from Q5 only
                </code>
              </div>

              <div>
                <h4 className="text-xl font-black text-slate-900 mb-4">Uninstall (Removes everything)</h4>
                <p className="mb-4 text-sm">Use <code>--uninstall</code> to completely remove the model file, license, and deregister the device. This frees disk space.</p>
                <code className="block bg-slate-900 text-yellow-400 p-4 rounded-xl font-mono text-sm">
                  zest --uninstall        # Full uninstall of ALL products<br />
                  zest --uninstall --fp   # Uninstall FP16 only<br />
                  zest --uninstall --q5   # Uninstall Q5 only
                </code>
              </div>

              <div>
                <h4 className="text-xl font-black text-slate-900 mb-4">Reinstalling & Updates</h4>
                <p className="mb-4">If you try to install a model that's already on your device, you'll be prompted to either continue (re-activate license) or cancel.</p>
                <p>Zest checks for updates automatically and notifies you in your terminal when a new version is available.</p>
              </div>
            </div>
          </section>

          <section id="performance" className="scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-b-2 border-slate-100 pb-4">2. Performance & Accuracy</h2>
            
            <div className="space-y-12">
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <h4 className="text-xl font-black text-slate-900 mb-2">Zest Extra Spicy (Full Precision)</h4>
                <p className="text-red-500 font-black mb-4">96% accuracy on production CLI workflows.</p>
                <p className="font-bold text-slate-900 mb-2 underline decoration-red-200">Strengths:</p>
                <ul className="list-disc pl-6 space-y-1 mb-6 text-base">
                  <li>100% accurate on Docker, Cloud tools, and common commands</li>
                  <li>100% accurate on intermediate tasks (systemctl, package management)</li>
                  <li>87.5% accurate on advanced Kubernetes & system administration workflows</li>
                  <li>75% accurate on advanced text processing (vs 25% in Lite)</li>
                  <li>Excels at regex patterns, log analysis, text processing, command pipelines</li>
                </ul>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest bg-white py-2 px-4 rounded-xl border border-slate-200 inline-block">
                  Model Details: 8GB | Full precision FP16 | Requires Apple Silicon (M1/M2/M3)
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <h4 className="text-xl font-black text-slate-900 mb-2">Zest Lite (CPU-Optimized)</h4>
                <p className="text-yellow-600 font-black mb-4">92% accuracy on production CLI workflows.</p>
                <p className="font-bold text-slate-900 mb-2 underline decoration-yellow-200">Strengths:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4 text-base">
                  <li>100% accurate on Docker, Cloud tools, and common commands</li>
                  <li>100% accurate on intermediate tasks (systemctl, package management)</li>
                  <li>87.5% accurate on Kubernetes & system administration</li>
                  <li>Optimized Q5_K_M quantization for fast CPU results</li>
                </ul>
                <p className="font-bold text-slate-900 mb-2 underline decoration-slate-200">Trade-offs:</p>
                <ul className="list-disc pl-6 space-y-1 mb-6 text-base">
                  <li>4% lower overall accuracy (92% vs 96%)</li>
                  <li>Reduced text processing accuracy (25% vs 75%)</li>
                  <li>3x smaller download (2.6GB vs 8GB)</li>
                  <li>Runs on any Mac (Intel or Apple Silicon)</li>
                </ul>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest bg-white py-2 px-4 rounded-xl border border-slate-200 inline-block">
                  Model Details: 2.6GB | Q5_K_M quantization | Universal compatibility
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-slate-900 font-black mb-4">Choosing Your Model</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse mt-4">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="py-2 font-black text-slate-900">Need</th>
                      <th className="py-2 font-black text-slate-900">Recommendation</th>
                    </tr>
                  </thead>
                  <tbody className="text-base">
                    <tr className="border-b border-slate-100">
                      <td className="py-2">Maximum accuracy</td>
                      <td className="py-2 font-black text-red-500">Extra Spicy</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-2">Regex, log analysis, text processing</td>
                      <td className="py-2 font-black text-red-500">Extra Spicy</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-2">Simple Docker/Git/AWS/Kubernetes commands</td>
                      <td className="py-2 font-bold">Either</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-2">Smaller download, day to day use</td>
                      <td className="py-2 font-black text-yellow-600">Lite</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="licensing" className="scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-b-2 border-slate-100 pb-4">3. Licensing (2 Device Limit)</h2>
            <p>Each Zest license allows for <strong>2 active personal devices per product</strong>. If you reach this limit, use <code>zest --logout</code> (to keep files) or <code>zest --uninstall</code> (to free disk space) on one machine to free a slot for a new one. <strong>Note: Dragging the application to the Trash from your Applications folder is functionally identical to running <code>zest --uninstall</code>; it will automatically deregister your slot.</strong> This registration is the only piece of functional data we capture to protect your privacy while managing seat counts.</p>
          </section>

          <section id="benchmark" className="scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-b-2 border-slate-100 pb-4">4. Benchmark</h2>
            <p>
              We evaluated Zest on the <a href="https://intercode-benchmark.github.io/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">intercode nl2bash benchmark</a>. Using an LLM judge (Opus 4.5), our local model completed <strong>34% of tasks with zero-shot prompting</strong>. This performance puts Zest in line with <strong>ChatGPT 4 (34% in 2023)</strong> and significantly ahead of older models like <strong>Llama-2-70B-Chat (31.5% in 2023)</strong> and <strong>Vicuna-13B (24.5% in 2023)</strong>.
            </p>
            <p>
              Our 96% accuracy rate is based on internal testing against 50 hand-selected, unseen Unix tasks.
              <br /><br />
              Zest CLI produced syntactically correct commands that achieved the intended outcome in a zero-shot environment. The remaining 4% typically involved hallucinated flags or selecting a sub-optimal command for the specific shell environment.
            </p>
            <div className="mt-12 bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs italic w-full leading-relaxed">
              We built this tool to handle most everyday tasks, but it won’t get everything right all the time. If something doesn’t work as expected, let us know using the contact form. We really don’t collect or store your prompts or outputs, so we can’t see issues unless you tell us about them. We’re always working to improve, and your feedback really helps.
            </div>
          </section>

          <section id="prompting-tips" className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 scroll-mt-32">
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

        </div>
      </div>
    </section>
  );
};

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
          <li>• Optimized local models for 0ms cloud latency.</li>
          <li>• Integrated shell support for Zsh and Bash.</li>
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
    </div>
  </section>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentView, setCurrentView] = useState<View>('landing');
  const [isStackExpanded, setIsStackExpanded] = useState(false);

  const handleNav = (view: View, sectionId?: string) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    if (sectionId && view === 'landing') {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      case 'report': return <ReportIssuesPage onBack={() => handleNav('landing')} />;
      case 'faq': return <FAQPage onBack={() => handleNav('landing')} onNavigate={handleNav} />;
      default: return (
        <>
          <section className="pt-48 pb-32 px-6 relative overflow-hidden" id="hero">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-yellow-100/50 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-red-50/50 blur-[100px] rounded-full -z-10" />
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
              <div className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-700 px-4 py-2 rounded-full border border-yellow-400/20 font-bold text-sm">
                  <Flame className="w-4 h-4 text-red-500" />
                  New: Zest v1.0 (Qwen3 Engine)
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
                <button 
                  onClick={() => handleNav('landing', 'pricing')}
                  className="w-full sm:w-auto px-12 py-5 zest-gradient-bg text-white font-black text-lg rounded-3xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-red-500/20"
                >
                  <Download className="w-6 h-6" />
                  Get Zest CLI (macOS)
                </button>
                <p className="mt-4 text-slate-400 font-bold text-sm">Coming soon for Windows</p>
              </div>
              
              <div id="playground" className="w-full scroll-mt-32">
                <Terminal />
              </div>

              {/* Performance & Model Info Section */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl text-left">
                <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 relative overflow-hidden group flex flex-col">
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
                </div>

                <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 relative overflow-hidden group flex flex-col">
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
                </div>

                <div className="md:col-span-2 p-12 rounded-[3rem] zest-gradient-bg relative overflow-hidden text-white shadow-2xl shadow-yellow-500/20">
                   <div className="relative z-10">
                      <h3 className="text-4xl font-black mb-6">Built for the modern stack.</h3>
                      <p className="text-xl font-bold mb-10 opacity-90 max-w-2xl">
                        Supports <strong>Docker, Kubernetes, Git, AWS, Bash</strong> and 100+ standard Unix tools out of the box.
                      </p>
                      <div className="flex flex-wrap gap-3">
                         {['Docker', 'Kubernetes', 'Git', 'AWS', 'Bash'].map((tool) => (
                           <span key={tool} className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-md font-black text-sm">{tool}</span>
                         ))}
                         <button 
                           onClick={() => setIsStackExpanded(!isStackExpanded)}
                           className={`px-6 py-2 rounded-full font-black text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2 ${isStackExpanded ? 'bg-white/40' : 'bg-white text-slate-900'}`}
                         >
                           {isStackExpanded ? 'Show less' : '100+ more'}
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
            <button onClick={() => handleNav('docs')} className="text-slate-500 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-wider">Docs</button>
            <button onClick={() => handleNav('landing', 'pricing')} className="zest-gradient-bg text-white px-8 py-3 rounded-full text-sm font-black transition-all shadow-lg shadow-red-500/20 hover:scale-105 active:scale-95">
              Get Zest
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
            <button onClick={() => handleNav('docs')} className="text-left">Docs</button>
            <button onClick={() => handleNav('landing', 'pricing')} className="zest-gradient-bg text-center text-white py-5 rounded-3xl shadow-xl">Get Zest</button>
          </div>
        </div>
      )}

      {renderView()}

      {/* Footer */}
      <footer className="bg-slate-50 py-16 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-md">
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
              Anti-subscription. Anti-cloud. 100% local.<br />
              The smarter way to talk to your shell.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h5 className="font-black text-slate-900 mb-6 uppercase tracking-wider text-sm">Product</h5>
              <ul className="space-y-4 font-bold text-slate-500">
                <li><button onClick={() => handleNav('changelog')} className="hover:text-red-500 transition-colors text-left">Changelog</button></li>
                <li><button onClick={() => handleNav('privacy')} className="hover:text-red-500 transition-colors text-left">Privacy</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-slate-900 mb-6 uppercase tracking-wider text-sm">Help</h5>
              <ul className="space-y-4 font-bold text-slate-500">
                <li><button onClick={() => handleNav('docs')} className="hover:text-red-500 transition-colors text-left">Docs</button></li>
                <li><button onClick={() => handleNav('faq')} className="hover:text-red-500 transition-colors text-left">FAQ</button></li>
                <li><button onClick={() => handleNav('report')} className="hover:text-red-500 transition-colors text-left">Report Issues</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-slate-900 mb-6 uppercase tracking-wider text-sm">Spicy Lemonade</h5>
              <ul className="space-y-4 font-bold text-slate-500">
                <li><button onClick={() => handleNav('about')} className="hover:text-red-500 transition-colors text-left">About</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-6 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-bold text-slate-400">© 2026 Spicy Lemonade. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;