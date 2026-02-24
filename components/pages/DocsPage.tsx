import React from "react";
import { Info, Lightbulb, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeader } from "../shared/PageHeader";
import { Card } from "../shared/Card";

export const DocsPage: React.FC = () => {
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
    { label: "Using Both Models", id: "both-models" },
    { label: "Performance & Accuracy", id: "performance" },
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
            <h3 className="text-slate-900 font-black flex items-center gap-3 mt-0">
              <Lightbulb className="w-6 h-6 text-yellow-600" />
              The SLM Mindset
            </h3>
            <p className="mb-0">
              Zest is powered by <strong>Small Language Models (SLM)</strong>. Unlike massive cloud LLMs, they are designed for efficiency and specific utility. Our CLI Assistants are built on the industry leading <strong>Qwen models</strong>, some of the most capable small language models, which we fine-tuned specifically using highly curated real world examples.
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
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-b-2 border-slate-100 pb-4">1.1 Using Multiple Models</h2>
            <p className="mb-6">If you've purchased multiple tiers (Lite, Hot, or Extra Spicy):</p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 font-black text-xs">1</div>
                <p className="m-0">Install the apps to <code>/Applications</code></p>
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
                    zest --model --lite           # Use Lite model<br />
                    zest --model --hot            # Use Hot model<br />
                    zest --model --extra-spicy    # Use Extra Spicy model
                  </code>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-blue-50 p-6 rounded-3xl border border-blue-100 text-sm">
              <p className="m-0"><strong>Note:</strong> If multiple models are installed, Zest defaults to Extra Spicy (highest quality), then Hot, then Lite. You can override this with <code>--model</code> flags.</p>
            </div>

            <div className="mt-12 space-y-12">
              <div>
                <h4 className="text-xl font-black text-slate-900 mb-4">Licensing</h4>
                <p>Your license allows installation on up to <strong>2 devices per tier</strong>. Each tier (Lite, Hot, Extra Spicy) has independent device slots:</p>
                <ul className="list-disc pl-6 space-y-1 font-bold text-slate-700">
                  <li>2 device slots for Lite</li>
                  <li>2 device slots for Hot</li>
                  <li>2 device slots for Extra Spicy</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-black text-slate-900 mb-4">Logout (Frees device slot)</h4>
                <p className="mb-4 text-sm">Use <code>--logout</code> to deregister the device and free a device slot while keeping the model on disk for later re-activation.</p>
                <code className="block bg-slate-900 text-yellow-400 p-4 rounded-xl font-mono text-sm">
                  zest --logout                  # Log out from ALL tiers<br />
                  zest --logout --lite           # Log out from Lite only<br />
                  zest --logout --hot            # Log out from Hot only<br />
                  zest --logout --extra-spicy    # Log out from Extra Spicy only
                </code>
              </div>

              <div>
                <h4 className="text-xl font-black text-slate-900 mb-4">Uninstall (Removes everything)</h4>
                <p className="mb-4 text-sm">Use <code>--uninstall</code> to deregister the device and remove the model file and license. This frees both disk space and a device slot.</p>
                <code className="block bg-slate-900 text-yellow-400 p-4 rounded-xl font-mono text-sm">
                  zest --uninstall                  # Full uninstall of ALL tiers<br />
                  zest --uninstall --lite           # Uninstall Lite only<br />
                  zest --uninstall --hot            # Uninstall Hot only<br />
                  zest --uninstall --extra-spicy    # Uninstall Extra Spicy only
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
              <Card padding="lg">
                <h4 className="text-xl font-black text-slate-900 mb-2">Zest Extra Spicy (14B Intelligence)</h4>
                <p className="text-red-500 font-black mb-4">96% accuracy on production CLI workflows.</p>
                <p className="font-bold text-slate-900 mb-2 underline decoration-red-200">Strengths:</p>
                <ul className="list-disc pl-6 space-y-1 mb-6 text-base">
                  <li>100% accurate on Docker, Cloud tools, and common commands</li>
                  <li>100% accurate on intermediate tasks (systemctl, package management)</li>
                  <li>87.5% accurate on advanced Kubernetes & system administration workflows</li>
                  <li>75% accurate on advanced text processing</li>
                  <li>14 billion parameters — 2x the reasoning depth of the 7B model</li>
                </ul>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest bg-white py-2 px-4 rounded-xl border border-slate-200 inline-block">
                  Model Details: 9.8GB | Q5_K_M quantization | Qwen2.5 Coder 14B | 2x parameters vs Hot
                </p>
              </Card>

              <Card padding="lg">
                <h4 className="text-xl font-black text-slate-900 mb-2">Zest Hot (Full Precision)</h4>
                <p className="text-yellow-700 font-black mb-4">94% accuracy on production CLI workflows.</p>
                <p className="font-bold text-slate-900 mb-2 underline decoration-yellow-200">Strengths:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4 text-base">
                  <li>100% accurate on Docker, Cloud tools, and common commands</li>
                  <li>100% accurate on intermediate tasks (systemctl, package management)</li>
                  <li>Enhanced accuracy on complex shell operations</li>
                  <li>Full FP16 precision — no quantization loss</li>
                  <li>Best experience on Apple Silicon hardware</li>
                </ul>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest bg-white py-2 px-4 rounded-xl border border-slate-200 inline-block">
                  Model Details: 15GB | Full precision FP16 | Qwen2.5 Coder 7B | Apple Silicon recommended
                </p>
              </Card>

              <Card padding="lg">
                <h4 className="text-xl font-black text-slate-900 mb-2">Zest Lite (CPU-Optimized)</h4>
                <p className="text-slate-600 font-black mb-4">92% accuracy on production CLI workflows.</p>
                <p className="font-bold text-slate-900 mb-2 underline decoration-slate-200">Strengths:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4 text-base">
                  <li>100% accurate on Docker, Cloud tools, and common commands</li>
                  <li>100% accurate on intermediate tasks (systemctl, package management)</li>
                  <li>87.5% accurate on Kubernetes & system administration</li>
                  <li>Optimized Q5_K_M quantization for fast CPU results</li>
                </ul>
                <p className="font-bold text-slate-900 mb-2 underline decoration-slate-200">Trade-offs:</p>
                <ul className="list-disc pl-6 space-y-1 mb-6 text-base">
                  <li>Q5 quantization for efficient CPU performance</li>
                  <li>Compact 5.1GB download — fits any machine</li>
                  <li>Runs on any Mac (Intel or Apple Silicon)</li>
                </ul>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest bg-white py-2 px-4 rounded-xl border border-slate-200 inline-block">
                  Model Details: 5.1GB | Q5_K_M quantization | Qwen2.5 Coder 7B | Universal compatibility
                </p>
              </Card>
            </div>

            <div className="mt-12">
              <h3 className="text-slate-900 font-black mb-4">Choosing Your Tier</h3>
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
                      <td className="py-2">Maximum accuracy & precision</td>
                      <td className="py-2 font-black text-red-500">Extra Spicy</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-2">Regex, log analysis, advanced text processing</td>
                      <td className="py-2 font-black text-red-500">Extra Spicy</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-2">Complex shell operations, balanced performance</td>
                      <td className="py-2 font-black text-yellow-700">Hot</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-2">Simple Docker/Git/AWS/Kubernetes commands</td>
                      <td className="py-2 font-bold">Any tier</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-2">Smallest download, everyday use</td>
                      <td className="py-2 font-black text-slate-600">Lite</td>
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
              We evaluated Zest on the <a href="https://intercode-benchmark.github.io/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">intercode nl2bash benchmark</a>. Using an LLM judge (Opus 4.5), our local model resolved <strong>34% of tasks with zero-shot prompting</strong>. This performance puts Zest in line with <strong>ChatGPT 4 (34%)</strong> and significantly ahead of larger models like <strong>Llama-2-70B-Chat (31.5%)</strong> and <strong>Vicuna-13B (24.5%)</strong> on the InterCode leaderboard.
            </p>
            <p>
              Our 96% accuracy rate is based on internal testing against 50 hand-selected, unseen Unix tasks.
              <br /><br />
              Zest CLI produced syntactically correct commands that achieved the intended outcome in a zero-shot environment. The remaining 4% typically involved hallucinated flags or selecting a sub-optimal command for the specific shell environment.
            </p>
            <div className="mt-12 bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs italic w-full leading-relaxed">
              We built this tool to handle most everyday tasks, but it won't get everything right all the time. If something doesn't work as expected, let us know using the <Link to="/report_issues" className="text-red-500 hover:underline font-bold">contact form</Link>. We really don't collect or store your prompts or outputs, so we can't see issues unless you tell us about them. We're always working to improve, and your feedback really helps.
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
