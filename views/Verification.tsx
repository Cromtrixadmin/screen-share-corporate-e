
import React, { useState, useEffect } from 'react';

interface VerificationProps {
  onComplete: () => void;
}

const Verification: React.FC<VerificationProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 40);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-10 bg-surface-dark border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center">
        <div className="relative mb-10 flex flex-col items-center">
          <div className="scanning-circle w-52 h-52 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
            <img 
              alt="Webcam" 
              className="w-full h-full object-cover grayscale-[0.2]" 
              src={`https://picsum.photos/id/64/400/400`} 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent h-1/2 w-full top-0 animate-[bounce_3s_infinite] opacity-50"></div>
          </div>
          <div className="mt-4 px-5 py-2 rounded-full flex items-center gap-2.5 border border-white/5 bg-transparent">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold text-white tracking-wide uppercase">Scanning Identity...</span>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">User Verification</h2>
        <p className="text-slate-400 text-sm leading-relaxed max-w-[300px]">
          Verifying the current user matches the session starter to prevent unauthorized access.
        </p>
        <div className="mt-10 mb-2 flex flex-col w-full gap-4">
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all duration-75" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="flex justify-between text-[11px] font-bold text-slate-500 uppercase tracking-widest">
            <span>Processing</span>
            <span className="text-primary">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
