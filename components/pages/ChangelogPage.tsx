import React from "react";
import { History } from "lucide-react";
import { PageHeader } from "../shared/PageHeader";
import { usePageMeta } from "../shared/usePageMeta";

export const ChangelogPage: React.FC = () => {
  usePageMeta({
    title: "Changelog",
    description: "See what's new in Zest CLI — release notes, updates, and version history.",
  });

  return (
  <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto animate-in fade-in duration-500">
    <PageHeader title="Changelog" icon={<History className="w-10 h-10 text-white" />} />
    <div className="space-y-12">
      <div className="border-l-4 border-yellow-400 pl-8 py-2">
        <h2 className="text-2xl font-black text-slate-900">v1.0.0 — The Spicy Release</h2>
        <p className="text-slate-400 font-bold mb-4">February 18, 2026</p>
        <ul className="space-y-4 text-slate-600 font-medium">
          <li>• Initial public launch of Zest CLI for macOS.</li>
          <li>• Optimized local models for 0ms cloud latency.</li>
          <li>• Integrated shell support for Zsh and Bash.</li>
        </ul>
      </div>
    </div>
  </section>
  );
};
