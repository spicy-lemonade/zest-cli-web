import React from "react";
import { Shield } from "lucide-react";
import { PageHeader } from "../shared/PageHeader";

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onBack }) => (
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
