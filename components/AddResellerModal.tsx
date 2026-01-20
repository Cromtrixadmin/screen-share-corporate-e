
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddResellerModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in duration-300">
        <div className="px-6 py-4 border-b border-slate-200 dark:border-border-dark flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-10 rounded-lg bg-primary/20 text-primary">
              <span className="material-symbols-outlined">person_add</span>
            </div>
            <div>
              <h2 className="text-charcoal dark:text-white text-xl font-bold">Add New Reseller</h2>
              <p className="text-text-secondary dark:text-text-secondary-dark text-xs font-bold tracking-tight">Create a new partner in your network</p>
            </div>
          </div>
          <button onClick={onClose} className="text-text-secondary hover:text-charcoal dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <form className="p-6 space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1">Reseller Name</label>
              <input className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg text-charcoal dark:text-white text-sm focus:ring-1 focus:ring-primary outline-none px-4 py-2.5 font-medium" placeholder="e.g. Apex Solutions" type="text"/>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1">Contact Email</label>
              <input className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg text-charcoal dark:text-white text-sm focus:ring-1 focus:ring-primary outline-none px-4 py-2.5 font-medium" placeholder="contact@agency.com" type="email"/>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-border-dark rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">payments</span>
              <h3 className="text-charcoal dark:text-white text-sm font-bold">Pricing Strategy</h3>
            </div>
            <div className="space-y-3">
              <label className="text-sm font-bold text-text-secondary block">Fixed Price per License</label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-text-secondary font-mono font-bold">₹</span>
                <input className="w-full bg-white dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg text-charcoal dark:text-white text-base font-mono focus:ring-primary focus:border-primary placeholder:text-text-secondary/30 pl-8 pr-4 py-3 outline-none" placeholder="0.00" step="0.01" type="number"/>
                <div className="absolute right-4 text-[10px] font-bold text-text-secondary bg-slate-100 dark:bg-surface-dark px-2 py-1 rounded border border-slate-200 dark:border-border-dark uppercase tracking-tight">INR</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 pt-2">
            <button onClick={onClose} className="px-6 py-2.5 text-sm font-bold text-text-secondary hover:text-charcoal dark:hover:text-white transition-colors" type="button">Cancel</button>
            <button className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold text-sm transition-all shadow-lg flex items-center gap-2" type="submit">
              <span>Create Reseller</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddResellerModal;
