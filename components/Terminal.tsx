
import React, { useState, useEffect } from 'react';

const DEMO_COMMANDS = [
  { input: "zest show me all files over 100MB", output: "find . -type f -size +100M" },
  { input: "zest stop and remove all Docker containers", output: "docker stop $(docker ps -q)" },
  { input: "zest restart the Kubernetes my-app deployment", output: "kubectl rollout restart deployment/my-app" },
  { input: "zest find which process is using port 3000", output: "lsof -i :3000" }
];

type Step = 'typing' | 'thinking' | 'result' | 'waiting';

export const Terminal: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [step, setStep] = useState<Step>('typing');
  const typingSpeed = 60;
  const thinkingDuration = 1200;
  const pauseBeforeNext = 3000;

  useEffect(() => {
    const current = DEMO_COMMANDS[index];
    let timer: number;

    if (step === 'typing') {
      if (displayText.length < current.input.length) {
        timer = window.setTimeout(() => {
          setDisplayText(current.input.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timer = window.setTimeout(() => setStep('thinking'), 500);
      }
    } else if (step === 'thinking') {
      timer = window.setTimeout(() => setStep('result'), thinkingDuration);
    } else if (step === 'result') {
      timer = window.setTimeout(() => setStep('waiting'), pauseBeforeNext);
    } else if (step === 'waiting') {
      setDisplayText("");
      setStep('typing');
      setIndex((prev) => (prev + 1) % DEMO_COMMANDS.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, step, index]);

  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-yellow-500/10">
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-2 text-xs text-slate-400 font-bold mono">Zest Terminal — Mac (zsh)</span>
      </div>
      <div className="p-10 h-[360px] flex flex-col justify-start text-left">
        <div className="flex items-start gap-3 mb-4 text-left">
          <span className="text-yellow-500 font-black mono select-none text-lg">~</span>
          <p className="text-slate-700 mono text-lg leading-relaxed font-medium text-left">
            {displayText}
          </p>
        </div>
        
        {step === 'thinking' && (
          <div className="flex items-center gap-2 text-left">
            <span className="text-xl">🌶</span>
            <span className="text-red-500 font-bold mono text-lg">Thinking...</span>
          </div>
        )}

        {step === 'result' && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300 space-y-3 text-left">
             <div className="flex flex-col gap-1 items-start text-left">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🍋</span>
                  <span className="text-slate-800 font-bold mono text-lg">Suggested Command:</span>
                </div>
                <div className="ml-8 text-slate-900 mono text-lg font-bold text-left break-all">
                  {DEMO_COMMANDS[index].output}
                </div>
             </div>
             <div className="flex items-center gap-2 pt-2 text-left">
                <span className="text-lg">🍋</span>
                <span className="text-slate-800 font-bold mono text-lg">Execute? [y/n]: <span className="text-slate-900">y</span></span>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};
