
import React, { useState } from 'react';

interface ExamSessionProps {
  onEnd: () => void;
}

const ExamSession: React.FC<ExamSessionProps> = ({ onEnd }) => {
  const [activeTab, setActiveTab] = useState<'exam' | 'chat'>('exam');
  
  const messages = [
    { sender: 'Agent', time: '10:42 AM', text: "System ready. Waiting for the next question to be read from screen." },
    { sender: 'You', time: '10:43 AM', text: "Copy that. The candidate is currently navigating to the main essay section.", isSelf: true },
    { sender: 'Agent', time: '10:44 AM', text: "Understood. I've optimized the retrieval engine for historical context questions. Standing by." },
  ];

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col md:flex-row bg-[#050505]">
      <main className="flex-1 relative flex flex-col overflow-hidden group/canvas">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-300 opacity-0 group-hover/canvas:opacity-100 focus-within:opacity-100">
          <div className="flex items-center gap-1 bg-surface-dark/90 backdrop-blur-md border border-white/5 rounded-full p-1.5 shadow-xl">
            <button className="p-2 hover:bg-white/10 rounded-full text-white"><span className="material-symbols-outlined text-[20px]">monitor</span></button>
            <div className="w-px h-4 bg-white/20 mx-1"></div>
            <button className="p-2 hover:bg-white/10 rounded-full text-white"><span className="material-symbols-outlined text-[20px]">keyboard</span></button>
            <button className="p-2 hover:bg-white/10 rounded-full text-white"><span className="material-symbols-outlined text-[20px]">aspect_ratio</span></button>
            <div className="w-px h-4 bg-white/20 mx-1"></div>
            <button className="p-2 hover:bg-white/10 rounded-full text-white"><span className="material-symbols-outlined text-[20px]">fullscreen</span></button>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-4 w-full h-full">
          <div className="relative w-full h-full max-w-[1600px] max-h-[900px] bg-black rounded-lg overflow-hidden shadow-2xl border border-white/5">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/id/2/1600/900')`, opacity: 0.6 }}></div>
            <div className="absolute bottom-0 w-full h-12 bg-[#1a1a1a]/90 backdrop-blur flex items-center justify-center gap-4 border-t border-white/10">
              <div className="w-8 h-8 rounded bg-blue-500/80"></div>
              <div className="w-8 h-8 rounded bg-gray-600/50"></div>
              <div className="w-8 h-8 rounded bg-gray-600/50"></div>
            </div>
            <div className="absolute top-10 left-20 w-2/3 h-2/3 bg-[#1e1e1e] rounded-lg shadow-2xl border border-white/10 flex flex-col p-6">
               <h2 className="text-2xl font-bold text-white mb-4">Project Alpha Review</h2>
               <div className="h-4 w-3/4 bg-white/10 rounded mb-2"></div>
               <div className="h-4 w-1/2 bg-white/10 rounded mb-2"></div>
               <div className="flex-1 flex items-center justify-center text-white/20 border border-dashed border-white/10 rounded mt-4">
                 Data Visualization Feed
               </div>
            </div>
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-3 py-1.5 rounded text-xs font-bold text-white/70 border border-white/10 pointer-events-none tracking-tight">
              Remote • 1920 x 1080
            </div>
          </div>
        </div>
      </main>

      <aside className="w-full md:w-[360px] bg-[#0B0C0E] border-l border-[#22252B] flex flex-col shadow-2xl z-30 shrink-0">
        <div className="px-5 py-6 border-b border-[#22252B]">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-white text-lg font-bold tracking-tight">Session #882-192</h3>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-500 text-xs font-bold">Live</span>
            </div>
          </div>
          <p className="text-slate-400 text-xs mb-5">Connected to MacBook Pro (M2)</p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-[#22252B] rounded-lg p-3 border border-white/5 text-center">
              <span className="text-slate-500 text-xs font-bold block mb-1">Duration</span>
              <p className="text-white text-xl font-bold tabular-nums">00:14:23</p>
            </div>
            <div className="bg-[#22252B] rounded-lg p-3 border border-white/5 text-center">
              <span className="text-slate-500 text-xs font-bold block mb-1">Latency</span>
              <p className="text-emerald-400 text-xl font-bold tabular-nums">24ms</p>
            </div>
          </div>
          <button onClick={onEnd} className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-2.5 px-4 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[20px]">power_settings_new</span>
            <span>End Session</span>
          </button>
        </div>

        <div className="flex border-b border-[#22252B]">
          <button onClick={() => setActiveTab('exam')} className={`flex-1 py-3 text-sm font-bold transition-all border-b-2 ${activeTab === 'exam' ? 'text-white border-primary' : 'text-slate-500 border-transparent hover:text-white'}`}>Exam</button>
          <button onClick={() => setActiveTab('chat')} className={`flex-1 py-3 text-sm font-bold transition-all border-b-2 ${activeTab === 'chat' ? 'text-white border-primary' : 'text-slate-500 border-transparent hover:text-white'}`}>Chat</button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-5 flex flex-col gap-4">
          {activeTab === 'exam' ? (
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500">Active Question</label>
                <div className="bg-[#22252B]/50 border border-white/5 rounded-xl p-4 italic text-slate-300 text-sm font-medium">
                  "Explain how the Heisenberg Uncertainty Principle relates to the observation of quantum particles..."
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500">Retrieval Result</label>
                <div className="bg-red-950/20 border border-red-900/40 rounded-xl p-6 text-center">
                   <span className="material-symbols-outlined text-red-500 text-4xl opacity-40">search_off</span>
                   <p className="text-white font-bold text-sm mt-2">Answer Not Found</p>
                   <p className="text-slate-500 text-[10px] mt-1 font-bold">High-confidence match not found in database.</p>
                </div>
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[20px]">person_search</span>
                <span>Agent Has Answer (₹5.00)</span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex flex-col gap-1 max-w-[85%] ${m.isSelf ? 'self-end items-end' : 'self-start'}`}>
                  <span className="text-[10px] font-bold text-slate-500 tracking-tight">{m.sender} • {m.time}</span>
                  <div className={`p-3 rounded-2xl ${m.isSelf ? 'bg-primary text-white rounded-tr-none' : 'bg-[#22252B] text-slate-200 rounded-tl-none border border-white/5'}`}>
                    <p className="text-sm font-medium">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t border-[#22252B]">
          <div className="relative flex items-center bg-[#22252B] rounded-xl border border-[#22252B] p-2 focus-within:border-primary transition-colors">
            <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-white placeholder-slate-500 px-2 font-medium" placeholder="Type a message..." />
            <button className="p-2 bg-primary text-white rounded-lg"><span className="material-symbols-outlined text-[20px]">send</span></button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ExamSession;
