
import React from 'react';

interface ErrorStateProps {
  onRetry: () => void;
  onNewLicense: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ onRetry, onNewLicense }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="w-full max-w-md bg-surface-dark border border-white/5 rounded-3xl shadow-2xl overflow-hidden flex flex-col relative">
        <div className="bg-red-600 h-32 flex items-center justify-center">
          <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
            <span className="material-symbols-outlined text-white text-5xl leading-none">person_off</span>
          </div>
        </div>
        <div className="p-10 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">Identity Mismatch Detected</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-[320px] mb-8 font-medium">
            The current user does not match the authorized session starter. Access has been suspended for security.
          </p>
          <div className="flex flex-col w-full gap-3">
            <button onClick={onRetry} className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[20px]">refresh</span>
              Retry Verification
            </button>
            <button onClick={onNewLicense} className="w-full py-3.5 bg-background-dark hover:bg-slate-900 text-white border border-white/5 font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[20px]">vpn_key</span>
              Use New License
            </button>
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 w-full">
            <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-slate-500 tracking-tight">
              <span className="material-symbols-outlined text-sm leading-none">security</span>
              Session Security Active
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorState;
