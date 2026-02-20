import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Menu, X, Citrus } from "lucide-react";
import { ScrollToTop, CheckoutRedirect } from "./components/shared";
import {
  FAQPage,
  ReportIssuesPage,
  DocsPage,
  AboutPage,
  ChangelogPage,
  PrivacyPolicyPage,
  TermsOfServicePage,
  LandingPage,
  CheckoutSuccessPage,
} from "./components/pages";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <CheckoutRedirect />

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={closeMenu}
          >
            <div className="w-10 h-10 zest-gradient-bg rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/20 group-hover:rotate-6 transition-transform">
              <Citrus className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-900">Zest CLI</span>
              <span className="text-[10px] font-black text-red-500 uppercase tracking-widest leading-none">Spicy Lemonade</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link to="/#features" className="text-slate-500 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-wider">Features</Link>
            <Link to="/#pricing" className="text-slate-500 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-wider">Pricing</Link>
            <Link to="/docs" className="text-slate-500 hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-wider">Docs</Link>
            <Link
              to="/#pricing"
              className="zest-gradient-bg text-white font-black shadow-xl shadow-red-500/20 hover:scale-[1.02] active:scale-95 transition-all px-8 py-3 text-sm rounded-full"
            >
              Get Zest
            </Link>
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
            <Link to="/#features" className="text-left" onClick={closeMenu}>Features</Link>
            <Link to="/#pricing" className="text-left" onClick={closeMenu}>Pricing</Link>
            <Link to="/docs" className="text-left" onClick={closeMenu}>Docs</Link>
            <Link
              to="/#pricing"
              onClick={closeMenu}
              className="zest-gradient-bg text-white font-black shadow-xl shadow-red-500/20 hover:scale-[1.02] active:scale-95 transition-all px-12 py-5 text-lg rounded-3xl w-full text-center"
            >
              Get Zest
            </Link>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/changelog" element={<ChangelogPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/tos" element={<TermsOfServicePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/report_issues" element={<ReportIssuesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-slate-50 py-16 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-md">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 zest-gradient-bg rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/20">
                <Citrus className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-slate-900">Zest CLI</span>
                <span className="text-xs font-black text-red-500 uppercase tracking-widest leading-none">Spicy Lemonade</span>
              </div>
            </Link>
            <p className="text-slate-500 font-medium leading-relaxed">
              Anti-subscription. Anti-cloud. 100% local.<br />
              The smarter way to talk to your shell.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h5 className="font-black text-slate-900 mb-6 uppercase tracking-wider text-sm">Product</h5>
              <ul className="space-y-4 font-bold text-slate-500">
                <li><Link to="/changelog" className="hover:text-red-500 transition-colors">Changelog</Link></li>
                <li><Link to="/privacy" className="hover:text-red-500 transition-colors">Privacy</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-slate-900 mb-6 uppercase tracking-wider text-sm">Help</h5>
              <ul className="space-y-4 font-bold text-slate-500">
                <li><Link to="/docs" className="hover:text-red-500 transition-colors">Docs</Link></li>
                <li><Link to="/faq" className="hover:text-red-500 transition-colors">FAQ</Link></li>
                <li><Link to="/report_issues" className="hover:text-red-500 transition-colors">Report Issues</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-slate-900 mb-6 uppercase tracking-wider text-sm">Spicy Lemonade</h5>
              <ul className="space-y-4 font-bold text-slate-500">
                <li><Link to="/about" className="hover:text-red-500 transition-colors">About</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-6 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-bold text-slate-400">&copy; 2026 Spicy Lemonade. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
