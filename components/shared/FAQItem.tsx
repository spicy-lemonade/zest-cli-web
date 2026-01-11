import React from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  q: string;
  a: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export const FAQItem: React.FC<FAQItemProps> = ({ q, a, isOpen, onToggle }) => (
  <div className="bg-slate-50 rounded-[2.5rem] border border-slate-100 overflow-hidden transition-all duration-300">
    <button
      onClick={onToggle}
      className="w-full p-10 flex items-center justify-between text-left hover:bg-slate-100/50 transition-colors"
    >
      <h3 className="text-xl font-black text-slate-900 flex items-start gap-4">
        <span className="text-red-500 shrink-0">Q.</span>
        {q}
      </h3>
      <div className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </div>
    </button>
    <div
      className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
    >
      <div className="px-10 pb-10">
        <div className="text-slate-600 font-medium leading-relaxed pl-10 border-l-2 border-slate-200">
          {a}
        </div>
      </div>
    </div>
  </div>
);
