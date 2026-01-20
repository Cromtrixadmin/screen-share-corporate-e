
import React from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 to-black overflow-hidden relative">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-[440px] flex flex-col rounded-2xl bg-[#161b22] border border-white/5 shadow-2xl overflow-hidden">
        <div className="relative h-24 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] to-transparent z-10"></div>
          <div className="w-full h-full bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://picsum.photos/id/10/440/100')` }}></div>
        </div>

        <div className="px-8 pb-10 -mt-10 relative z-20">
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 rounded-2xl bg-primary border border-white/10 shadow-2xl flex items-center justify-center mb-4 group relative overflow-hidden">
              <span className="material-symbols-outlined text-white text-[48px] drop-shadow-md">hub</span>
            </div>
            <h2 className="text-white text-3xl font-bold tracking-tight text-center">Nexus<span className="text-primary font-light">Resell</span></h2>
            <p className="text-slate-400 text-sm mt-1 text-center font-bold">Exam Assistance & Monitoring Suite</p>
          </div>

          <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="space-y-2">
              <label className="block text-slate-400 text-sm font-bold ml-1">Username or Email</label>
              <div className="relative flex items-center">
                <input className="w-full rounded-lg text-white focus:ring-1 focus:ring-primary border border-white/5 bg-[#0d1117] h-12 pl-11 pr-4 text-sm font-bold outline-none transition-all" placeholder="Enter your ID" type="text" />
                <span className="absolute left-3.5 material-symbols-outlined text-[20px] text-slate-500">badge</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-slate-400 text-sm font-bold ml-1">Password</label>
              <div className="relative flex items-center">
                <input className="w-full rounded-lg text-white focus:ring-1 focus:ring-primary border border-white/5 bg-[#0d1117] h-12 pl-11 pr-12 text-sm font-bold outline-none transition-all" placeholder="••••••••" type="password" />
                <span className="absolute left-3.5 material-symbols-outlined text-[20px] text-slate-500">lock_open</span>
              </div>
            </div>
            <button type="submit" className="mt-2 w-full h-12 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold text-[15px] tracking-wide shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2">
              <span>Secure Login</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
