import React from "react";
import { FileText } from "lucide-react";
import { PageHeader } from "../shared/PageHeader";

interface TermsOfServicePageProps {
  onBack: () => void;
}

export const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ onBack }) => (
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
