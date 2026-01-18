import React, { useState } from "react";
import { HelpCircle, Download, X } from "lucide-react";
import { PageHeader } from "../shared/PageHeader";
import { FAQItem } from "../shared/FAQItem";
import { GradientButton } from "../shared/GradientButton";
import type { View } from "../../hooks/useNavigation";

interface FAQPageProps {
  onBack: () => void;
  onNavigate: (view: View) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onBack, onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showDmgModal, setShowDmgModal] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleRequestLink = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setShowDmgModal(false);
      setSent(false);
      setEmail("");
    }, 3000);
  };

  const faqs = [
    {
      q: "How does the free trial work?",
      a: (
        <>
          <p className="mb-4">Our 5-day free trial lets you experience Zest with full functionality before purchasing:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Download:</strong> Click "Download Free Trial" on any product above.</li>
            <li><strong>Install:</strong> Open the DMG and drag Zest to your Applications folder.</li>
            <li><strong>Activate:</strong> Run <code>zest</code> in Terminal and choose "Start free trial".</li>
            <li><strong>Verify:</strong> Enter your email and the 6-digit code sent to you.</li>
            <li><strong>Use:</strong> You have 5 days to try all features on any device.</li>
          </ol>
          <p className="mt-4">After the trial expires, you'll be prompted to purchase. Your email is already saved, so checkout is seamless.</p>
        </>
      )
    },
    {
      q: "Can I try all three tiers?",
      a: (
        <>
          <p>Yes! Each tier (Lite, Hot, Extra Spicy) has its own independent 5-day trial. You can try different tiers on separate machines or all on the same machine to see which fits your workflow best.</p>
        </>
      )
    },
    {
      q: "The command generated isn't working as expected. What should I do?",
      a: (
        <>
          Zest is currently in its early version, and we truly appreciate your confidence in being an early adopter. While we strive for accuracy, edge cases occur. Please head over to our <button onClick={() => onNavigate("report")} className="text-red-500 underline font-bold hover:text-red-600">Report Issues</button> page to share the details. We are constantly improving the engine based on research and your valuable feedback helps us prioritize the most common failures. Thank you for helping us grow.
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
                <GradientButton type="submit" size="lg" fullWidth>
                  Request Download Link
                </GradientButton>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
