
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
          setTimeout(onComplete, 800);
          return 100;
        }
        // Simulate progress increment matching the design
        if (prev < 65) return prev + 1;
        return prev + 0.5;
      });
    }, 40);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-50 dark:bg-black font-display transition-colors duration-300">
      <div className="w-full max-w-md p-10 bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 rounded-[2.5rem] shadow-2xl dark:shadow-black/60 flex flex-col items-center text-center animate-in zoom-in duration-300">
        <div className="relative mb-10 flex flex-col items-center">
          <div className="scanning-circle w-52 h-52 rounded-full overflow-hidden border-4 border-slate-100 dark:border-[#2b3436] shadow-xl dark:shadow-2xl relative">
            <img 
              alt="User webcam feed" 
              className="w-full h-full object-cover grayscale-[0.2]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWQz07nymg0XVE4SbsDC0ujm9y9CJ-yB-g6p0-l8iNFGfAz9D-_BGysKu_Xid35yMpN_1EeOG6rpAsJeEDk3ivfvWzPsBUpC2BQxo1EuJXQk4WBHYtj9-xZwY1vtTytp3qXfEVMK6XEsVpI4LtrDYPB44WUSXdTVGfszY9WlzhAq5ve10A65qYep8gkUq6mjvhaCltZJHBl-PbQpfHo95vfRx26NYsr9mY9zoGn-l3SpPKYKpwr7t3257a24Xyfbxy_XxXe4NT0qc" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 dark:via-primary/30 to-transparent h-1/2 w-full top-0 animate-[bounce_3s_infinite] opacity-50"></div>
          </div>
          <div className="mt-4 px-5 py-2 rounded-full flex items-center gap-2.5 border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-transparent">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold text-slate-700 dark:text-white tracking-wide uppercase">Scanning Identity...</span>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">User Verification</h2>
        <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed max-w-[300px]">
          Verifying the current user matches the session starter to prevent unauthorized access.
        </p>

        <div className="mt-10 mb-2 flex flex-col w-full gap-4">
          <div className="h-2 w-full bg-slate-100 dark:bg-[#2b3436] rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-[11px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest">
            <span>Processing</span>
            <span className="text-primary">{Math.floor(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
