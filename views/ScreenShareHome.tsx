import React, { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';

interface ScreenShareHomeProps {
  onSelectDashboard: () => void;
  onSelectRemote: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ScreenShareHome: React.FC<ScreenShareHomeProps> = ({ 
  onSelectDashboard, 
  onSelectRemote,
  darkMode,
  toggleDarkMode 
}) => {
  const [showPasscode, setShowPasscode] = useState(false);

  return (
    <div className="h-full w-full flex flex-col overflow-hidden text-left">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#2b3436] px-6 py-4 bg-white dark:bg-surface-home-dark/95 z-10 shrink-0 transition-colors">
        <div className="flex items-center gap-4 text-slate-900 dark:text-white">
          <div className="size-8 flex items-center justify-center bg-primary-home rounded-lg shadow-[0_0_15px_rgba(26,81,91,0.5)]">
            <span className="material-symbols-outlined text-white text-[20px]">hub</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">
              Nexus<span className="font-normal text-[#1a515b]">Resell</span>
            </h2>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-500 dark:text-[#a2b1b4] text-xs font-medium">Ready To Connect</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          
          <button 
            onClick={onSelectDashboard}
            className="bg-primary-home hover:bg-[#15424a] text-white font-bold px-6 h-9 rounded-lg shadow-lg shadow-primary-home/20 transition-all active:scale-[0.98] flex items-center gap-2 text-sm"
          >
            <span className="material-symbols-outlined text-[18px]">login</span>
            <span>Login</span>
          </button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 md:p-8 relative overflow-hidden bg-background-light dark:bg-background-home-dark transition-colors duration-300">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20 dark:opacity-20">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary-home rounded-full blur-[120px]"></div>
          <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] bg-slate-300 dark:bg-[#2b3436] rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-5xl bg-white dark:bg-surface-card rounded-2xl border border-slate-200 dark:border-[#2b3436] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
          {/* Left Panel: This Desk */}
          <div className="flex-1 p-8 md:p-10 flex flex-col border-b md:border-b-0 md:border-r border-slate-200 dark:border-[#2b3436] bg-slate-50/50 dark:bg-surface-home-dark/50 relative group">
            <div className="mb-10">
              <h3 className="text-slate-900 dark:text-white text-2xl font-bold mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-500">desktop_windows</span>
                This Desk
              </h3>
              <p className="text-slate-500 dark:text-[#a2b1b4] text-sm min-h-[40px] flex items-center">Give Your ID And Password To Your Partner To Allow Access.</p>
            </div>
            
            <div className="mb-6 flex-1 flex flex-col justify-start">
              <div className="w-full max-w-sm mx-auto">
                <label className="block text-slate-500 dark:text-[#a2b1b4] text-xs font-bold tracking-wider mb-2.5 ml-0.5">Your Address</label>
                <div className="relative group/input mb-6">
                  <div className="flex items-center bg-slate-100 dark:bg-[#10171e] border border-slate-200 dark:border-[#2b3436] rounded-xl h-11 px-4 transition-all duration-300 group-hover/input:border-primary-home/30">
                    <input className="bg-transparent border-none w-full text-slate-900 dark:text-white text-base font-bold tracking-[0.15em] font-mono focus:ring-0 cursor-default outline-none" readOnly type="text" value="455 901 228"/>
                    <button className="text-slate-400 dark:text-[#a2b1b4] hover:text-primary-home dark:hover:text-white p-2 transition-colors" title="Copy ID">
                      <span className="material-symbols-outlined text-[18px]">content_copy</span>
                    </button>
                  </div>
                </div>
                <label className="block text-slate-500 dark:text-[#a2b1b4] text-xs font-bold tracking-wider mb-2.5 ml-0.5">Security Code</label>
                <div className="relative group/input mb-8">
                  <div className="flex items-center bg-slate-100 dark:bg-[#10171e] border border-slate-200 dark:border-[#2b3436] rounded-xl h-11 px-4 transition-all duration-300 group-hover/input:border-primary-home/30">
                    <input className="bg-transparent border-none w-full text-slate-900 dark:text-white text-base font-bold tracking-[0.1em] font-mono focus:ring-0 cursor-default outline-none" readOnly type="text" value="x92mP5"/>
                    <div className="flex gap-1.5">
                      <button className="text-slate-400 dark:text-[#a2b1b4] hover:text-primary-home dark:hover:text-white p-2 transition-colors" title="Generate New Code">
                        <span className="material-symbols-outlined text-[18px]">refresh</span>
                      </button>
                      <button className="text-slate-400 dark:text-[#a2b1b4] hover:text-primary-home dark:hover:text-white p-2 transition-colors" title="Copy Code">
                        <span className="material-symbols-outlined text-[18px]">content_copy</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-auto pt-6 border-t border-slate-200 dark:border-[#2b3436] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-400 dark:text-[#a2b1b4] text-[16px]">lock</span>
                <span className="text-slate-500 dark:text-[#a2b1b4] text-[11px] font-bold tracking-wide">End-To-End Encrypted</span>
              </div>
              <button className="text-primary-home hover:text-primary-home/80 text-xs font-bold flex items-center gap-1">
                Unattended Access
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </button>
            </div>
          </div>

          {/* Remote Panel: Remote Desk */}
          <div className="flex-1 p-8 md:p-10 flex flex-col bg-slate-50 dark:bg-[#141a20]">
            <div className="mb-10">
              <h3 className="text-slate-900 dark:text-white text-2xl font-bold mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sky-600 dark:text-sky-500">laptop_chromebook</span>
                Remote Desk
              </h3>
              <p className="text-slate-500 dark:text-[#a2b1b4] text-sm min-h-[40px] flex items-center">Control A Remote Computer By Entering Their ID.</p>
            </div>
            
            <div className="mb-6 flex-1 flex flex-col justify-start">
              <div className="w-full max-w-sm mx-auto">
                <label className="block text-slate-500 dark:text-[#a2b1b4] text-xs font-bold tracking-wider mb-2.5 ml-0.5">Partner ID</label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-400 dark:text-[#a2b1b4] text-[18px]">search</span>
                  </div>
                  <input className="w-full bg-slate-100 dark:bg-[#10171e] border border-slate-200 dark:border-[#2b3436] text-slate-900 dark:text-white text-base font-bold placeholder:text-slate-500 dark:placeholder:text-[#2b3436] rounded-xl h-11 pl-11 pr-4 focus:border-[#1a515b] focus:ring-1 focus:ring-[#1a515b]/20 transition-all shadow-inner font-mono tracking-[0.1em] outline-none" placeholder="Enter Partner ID" type="text" />
                </div>
                <label className="block text-slate-500 dark:text-[#a2b1b4] text-xs font-bold tracking-wider mb-2.5 ml-0.5">Passcode</label>
                <div className="relative mb-8">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-400 dark:text-[#a2b1b4] text-[18px]">lock</span>
                  </div>
                  <input 
                    className="w-full bg-slate-100 dark:bg-[#10171e] border border-slate-200 dark:border-[#2b3436] text-slate-900 dark:text-white text-base font-bold placeholder:text-slate-500 dark:placeholder:text-[#2b3436] rounded-xl h-11 pl-11 pr-11 focus:border-[#1a515b] focus:ring-1 focus:ring-[#1a515b]/20 transition-all shadow-inner font-mono tracking-[0.1em] outline-none" 
                    placeholder="Enter Passcode" 
                    type={showPasscode ? "text" : "password"}
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPasscode(!showPasscode)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 dark:text-[#a2b1b4] hover:text-primary-home dark:hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {showPasscode ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
                <button 
                  onClick={onSelectRemote}
                  className="w-full bg-primary-home hover:bg-[#15424a] text-white font-bold h-11 rounded-xl shadow-lg shadow-primary-home/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-sm group"
                >
                  <span>Connect</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
            
            <div className="mt-auto pt-6 border-t border-slate-200 dark:border-[#2b3436] flex items-center justify-between opacity-60">
              <span className="text-slate-500 dark:text-[#a2b1b4] text-[10px] font-bold tracking-widest">Version 4.2.0 Stable</span>
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-[#2b3436]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-[#2b3436]"></div>
              </div>
            </div>
          </div>
        </div>

        <button className="absolute bottom-8 right-8 bg-slate-200 dark:bg-[#2b3436] hover:bg-primary-home hover:text-white text-slate-600 dark:text-[#a2b1b4] w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all z-20">
          <span className="material-symbols-outlined text-[20px]">help</span>
        </button>
      </main>
    </div>
  );
};

export default ScreenShareHome;