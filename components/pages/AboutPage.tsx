import React from "react";
import { Citrus, Users, BookOpen } from "lucide-react";
import { PageHeader } from "../shared/PageHeader";

interface AboutPageProps {
  onBack: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => (
  <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto animate-in fade-in duration-500">
    <PageHeader onBack={onBack} title="Spicy Lemonade" subtitle="Independent Research Lab" icon={<Citrus className="w-12 h-12 text-white" />} />
    <div className="prose prose-slate lg:prose-xl">
      <p className="text-2xl md:text-3xl text-slate-600 font-medium leading-relaxed mb-16">
        We believe the future of intelligence belongs to you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-4">
          <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-yellow-500" />
            Who We Are
          </h3>
          <p className="text-slate-600 leading-relaxed font-medium">
            Spicy Lemonade is a boutique collective of independent engineers and researchers. We come from diverse backgrounds across academia and industry, united by a shared obsession with high-performance computing and user empowerment.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-red-500" />
            Our Pedigree
          </h3>
          <p className="text-slate-600 leading-relaxed font-medium">
            Our team brings deep expertise in machine learning research, mathematics, and large-scale data systems. We optimize models and systems to run efficiently, ensuring performance and data sovereignty go hand-in-hand.
          </p>
        </div>
      </div>
    </div>
  </section>
);
