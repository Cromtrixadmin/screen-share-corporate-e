import React, { useState } from 'react';
import { ExamFile } from '../types';

const Files: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState('AWS Solutions Architect');
  const [isAddExamModalOpen, setIsAddExamModalOpen] = useState(false);
  const [isEditExamModalOpen, setIsEditExamModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [examToEdit, setExamToEdit] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  const categories = [
    { name: 'AWS Solutions Architect', files: 12, size: '2.4GB', active: true },
    { name: 'Cisco CCNA 200-301', files: 8, size: '850MB', active: false },
    { name: 'Google Cloud Digital Leader', files: 5, size: '1.1GB', active: false },
    { name: 'Microsoft Azure Fundamentals', files: 3, size: '320MB', active: false },
  ];

  const files: ExamFile[] = [
    { id: '1', name: 'SAA-C03_Exam_Dumps_v4.2.pdf', size: '12.5 MB', date: 'Oct 24, 2023', type: 'pdf' },
    { id: '2', name: 'Study_Guide_Notes.docx', size: '4.1 MB', date: 'Oct 20, 2023', type: 'docx' },
    { id: '3', name: 'Practice_Tests_Bundle.zip', size: '48.2 MB', date: 'Oct 15, 2023', type: 'zip' },
    { id: '4', name: 'Question_Bank_Analysis.xlsx', size: '1.8 MB', date: 'Oct 12, 2023', type: 'xlsx' },
  ];

  const getFileStyle = (type: string) => {
    switch (type) {
      case 'pdf': return { icon: 'picture_as_pdf', color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20', label: 'PDF Document' };
      case 'docx': return { icon: 'description', color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20', label: 'Word Document' };
      case 'zip': return { icon: 'folder_zip', color: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', label: 'Compressed Archive' };
      case 'xlsx': return { icon: 'table_chart', color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20', label: 'Spreadsheet' };
      default: return { icon: 'insert_drive_file', color: 'text-gray-500', bg: 'bg-gray-500/10', border: 'border-gray-500/20', label: 'File' };
    }
  };

  const handleEditClick = (e: React.MouseEvent, examName: string) => {
    e.stopPropagation();
    setExamToEdit(examName);
    setIsEditExamModalOpen(true);
  };

  return (
    <div className="px-4 md:px-10 py-8 max-w-[1440px] mx-auto w-full h-[calc(100vh-80px)] transition-colors duration-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
        {/* Sidebar */}
        <aside className="lg:col-span-3 flex flex-col bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark overflow-hidden shadow-xl shadow-black/5 dark:shadow-black/20 h-full max-h-[calc(100vh-140px)]">
          <div className="p-4 flex justify-between items-center text-left">
            <h3 className="text-slate-900 dark:text-white font-bold text-base">Exam Categories</h3>
            <button 
              onClick={() => setIsAddExamModalOpen(true)}
              className="size-9 flex items-center justify-center bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 dark:border-primary/30 rounded-lg hover:bg-primary transition-all hover:text-white shadow-none"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
          <div className="px-4 pb-4">
            <div className="flex items-center bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-border-dark rounded-lg px-3 py-2 focus-within:border-primary transition-colors">
              <span className="material-symbols-outlined text-slate-400 dark:text-text-secondary text-sm mr-2">search</span>
              <input 
                className="bg-transparent border-none p-0 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:ring-0 w-full outline-none" 
                placeholder="Search exams..." 
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-1 border-t border-slate-100 dark:border-border-dark/50">
            {categories.map((cat) => (
              <div 
                key={cat.name} 
                onClick={() => setSelectedExam(cat.name)}
                className={`group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all border ${
                  selectedExam === cat.name 
                    ? 'bg-primary/10 border-primary/20 text-primary dark:text-white' 
                    : 'hover:bg-slate-50 dark:hover:bg-background-dark/50 text-slate-500 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white border-transparent'
                }`}
              >
                <div className="flex items-center gap-3 overflow-hidden text-left">
                  <span className={`material-symbols-outlined text-[24px] ${selectedExam === cat.name ? 'text-primary' : 'text-slate-400 dark:text-text-secondary group-hover:text-primary'}`}>
                    folder
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-bold text-sm truncate">{cat.name}</span>
                    <span className={`text-[10px] ${selectedExam === cat.name ? 'text-primary/70 dark:text-text-secondary' : 'text-slate-400 dark:text-text-secondary group-hover:text-slate-500 dark:group-hover:text-text-secondary/80'}`}>{cat.files} Files • {cat.size}</span>
                  </div>
                </div>
                <div className={`flex items-center gap-1 shrink-0 transition-opacity ${selectedExam === cat.name ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  <button 
                    onClick={(e) => handleEditClick(e, cat.name)}
                    className="size-7 flex items-center justify-center text-slate-400 dark:text-text-secondary hover:text-primary dark:hover:text-white rounded transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">edit</span>
                  </button>
                  <button className="size-7 flex items-center justify-center text-slate-400 dark:text-text-secondary hover:text-red-500 rounded transition-colors">
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <section className="lg:col-span-9 flex flex-col gap-6 h-full overflow-hidden">
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark shadow-xl shadow-black/5 dark:shadow-black/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col gap-1 text-left">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{selectedExam}</h1>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 dark:border-primary/30 tracking-wide uppercase">Active Exam</span>
              </div>
              <p className="text-slate-500 dark:text-text-secondary text-sm">Manage study materials, dump files, and resources for this exam.</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center bg-slate-100 dark:bg-surface-darker rounded-lg border border-slate-200 dark:border-border-dark p-1 h-11">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center justify-center w-9 h-full rounded transition-all shadow-none border-none ${viewMode === 'grid' ? 'bg-white dark:bg-surface-dark text-primary dark:text-white' : 'text-slate-400 dark:text-text-secondary hover:text-primary dark:hover:text-white hover:bg-white dark:hover:bg-surface-dark'}`}
                  title="Grid View"
                >
                  <span className="material-symbols-outlined text-[20px]">grid_view</span>
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`flex items-center justify-center w-9 h-full rounded transition-all shadow-none border-none ${viewMode === 'list' ? 'bg-white dark:bg-surface-dark text-primary dark:text-white' : 'text-slate-400 dark:text-text-secondary hover:text-primary dark:hover:text-white hover:bg-white dark:hover:bg-surface-dark'}`}
                  title="List View"
                >
                  <span className="material-symbols-outlined text-[20px]">view_list</span>
                </button>
              </div>
              <button 
                onClick={() => setIsUploadModalOpen(true)}
                className="flex items-center gap-2 px-5 h-11 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]">cloud_upload</span>
                <span>Upload Files</span>
              </button>
            </div>
          </div>

          <div className="flex-1 bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark shadow-xl shadow-black/5 dark:shadow-black/20 flex flex-col overflow-hidden max-h-[calc(100vh-280px)]">
            <div className="px-6 py-4 bg-slate-50 dark:bg-surface-darker border-b border-slate-200 dark:border-border-dark flex justify-between items-center sticky top-0 z-10 text-left">
              <h4 className="text-slate-900 dark:text-white font-bold text-sm">Files & Resources</h4>
              <div className="flex gap-4 text-xs text-slate-500 dark:text-text-secondary font-bold">
                <span>Total Storage: <span className="text-slate-900 dark:text-white font-medium">66.6 MB</span></span>
                <span>Files: <span className="text-slate-900 dark:text-white font-medium">4</span></span>
              </div>
            </div>
            
            <div className="overflow-y-auto custom-scrollbar flex-1 p-6 text-left">
              {viewMode === 'list' ? (
                <div className="flex flex-col">
                  {/* List Header */}
                  <div className="grid grid-cols-12 px-6 py-3 border-b border-slate-100 dark:border-border-dark text-xs font-semibold text-slate-400 dark:text-text-secondary tracking-wider sticky top-0 bg-white dark:bg-surface-dark z-[5]">
                    <div className="col-span-5 md:col-span-6">File Name</div>
                    <div className="col-span-3 md:col-span-2">Size</div>
                    <div className="col-span-3 hidden md:block">Upload Date</div>
                    <div className="col-span-4 md:col-span-1 text-right">Actions</div>
                  </div>
                  {/* List Content */}
                  {files.map(file => {
                    const style = getFileStyle(file.type);
                    return (
                      <div key={file.id} className="grid grid-cols-12 px-6 py-4 border-b border-slate-50 dark:border-border-dark/50 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] items-center transition-colors group">
                        <div className="col-span-5 md:col-span-6 flex items-center gap-4">
                          <div className={`size-10 rounded-lg ${style.bg} border ${style.border} flex items-center justify-center ${style.color} shadow-sm shrink-0`}>
                            <span className="material-symbols-outlined">{style.icon}</span>
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-slate-900 dark:text-white text-sm font-medium group-hover:text-primary transition-colors cursor-pointer truncate" title={file.name}>{file.name}</h4>
                            <p className="text-xs text-slate-400 dark:text-text-secondary mt-0.5">{style.label}</p>
                          </div>
                        </div>
                        <div className="col-span-3 md:col-span-2 text-slate-500 dark:text-text-secondary text-sm font-mono">{file.size}</div>
                        <div className="col-span-3 hidden md:block text-slate-400 dark:text-text-secondary text-sm">{file.date}</div>
                        <div className="col-span-4 md:col-span-1 flex justify-end">
                          <button className="size-9 flex items-center justify-center rounded-lg text-slate-400 dark:text-text-secondary hover:text-red-400 hover:bg-red-400/10 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">delete</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {files.map(file => {
                    const style = getFileStyle(file.type);
                    return (
                      <div key={file.id} className="bg-slate-50 dark:bg-surface-darker rounded-lg border border-slate-200 dark:border-border-dark p-4 flex flex-col gap-4 group hover:border-primary/50 transition-colors h-full">
                        <div className="flex items-start justify-between">
                          <div className={`size-10 rounded-lg ${style.bg} border ${style.border} flex items-center justify-center ${style.color} shadow-sm shrink-0`}>
                            <span className="material-symbols-outlined">{style.icon}</span>
                          </div>
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-slate-900 dark:text-white text-sm font-bold group-hover:text-primary transition-colors cursor-pointer truncate" title={file.name}>{file.name}</h4>
                          <p className="text-xs text-slate-400 dark:text-text-secondary mt-1">{file.size} • {file.date}</p>
                        </div>
                        <div className="flex gap-2 mt-auto">
                          <button className="flex-1 h-9 rounded bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark hover:bg-slate-50 dark:hover:bg-background-dark hover:border-primary/50 text-slate-700 dark:text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-none">
                            <span className="material-symbols-outlined text-[16px]">download</span>
                            Download
                          </button>
                          <button className="size-9 rounded bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-500 dark:hover:text-red-400 text-slate-400 dark:text-text-secondary flex items-center justify-center transition-all shadow-none">
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            
            {viewMode === 'list' && (
              <div className="px-6 py-3 border-t border-slate-100 dark:border-border-dark flex justify-between items-center bg-slate-50 dark:bg-surface-darker text-left">
                <span className="text-xs text-slate-500 dark:text-text-secondary font-medium">Total Storage: <span className="text-slate-900 dark:text-white">66.6 MB</span></span>
                <span className="text-xs text-slate-400 dark:text-text-secondary">Showing {files.length} of {files.length} files</span>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Upload Progress Modal - Theme Responsive */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col animate-in zoom-in duration-300">
            <div className="p-6 border-b border-slate-200 dark:border-border-dark flex justify-between items-start text-left">
              <div className="flex-1">
                <h3 className="text-slate-900 dark:text-white text-lg font-bold">Uploading 3 files...</h3>
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-slate-500 dark:text-text-secondary mb-1.5 font-medium">
                    <span>Overall Progress</span>
                    <span>65%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-background-dark rounded-full h-2 overflow-hidden">
                    <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsUploadModalOpen(false)}
                className="text-slate-400 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white transition-colors ml-4"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto max-h-[400px] custom-scrollbar p-2 text-left">
              {/* File Item 1 */}
              <div className="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-white/[0.02] rounded-lg group">
                <div className="size-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-sm shrink-0">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-slate-900 dark:text-white text-sm font-medium truncate pr-2">Advanced_Networking_Guide_v2.docx</h4>
                    <span className="text-xs text-slate-500 dark:text-text-secondary whitespace-nowrap">45%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-background-dark rounded-full h-1.5 overflow-hidden">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <p className="text-[10px] text-slate-400 dark:text-text-secondary mt-1">2.4 MB / 5.1 MB • 15s remaining</p>
                </div>
                <button className="size-8 flex items-center justify-center rounded-lg text-slate-400 dark:text-text-secondary hover:text-red-400 hover:bg-red-400/10 transition-colors" title="Cancel upload">
                  <span className="material-symbols-outlined text-[18px]">cancel</span>
                </button>
              </div>
              {/* File Item 2 */}
              <div className="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-white/[0.02] rounded-lg group">
                <div className="size-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 shadow-sm shrink-0">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-slate-900 dark:text-white text-sm font-medium truncate pr-2">Exam_Prep_Images_Assets.zip</h4>
                    <span className="text-xs text-green-600 dark:text-green-500 font-bold whitespace-nowrap">Done</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-background-dark rounded-full h-1.5 overflow-hidden">
                    <div className="bg-green-600 dark:bg-green-500 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <p className="text-[10px] text-slate-400 dark:text-text-secondary mt-1">12.8 MB • Completed</p>
                </div>
                <div className="size-8"></div>
              </div>
              {/* File Item 3 */}
              <div className="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-white/[0.02] rounded-lg group opacity-70">
                <div className="size-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shadow-sm shrink-0">
                  <span className="material-symbols-outlined">picture_as_pdf</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-slate-900 dark:text-white text-sm font-medium truncate pr-2">Security_Protocol_Cheatsheet.pdf</h4>
                    <span className="text-xs text-slate-500 dark:text-text-secondary whitespace-nowrap">Pending</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-background-dark rounded-full h-1.5 overflow-hidden">
                    <div className="bg-slate-300 dark:bg-white/10 h-1.5 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <p className="text-[10px] text-slate-400 dark:text-text-secondary mt-1">1.2 MB • Waiting...</p>
                </div>
                <button className="size-8 flex items-center justify-center rounded-lg text-slate-400 dark:text-text-secondary hover:text-red-400 hover:bg-red-400/10 transition-colors" title="Cancel upload">
                  <span className="material-symbols-outlined text-[18px]">cancel</span>
                </button>
              </div>
            </div>
            <div className="p-4 border-t border-slate-200 dark:border-border-dark bg-slate-50 dark:bg-[#151b1e] flex justify-end gap-3">
              <button 
                onClick={() => setIsUploadModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-slate-500 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Minimize
              </button>
              <button className="px-4 py-2 bg-red-500/10 text-red-600 dark:text-red-500 hover:bg-red-500/20 rounded-lg text-sm font-bold border border-red-500/20 transition-colors">Cancel All</button>
            </div>
          </div>
        </div>
      )}

      {/* Add New Exam Modal */}
      {isAddExamModalOpen && (
        <div aria-modal="true" className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog">
          <div 
            className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsAddExamModalOpen(false)}
          ></div>
          <div className="relative w-full max-w-[500px] bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl shadow-2xl transform transition-all overflow-hidden flex flex-col animate-in zoom-in duration-200">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-border-dark bg-slate-50 dark:bg-surface-darker text-left">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Add New Exam</h3>
              <button 
                onClick={() => setIsAddExamModalOpen(false)}
                className="text-slate-400 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg p-1 hover:bg-slate-200 dark:hover:bg-white/5"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="p-6 space-y-5 text-left">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-500 dark:text-text-secondary tracking-wider uppercase" htmlFor="exam-name">Exam Name</label>
                <input 
                  className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg px-4 py-2.5 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-400 dark:placeholder:text-text-secondary/50 transition-colors outline-none" 
                  id="exam-name" 
                  placeholder="e.g. AWS Solutions Architect Professional" 
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-500 dark:text-text-secondary tracking-wider uppercase" htmlFor="description">Description</label>
                <textarea 
                  className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg px-4 py-2.5 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-400 dark:placeholder:text-text-secondary/50 resize-none custom-scrollbar transition-colors outline-none" 
                  id="description" 
                  placeholder="Enter a brief description of the exam..." 
                  rows={4}
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 px-6 py-4 bg-slate-50 dark:bg-surface-darker border-t border-slate-100 dark:border-border-dark">
              <button 
                onClick={() => setIsAddExamModalOpen(false)}
                className="px-5 py-2 text-sm font-semibold text-slate-500 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 shadow-none"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsAddExamModalOpen(false)}
                className="px-5 py-2 text-sm font-bold text-white bg-primary hover:bg-primary-hover transition-colors rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/40"
              >
                Create Exam
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Exam Modal - EXACT MATCH TO REFERENCE */}
      {isEditExamModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl shadow-2xl flex flex-col transform transition-all overflow-hidden animate-in zoom-in duration-200">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-border-dark bg-slate-50 dark:bg-surface-darker rounded-t-xl text-left">
              <h3 className="text-slate-900 dark:text-white text-lg font-bold">Edit Exam</h3>
              <button 
                onClick={() => setIsEditExamModalOpen(false)}
                className="text-slate-400 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white transition-colors shadow-none"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-6 space-y-5 text-left">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 dark:text-text-secondary tracking-wider uppercase">Exam Name</label>
                <input 
                  className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark text-slate-900 dark:text-white text-sm rounded-lg focus:ring-1 focus:ring-primary focus:border-primary block p-2.5 placeholder:text-slate-400 dark:placeholder:text-text-secondary outline-none transition-all shadow-none" 
                  type="text" 
                  defaultValue={examToEdit || ''}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 dark:text-text-secondary tracking-wider uppercase">Description</label>
                <textarea 
                  className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark text-slate-900 dark:text-white text-sm rounded-lg focus:ring-1 focus:ring-primary focus:border-primary block p-2.5 placeholder:text-slate-400 dark:placeholder:text-text-secondary outline-none resize-none transition-all shadow-none" 
                  placeholder="Enter exam description..." 
                  rows={4}
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-100 dark:border-border-dark bg-slate-50 dark:bg-surface-darker rounded-b-xl text-right">
              <button 
                onClick={() => setIsEditExamModalOpen(false)}
                className="px-4 py-2 text-sm font-semibold text-slate-500 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 shadow-none"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsEditExamModalOpen(false)}
                className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-primary-hover transition-colors rounded-lg shadow-lg shadow-primary/20"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Files;