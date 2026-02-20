import React, { useEffect, useState } from "react";
import { CheckCircle, Citrus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GradientButton } from "../shared/GradientButton";

const REDIRECT_DELAY_SECONDS = 10;

export const CheckoutSuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_DELAY_SECONDS);

  useEffect(() => {
    if (secondsLeft <= 0) {
      navigate("/");
      return;
    }
    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft, navigate]);

  const progress = ((REDIRECT_DELAY_SECONDS - secondsLeft) / REDIRECT_DELAY_SECONDS) * 100;

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center animate-in fade-in duration-700">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 zest-gradient-bg rounded-3xl flex items-center justify-center shadow-2xl shadow-yellow-500/30">
              <Citrus className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-black text-slate-900 mb-4">
          You're all set!
        </h1>
        <p className="text-lg font-bold text-slate-500 mb-2">
          Thanks for your purchase — welcome to Zest CLI.
        </p>
        <p className="text-sm font-medium text-slate-400 mb-10">
          Check your inbox for your license details and download link.
        </p>

        <GradientButton size="lg" onClick={() => navigate("/")}>
          Back to homepage
        </GradientButton>

        <div className="mt-10 space-y-2">
          <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <div
              className="h-full zest-gradient-bg rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Redirecting in {secondsLeft}s
          </p>
        </div>
      </div>
    </section>
  );
};
