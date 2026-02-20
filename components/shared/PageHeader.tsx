import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, icon }) => (
  <div className="mb-16">
    <Link
      to="/"
      className="group flex items-center gap-2 text-slate-500 hover:text-red-500 font-bold mb-16 transition-colors"
    >
      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
      Back to Zest
    </Link>

    <div className="flex items-start gap-6">
      <div className="w-20 h-20 zest-gradient-bg rounded-[2rem] flex items-center justify-center shadow-xl shadow-yellow-500/20 shrink-0 mt-1">
        {icon}
      </div>
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none m-0 p-0">
          {title}
        </h1>
        {subtitle && (
          <p className="text-red-500 font-black uppercase tracking-[0.25em] text-[10px] md:text-xs mt-2 text-left leading-none m-0 p-0 pl-2">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  </div>
);
