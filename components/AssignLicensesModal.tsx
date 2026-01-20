
import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssignLicensesModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState<string>('500');
  const availableBalance = 1550;
  
  if (!isOpen) return null;

  const numAmount = Number(amount);
  const isInsufficient = numAmount > availableBalance;
  const isValid = numAmount > 0 && !isInsufficient;

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
              <p className="text-charcoal dark:text-white text-3xl font-extrabold">{availableBalance.toLocaleString()} <span className="text-sm font-normal text-text-secondary ml-1">Licenses</span></p>
            </div>
            <div className="size-12 rounded-full bg-primary flex items-center justify-center shadow-md border border-primary/20">
              <span className="material-symbols-outlined text-white text-[22px]">account_balance_wallet</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-charcoal dark:text-white">License Quantity</label>
              <span className="text-[10px] text-text-secondary font-bold tracking-tight bg-slate-100 dark:bg-background-dark px-2 py-0.5 rounded border border-slate-200 dark:border-border-dark">Max Limit: {availableBalance.toLocaleString()}</span>
            </div>
            <div className="relative">
              <input 
                className={`w-full bg-white dark:bg-background-dark border rounded-lg px-4 py-3 text-base text-charcoal dark:text-white placeholder:text-slate-400 outline-none transition-all font-bold focus:ring-1 ${
                  isInsufficient 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30' 
                    : 'border-slate-200 dark:border-border-dark focus:border-[#0D9488] focus:ring-[#0D9488]/20'
                }`}
                placeholder="Enter Amount To Assign" 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                {isInsufficient && (
                  <div className="flex items-center gap-1.5 text-red-600 bg-red-50 dark:bg-red-500/10 px-2 py-1 rounded text-[10px] font-bold">
                    <span className="material-symbols-outlined text-[14px]">error</span>
                    Insufficient Balance
                  </div>
                )}
              </div>
            </div>
            {isInsufficient && (
              <p className="text-[11px] text-red-500 italic font-medium ml-1">The amount exceeds your current unallocated inventory.</p>
            )}
          </div>
        </div>
        
        <div className="p-6 bg-slate-50 dark:bg-background-dark/30 border-t border-slate-200 dark:border-border-dark flex items-center justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2.5 rounded-lg border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark text-charcoal dark:text-white font-bold text-sm hover:bg-gray-50 dark:hover:bg-background-dark transition-colors">
            Cancel
          </button>
          <button 
            onClick={onClose} 
            disabled={!isValid}
            className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-md ${isValid ? 'bg-primary hover:bg-primary-hover text-white' : 'bg-slate-300 dark:bg-slate-700 text-slate-500 cursor-not-allowed shadow-none'}`}
          >
            Assign Licenses
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignLicensesModal;
