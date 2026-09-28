import React from "react";
import { Info, Lightbulb, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeader } from "../shared/PageHeader";
import { Card } from "../shared/Card";
import { usePageMeta } from "../shared/usePageMeta";

export const DocsPage: React.FC = () => {
  usePageMeta({
    title: "Documentation",
    description: "Learn how to use Zest CLI — basic usage, model selection, performance tuning, licensing, and prompting tips.",
  });
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { label: "Basic Usage", id: "basic-usage" },
    { label: "Device Management", id: "device-management" },
    { label: "The Model", id: "performance" },
    { label: "Licensing", id: "licensing" },
    { label: "Benchmark", id: "benchmark" },
    { label: "Prompting Tips", id: "prompting-tips" },
  ];

  return (
    <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto animate-in fade-in duration-500">
      <PageHeader title="Getting Started" subtitle="User Guide & Best Practices" icon={<Info className="w-10 h-10 text-white" />} />

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
            <h2 className="text-slate-900 font-black flex items-center gap-3 mt-0">
              <Lightbulb className="w-6 h-6 text-yellow-600" />
              The SLM Mindset
            </h2>
            <p className="mb-0">
              Zest is powered by <strong>Small Language Models (SLM)</strong>. Unlike massive cloud LLMs, they are designed for efficiency and specific utility. Our CLI assistant is built on <strong>Qwen3.5</strong>, one of the most capable open small language models, which was fine-tuned using highly curated real world examples.
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

          <section id="device-management" className="scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-b-2 border-slate-100 pb-4">1.1 Device Management</h2>
            <p className="mb-6">
              Check your current status at any time:
            </p>
            <code className="block bg-slate-900 text-yellow-400 p-4 rounded-xl mt-2 font-mono text-sm mb-8">zest --status</code>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-4">Logout (Frees device slot)</h3>
                <p className="mb-4 text-sm">Use <code>--logout</code> to deregister the device and free a device slot while keeping the model on disk for later re-activation.</p>
                <code className="block bg-slate-900 text-yellow-400 p-4 rounded-xl font-mono text-sm">
                  zest --logout                  # Log out this device<br />
                  zest --logout --remote         # Log out any device remotely (requires OTP)
                </code>
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900 mb-4">Uninstall (Removes everything)</h3>
                <p className="mb-4 text-sm">Use <code>--uninstall</code> to deregister the device and remove the model file and license. This frees both disk space and a device slot.</p>
                <code className="block bg-slate-900 text-yellow-400 p-4 rounded-xl font-mono text-sm">
                  zest --uninstall
                </code>
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900 mb-4">Reinstalling & Updates</h3>
                <p className="mb-4">If you try to install a model that's already on your device, you'll be prompted to either continue (re-activate license) or cancel.</p>
                <p>Zest checks for updates automatically and notifies you in your terminal when a new version is available.</p>
              </div>
            </div>
          </section>

          <section id="performance" className="scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-b-2 border-slate-100 pb-4">2. The Model</h2>

            <Card padding="lg">
              <h3 className="text-xl font-black text-slate-900 mb-2">Zest CLI</h3>
              <p className="font-bold text-slate-900 mb-2">Strengths:</p>
              <ul className="list-disc pl-6 space-y-1 mb-6 text-base">
                <li>Strong accuracy on Docker, Cloud tools, Git, and common shell commands</li>
                <li>Fine-tuned with supervised fine-tuning (SFT) and Direct Preference Optimization (DPO)</li>
                <li>Trained specifically for single-line, executable CLI command generation</li>
                <li>Runs entirely offline, CPU-optimized with optional GPU acceleration</li>
              </ul>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest bg-white py-2 px-4 rounded-xl border border-slate-200 inline-block">
                Model Details: ~6.6GB | Q5_K_M quantization | Qwen3.5-9B
              </p>
            </Card>
          </section>

          <section id="licensing" className="scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-b-2 border-slate-100 pb-4">3. Licensing (2 Device Limit)</h2>
            <p>Each Zest license allows for <strong>2 active personal devices</strong>. If you reach this limit, use <code>zest --logout</code> (to keep files) or <code>zest --uninstall</code> (to free disk space) on one machine to free a slot for a new one. <strong>Note: Dragging the application to the Trash from your Applications folder is functionally identical to running <code>zest --uninstall</code>; it will automatically deregister your slot.</strong> This registration is the only piece of functional data we capture to protect your privacy while managing seat counts.</p>
          </section>

          <section id="benchmark" className="scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-b-2 border-slate-100 pb-4">4. Benchmark</h2>
            <p>
              We're running Zest CLI's new model through our internal and external benchmarks, including the <a href="https://intercode-benchmark.github.io/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">intercode nl2bash benchmark</a>, where it scored ~68% functionally correct with a single attempt per task, using Opus 5.5 as the LLM judge.
            </p>
            <div className="mt-12 bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs italic w-full leading-relaxed">
              We built this tool to handle most everyday tasks, but it won't get everything right all the time. If something doesn't work as expected, let us know using the <Link to="/report_issues" className="text-red-500 hover:underline font-bold">contact form</Link>. We really don't collect or store your prompts or outputs, so we can't see issues unless you tell us about them. We're always working to improve, and your feedback really helps.
            </div>
          </section>

          <section id="prompting-tips" className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 scroll-mt-32">
            <h2 className="text-slate-900 font-black flex items-center gap-3 mt-0">
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
              Prompting Tips
            </h2>
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
