
import React, { useState } from 'react';
import { ExamFile } from '../types';

const Files: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState('AWS Solutions Architect');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { name: 'AWS Solutions Architect', count: 12, size: '2.4GB' },
    { name: 'Cisco CCNA 200-301', count: 8, size: '850MB' },
    { name: 'Google Cloud Digital Leader', count: 5, size: '1.1GB' },
    { name: 'Microsoft Azure Fundamentals', count: 3, size: '320MB' },
  ];

  const files: ExamFile[] = [
    { id: '1', name: 'SAA-C03_Exam_Dumps_v4.2.pdf', size: '12.5 MB', date: 'Oct 24, 2023', type: 'pdf' },
    { id: '2', name: 'Study_Guide_Notes.docx', size: '4.1 MB', date: 'Oct 20, 2023', type: 'docx' },
    { id: '3', name: 'Practice_Tests_Bundle.zip', size: '48.2 MB', date: 'Oct 15, 2023', type: 'zip' },
    { id: '4', name: 'Question_Bank_Analysis.xlsx', size: '1.8 MB', date: 'Oct 12, 2023', type: 'xlsx' },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf': return { icon: 'picture_as_pdf', color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-500/10' };
      case 'docx': return { icon: 'description', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-500/10' };
      case 'zip': return { icon: 'folder_zip', color: 'text-yellow-600', bg: 'bg-yellow-50 dark:bg-yellow-500/10' };
      case 'xlsx': return { icon: 'table_chart', color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-500/10' };
      default: return { icon: 'insert_drive_file', color: 'text-gray-500', bg: 'bg-gray-50 dark:bg-gray-500/10' };
    }
  };

  return (
    <div className="px-4 md:px-10 py-8 max-w-[1440px] mx-auto w-full h-[calc(100vh-80px)] flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full flex-1 overflow-hidden">
        <aside className="lg:col-span-3 flex flex-col bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark overflow-hidden shadow-sm h-full max-h-full">
          <div className="p-4 flex justify-between items-center border-b border-slate-100 dark:border-border-dark">
            <h3 className="text-charcoal dark:text-white font-bold text-base">Exam Categories</h3>
            <button className="size-9 flex items-center justify-center bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary transition-all hover:text-white">
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
          <div className="px-4 py-4">
            <div className="flex items-center bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg px-3 py-2 focus-within:border-primary transition-colors">
              <span className="material-symbols-outlined text-text-secondary text-sm mr-2">search</span>
              <input className="bg-transparent border-none p-0 text-sm text-charcoal dark:text-white placeholder:text-text-secondary focus:ring-0 w-full" placeholder="Search Exams..." type="text"/>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-1">
            {categories.map((cat) => (
              <div 
                key={cat.name} 
                onClick={() => setSelectedExam(cat.name)}
                className={`group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all border ${
                  selectedExam === cat.name 
                    ? 'bg-primary/10 border-primary/20 text-charcoal dark:text-white' 
                    : 'hover:bg-slate-50 dark:hover:bg-background-dark border-transparent text-text-secondary'
                }`}
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className={`material-symbols-outlined text-[24px] ${selectedExam === cat.name ? 'text-primary' : 'text-text-secondary group-hover:text-primary'}`}>folder</span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-bold text-sm truncate">{cat.name}</span>
                    <span className="text-[10px] opacity-70">{cat.count} Files • {cat.size}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <section className="lg:col-span-9 flex flex-col gap-6 h-full overflow-hidden">
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-charcoal dark:text-white tracking-tight">{selectedExam}</h1>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary border border-primary/20 tracking-wide uppercase">Active Exam</span>
              </div>
              <p className="text-text-secondary dark:text-text-secondary-dark text-sm">Manage Study Materials, Dump Files, and Resources.</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center bg-slate-50 dark:bg-background-dark rounded-lg border border-slate-200 dark:border-border-dark p-1">
                <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-surface-dark text-primary shadow-sm' : 'text-text-secondary hover:text-charcoal'}`}>
                  <span className="material-symbols-outlined text-[20px]">grid_view</span>
                </button>
                <button onClick={() => setViewMode('list')} className={`p-1.5 rounded transition-all ${viewMode === 'list' ? 'bg-white dark:bg-surface-dark text-primary shadow-sm' : 'text-text-secondary hover:text-charcoal'}`}>
                  <span className="material-symbols-outlined text-[20px]">view_list</span>
                </button>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold text-sm transition-all shadow-md active:scale-95">
                <span className="material-symbols-outlined text-[20px]">cloud_upload</span>
                <span>Upload Files</span>
              </button>
            </div>
          </div>

          <div className="flex-1 bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark shadow-sm flex flex-col overflow-hidden">
            <div className="px-6 py-4 bg-slate-50 dark:bg-background-dark/50 border-b border-slate-200 dark:border-border-dark flex justify-between items-center sticky top-0 z-10">
              <h4 className="text-charcoal dark:text-white font-bold text-sm">Files & Resources</h4>
              <div className="flex gap-4 text-xs text-text-secondary dark:text-text-secondary-dark font-bold uppercase tracking-wider">
                <span>Total Storage: <span className="text-charcoal dark:text-white">66.6 MB</span></span>
                <span>Files: <span className="text-charcoal dark:text-white">{files.length}</span></span>
              </div>
            </div>
            
            <div className="overflow-y-auto custom-scrollbar flex-1 p-6">
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {files.map(file => {
                    const style = getIcon(file.type);
                    return (
                      <div key={file.id} className="bg-white dark:bg-background-dark/30 rounded-lg border border-slate-200 dark:border-border-dark p-4 flex flex-col gap-4 group hover:border-primary transition-colors shadow-sm">
                        <div className="flex items-start justify-between">
                          <div className={`size-10 rounded-lg ${style.bg} border border-black/5 flex items-center justify-center ${style.color} shadow-sm shrink-0`}>
                            <span className="material-symbols-outlined">{style.icon}</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-charcoal dark:text-white text-sm font-bold group-hover:text-primary transition-colors cursor-pointer truncate" title={file.name}>{file.name}</h4>
                          <p className="text-xs text-text-secondary dark:text-text-secondary-dark mt-1">{file.size} • {file.date}</p>
                        </div>
                        <div className="flex gap-2 mt-auto">
                          <button className="flex-1 h-9 rounded bg-primary hover:bg-primary-hover text-white text-xs font-bold flex items-center justify-center gap-2 transition-all">
                            <span className="material-symbols-outlined text-[16px]">download</span> Download
                          </button>
                          <button className="size-9 rounded bg-slate-50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark hover:bg-red-50 hover:border-red-200 hover:text-red-500 text-text-secondary transition-all flex items-center justify-center">
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-2">
                  {files.map(file => {
                    const style = getIcon(file.type);
                    return (
                      <div key={file.id} className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 dark:border-border-dark/50 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                        <div className={`size-10 rounded-lg ${style.bg} flex items-center justify-center ${style.color} shrink-0`}>
                          <span className="material-symbols-outlined">{style.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-charcoal dark:text-white truncate">{file.name}</h4>
                          <p className="text-xs text-text-secondary">{file.size} • {file.date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="size-9 flex items-center justify-center text-text-secondary hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">download</span>
                          </button>
                          <button className="size-9 flex items-center justify-center text-text-secondary hover:text-red-500 transition-colors">
                            <span className="material-symbols-outlined">delete</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Files;
