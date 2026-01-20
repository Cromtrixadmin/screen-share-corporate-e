import React, { useState } from 'react';

interface ExamSessionProps {
  onEnd: () => void;
}

const ExamSession: React.FC<ExamSessionProps> = ({ onEnd }) => {
  const [activeTab, setActiveTab] = useState<'exam' | 'chat'>('exam');
  const [message, setMessage] = useState('');
  
  const messages = [
    { sender: 'Agent', time: '10:42 AM', text: "System ready. Waiting for the next question to be read from screen." },
    { sender: 'You', time: '10:43 AM', text: "Copy that. The candidate is currently navigating to the main essay section.", isSelf: true },
    { sender: 'Agent', time: '10:44 AM', text: "Understood. I've optimized the retrieval engine for historical context questions. Standing by." },
  ];

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col bg-slate-100 dark:bg-black font-display transition-colors duration-300 text-left">
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Main Remote Feed - The "Desk" area */}
        <main className="flex-1 relative flex flex-col overflow-hidden bg-slate-200 dark:bg-[#050505]">
          <div className="flex-1 flex items-center justify-center relative w-full h-full">
             {/* Remote Monitor Container */}
            <div className="relative w-full h-full bg-black flex flex-col overflow-hidden">
              {/* Background Image Placeholder */}
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/id/2/1600/900')`, opacity: 0.4 }}></div>
              
              {/* Floating "Project Alpha Review" UI Window */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-2xl bg-[#1A1C1E]/95 backdrop-blur-xl rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.5)] border border-white/5 p-8 md:p-12 animate-in zoom-in-95 duration-500">
                 <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">Project Alpha Review</h2>
                 <div className="space-y-3 mb-8">
                    <div className="h-3 w-3/4 bg-white/10 rounded-full"></div>
                    <div className="h-3 w-1/2 bg-white/10 rounded-full"></div>
                 </div>
                 <div className="flex-1 flex items-center justify-center text-white/10 border border-dashed border-white/10 rounded-xl py-20 bg-black/10">
                   <div className="flex flex-col items-center gap-2">
                     <span className="material-symbols-outlined text-4xl">analytics</span>
                     <span className="text-sm font-medium tracking-wide">Data Visualization Feed</span>
                   </div>
                 </div>
              </div>

              {/* Resolution Badge - Top Right */}
              <div className="absolute top-6 right-8 bg-black/70 backdrop-blur px-3 py-1.5 rounded-lg text-[10px] font-bold text-white/80 border border-white/10 tracking-widest uppercase">
                Remote • 1920 x 1080
              </div>

              {/* Workspace Indicator Bottom Bar */}
              <div className="absolute bottom-0 w-full h-14 bg-black/40 backdrop-blur-md flex items-center justify-center gap-3 border-t border-white/5 shrink-0">
                <div className="size-8 rounded bg-blue-500 shadow-lg shadow-blue-500/20"></div>
                <div className="size-8 rounded bg-slate-700/50"></div>
                <div className="size-8 rounded bg-slate-700/50"></div>
              </div>
            </div>
          </div>
        </main>

        {/* Proctoring Sidebar */}
        <aside className="w-full md:w-[320px] bg-white dark:bg-[#0B0C0E] border-l border-slate-200 dark:border-[#22252B] flex flex-col shadow-2xl z-30 shrink-0 transition-colors">
          
          {/* Sidebar Header & Stats */}
          <div className="px-5 py-6 border-b border-slate-100 dark:border-[#22252B]">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">Session #882-192</h3>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-600 dark:text-emerald-500 text-[9px] font-extrabold tracking-widest uppercase">Live</span>
              </div>
            </div>
            <p className="text-slate-400 dark:text-slate-500 text-[11px] font-medium mb-6 tracking-tight">MacBook Pro (M2)</p>
            
            <div className="grid grid-cols-2 gap-2 mb-6">
              <div className="bg-slate-50 dark:bg-[#1A1C1E] rounded-xl p-3 border border-slate-200 dark:border-white/5 text-center shadow-sm">
                <span className="text-slate-400 dark:text-slate-500 text-[9px] font-bold uppercase tracking-widest block mb-1">Duration</span>
                <p className="text-slate-900 dark:text-white text-xl font-bold tabular-nums">00:14:23</p>
              </div>
              <div className="bg-slate-50 dark:bg-[#1A1C1E] rounded-xl p-3 border border-slate-200 dark:border-white/5 text-center shadow-sm">
                <span className="text-slate-400 dark:text-slate-500 text-[9px] font-bold uppercase tracking-widest block mb-1">Latency</span>
                <p className="text-emerald-600 dark:text-emerald-400 text-xl font-bold tabular-nums">24ms</p>
              </div>
            </div>

            {/* End Session Button */}
            <button 
              onClick={onEnd} 
              className="w-full h-11 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2.5 group"
            >
              <span className="material-symbols-outlined text-[20px] group-hover:rotate-12 transition-transform">power_settings_new</span>
              <span className="text-sm tracking-tight">End Session</span>
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex px-1 border-b border-slate-100 dark:border-[#22252B] bg-slate-50/30 dark:bg-black/20">
            <button 
              onClick={() => setActiveTab('exam')} 
              className={`flex-1 py-3 text-[12px] font-bold transition-all border-b-2 ${activeTab === 'exam' ? 'text-slate-900 dark:text-white border-primary' : 'text-slate-400 dark:text-slate-500 border-transparent hover:text-slate-600 dark:hover:text-slate-300'}`}
            >
              Exam
            </button>
            <button 
              onClick={() => setActiveTab('chat')} 
              className={`flex-1 py-3 text-[12px] font-bold transition-all border-b-2 ${activeTab === 'chat' ? 'text-slate-900 dark:text-white border-primary' : 'text-slate-400 dark:text-slate-500 border-transparent hover:text-slate-600 dark:hover:text-slate-300'}`}
            >
              Chat
            </button>
          </div>

          {/* Content Area - Changed to flex-col with h-full layout */}
          <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col min-h-0">
            {activeTab === 'exam' ? (
              <div className="flex-1 flex flex-col p-5 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex-1 space-y-5">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.1em]">Active Question</label>
                    <div className="bg-slate-50 dark:bg-[#1A1C1E] border border-slate-200 dark:border-white/5 rounded-xl p-4 italic text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed shadow-sm">
                      "Explain how the Heisenberg Uncertainty Principle relates to the observation of quantum particles..."
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.1em]">Retrieval Result</label>
                    <div className="bg-red-50 dark:bg-[#1A0C0E] border border-red-100 dark:border-red-900/30 rounded-xl p-7 flex flex-col items-center text-center shadow-inner">
                       <div className="size-10 rounded-full bg-red-100 dark:bg-red-500/10 flex items-center justify-center mb-3">
                          <span className="material-symbols-outlined text-red-600 dark:text-red-500 text-2xl">search_off</span>
                       </div>
                       <p className="text-slate-900 dark:text-white font-bold text-sm mb-1">Answer Not Found</p>
                       <p className="text-slate-500 dark:text-slate-400 text-[11px] font-semibold leading-relaxed px-2">
                          High-confidence match not found in database.
                       </p>
                    </div>
                  </div>
                </div>

                {/* Compact Action Buttons Section - Aligned to Bottom */}
                <div className="space-y-2.5 pt-6 mt-auto animate-in slide-in-from-bottom-2 duration-300">
                  <button className="w-full h-[44px] bg-[#008f5d] hover:bg-[#007a4f] text-white font-bold rounded-xl transition-all shadow-md shadow-emerald-500/10 flex items-center justify-center gap-2 group">
                    <span className="material-symbols-outlined text-[20px]">person_search</span>
                    <span className="text-sm tracking-tight">Agent Has Answer ($5.00)</span>
                  </button>

                  <button className="w-full h-[44px] bg-white dark:bg-[#151719] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-[#1a1c1e] transition-all text-sm shadow-sm">
                    Skip
                  </button>

                  <p className="text-[10px] text-slate-500 dark:text-slate-400 italic text-center font-medium opacity-80 px-2 pt-1 leading-normal">
                    Verified agents provide accurate answers within 60 seconds.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 p-5 animate-in fade-in slide-in-from-left-4 duration-300">
                {messages.map((m, i) => (
                  <div key={i} className={`flex flex-col gap-1 max-w-[90%] ${m.isSelf ? 'self-end items-end' : 'self-start'}`}>
                    <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 tracking-tight">{m.sender} • {m.time}</span>
                    <div className={`p-3 px-4 rounded-2xl ${m.isSelf ? 'bg-primary text-white rounded-tr-none shadow-md shadow-primary/10' : 'bg-slate-100 dark:bg-[#1A1C1E] text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200 dark:border-white/5'}`}>
                      <p className="text-xs font-medium leading-normal">{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Chat Input - Only Visible in Chat Tab */}
          {activeTab === 'chat' && (
            <div className="p-4 bg-white dark:bg-[#0B0C0E] border-t border-slate-100 dark:border-[#22252B] animate-in slide-in-from-bottom-2 duration-200">
              <div className="relative flex items-center bg-slate-100 dark:bg-[#151719] rounded-xl border border-slate-200 dark:border-[#22252B] p-1.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
                <input 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 bg-transparent border-none focus:ring-0 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 px-2 font-medium" 
                  placeholder="Type a message..." 
                />
                <button className="size-9 flex items-center justify-center bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default ExamSession;