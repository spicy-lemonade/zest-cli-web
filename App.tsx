import React from "react";
import { Menu, X, Citrus } from "lucide-react";
import { useNavigation } from "./hooks/useNavigation";
import { GradientButton } from "./components/shared/GradientButton";
import {
  FAQPage,
  ReportIssuesPage,
  DocsPage,
  AboutPage,
  ChangelogPage,
  PrivacyPolicyPage,
  TermsOfServicePage,
  LandingPage,
} from "./components/pages";

const App: React.FC = () => {
  const { currentView, isMenuOpen, setIsMenuOpen, handleNav } = useNavigation();

  const renderView = () => {
    switch (currentView) {
      case "about":
        return <AboutPage onBack={() => handleNav("landing")} />;
      case "changelog":
        return <ChangelogPage onBack={() => handleNav("landing")} />;
      case "privacy":
        return <PrivacyPolicyPage onBack={() => handleNav("landing")} />;
      case "tos":
        return <TermsOfServicePage onBack={() => handleNav("landing")} />;
      case "docs":
        return <DocsPage onBack={() => handleNav("landing")} />;
      case "report":
        return <ReportIssuesPage onBack={() => handleNav("landing")} />;
      case "faq":
        return <FAQPage onBack={() => handleNav("landing")} onNavigate={handleNav} />;
      default:
        return <LandingPage onNavigate={handleNav} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => handleNav("landing")}
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
            <button onClick={() => handleNav("landing", "features")} className="text-slate-500 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-wider">Features</button>
            <button onClick={() => handleNav("landing", "pricing")} className="text-slate-500 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-wider">Pricing</button>
            <button onClick={() => handleNav("docs")} className="text-slate-500 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-wider">Docs</button>
            <GradientButton size="sm" onClick={() => handleNav("landing", "pricing")}>
              Get Zest
            </GradientButton>
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
            <button onClick={() => handleNav("landing", "features")} className="text-left">Features</button>
            <button onClick={() => handleNav("landing", "pricing")} className="text-left">Pricing</button>
            <button onClick={() => handleNav("docs")} className="text-left">Docs</button>
            <GradientButton size="lg" fullWidth onClick={() => handleNav("landing", "pricing")}>
              Get Zest
            </GradientButton>
          </div>
        </div>
      )}

      {renderView()}

      {/* Footer */}
      <footer className="bg-slate-50 py-16 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => handleNav("landing")}>
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
                <li><button onClick={() => handleNav("changelog")} className="hover:text-red-500 transition-colors text-left">Changelog</button></li>
                <li><button onClick={() => handleNav("privacy")} className="hover:text-red-500 transition-colors text-left">Privacy</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-slate-900 mb-6 uppercase tracking-wider text-sm">Help</h5>
              <ul className="space-y-4 font-bold text-slate-500">
                <li><button onClick={() => handleNav("docs")} className="hover:text-red-500 transition-colors text-left">Docs</button></li>
                <li><button onClick={() => handleNav("faq")} className="hover:text-red-500 transition-colors text-left">FAQ</button></li>
                <li><button onClick={() => handleNav("report")} className="hover:text-red-500 transition-colors text-left">Report Issues</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-slate-900 mb-6 uppercase tracking-wider text-sm">Spicy Lemonade</h5>
              <ul className="space-y-4 font-bold text-slate-500">
                <li><button onClick={() => handleNav("about")} className="hover:text-red-500 transition-colors text-left">About</button></li>
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
