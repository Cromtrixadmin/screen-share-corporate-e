
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssignLicensesModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl shadow-2xl overflow-hidden flex flex-col scale-in">
        <div className="p-6 border-b border-slate-200 dark:border-border-dark flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined">assignment_add</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal dark:text-white leading-tight">Assign Licenses</h3>
              <p className="text-text-secondary dark:text-text-secondary-dark text-xs mt-0.5 font-bold">Allocate Inventory To The Reseller</p>
            </div>
          </div>
          <button onClick={onClose} className="text-text-secondary hover:text-charcoal dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-border-dark rounded-lg p-5 flex items-center justify-between">
            <div>
              <p className="text-text-secondary dark:text-text-secondary-dark text-xs font-bold tracking-tight mb-1">Available Balance</p>
              <p className="text-charcoal dark:text-white text-3xl font-extrabold">1,550 <span className="text-sm font-normal text-text-secondary ml-1">Licenses</span></p>
            </div>
            <div className="size-12 rounded-full bg-primary flex items-center justify-center shadow-md border border-primary/20">
              <span className="material-symbols-outlined text-white text-[22px]">account_balance_wallet</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-charcoal dark:text-white">License Quantity</label>
              <span className="text-[10px] text-text-secondary font-bold tracking-tight bg-slate-100 dark:bg-background-dark px-2 py-0.5 rounded border border-slate-200 dark:border-border-dark">Max Limit: 1,550</span>
            </div>
            <div className="relative">
              <input 
                className="w-full bg-white dark:bg-background-dark border border-slate-200 dark:border-border-dark focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-base text-charcoal dark:text-white placeholder:text-slate-400 outline-none transition-all font-bold" 
                placeholder="Enter Amount To Assign" 
                type="number" 
                defaultValue={500}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-emerald-600 bg-emerald-50 dark:bg-green-500/10 px-2 py-1 rounded text-[10px] font-bold">
                <span className="material-symbols-outlined text-[14px]">check_circle</span>
                Valid Amount
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-slate-50 dark:bg-background-dark/30 border-t border-slate-200 dark:border-border-dark flex items-center justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2.5 rounded-lg border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark text-charcoal dark:text-white font-bold text-sm hover:bg-gray-50 dark:hover:bg-background-dark transition-colors">
            Cancel
          </button>
          <button onClick={onClose} className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold text-sm transition-all shadow-md">
            Assign Licenses
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignLicensesModal;
