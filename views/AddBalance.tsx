
import React, { useState } from 'react';

interface AddBalanceProps {
  onBack: () => void;
  onComplete: () => void;
}

const AddBalance: React.FC<AddBalanceProps> = ({ onBack, onComplete }) => {
  const [amount, setAmount] = useState('2000');
  const [isProcessing, setIsProcessing] = useState(false);
  const walletBalance = 1250.00;
  
  const isInsufficient = parseFloat(amount) > walletBalance;

  const handleAddBalance = () => {
    if (isInsufficient) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onComplete();
    }, 1500);
  };

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark font-display flex flex-col transition-colors duration-300">
      
      {/* Background Dashboard Mock (Matches Reference exactly in terms of opacity and styling) */}
      <div className="flex-1 flex flex-col opacity-50 pointer-events-none select-none">
        {/* Mock Header */}
        <header className="flex items-center justify-between border-b border-solid border-border-dark bg-background-dark px-6 py-4 lg:px-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-white">
              <div className="flex items-center justify-center size-10 rounded-lg bg-gradient-to-br from-primary to-[#0f2e33] text-white">
                <span className="material-symbols-outlined">hub</span>
              </div>
              <h2 className="text-white text-xl font-bold leading-tight tracking-tight">Nexus<span className="text-primary font-light">Resell</span></h2>
            </div>
            <nav className="hidden md:flex items-center gap-6 ml-4">
              <span className="text-text-secondary text-sm font-medium">Home</span>
              <span className="text-white text-sm font-semibold border-b-2 border-primary pb-0.5">Dashboard</span>
              <span className="text-text-secondary text-sm font-medium">Transactions</span>
              <span className="text-text-secondary text-sm font-medium">Files</span>
            </nav>
          </div>
        </header>

        {/* Mock Main Content */}
        <main className="flex-1 px-4 md:px-10 py-8 max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">License Management</h1>
              <p className="text-text-secondary text-base max-w-2xl">Overview of your reseller network, license distribution, and remaining balance.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {[
              { label: 'Total License', value: '5,000', sub: '+5% trending_up', color: 'text-[#0bda54]' },
              { label: 'Distribution', value: '3,450', sub: '/ 5,000' },
              { label: 'Used', value: '2,100', sub: 'Active Activations', pulse: true },
              { label: 'Available', value: '1,550', sub: 'Unallocated Licenses' },
              { label: 'Wallet Balance', value: '₹1,250.00', sub: 'Low balance warning', warn: true },
            ].map((stat, i) => (
              <div key={i} className="bg-surface-dark rounded-xl p-6 border border-border-dark flex flex-col justify-between h-full gap-4">
                <div>
                  <p className="text-text-secondary text-sm font-semibold uppercase tracking-wider mb-2">{stat.label}</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-white text-3xl font-bold">{stat.value}</span>
                  </div>
                </div>
                <p className={`text-sm ${stat.warn ? 'text-yellow-500' : 'text-text-secondary'}`}>{stat.sub}</p>
              </div>
            ))}
          </div>

          <section className="bg-surface-dark rounded-xl border border-border-dark flex flex-col shadow-xl shadow-black/20">
            <div className="p-5 border-b border-border-dark flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-white text-lg font-bold">Reseller Network</h3>
                <p className="text-text-secondary text-sm">Manage hierarchy and license allocation</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Main Add Balance Modal Overlay (Matches Reference exactly) */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
        <div className="w-full max-w-lg bg-surface-dark border border-border-dark rounded-xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in duration-300">
          {/* Modal Header */}
          <div className="p-6 border-b border-border-dark flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined">account_balance_wallet</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">Add Balance</h3>
                <p className="text-text-secondary text-xs mt-0.5">Top up the wallet balance for your resellers</p>
              </div>
            </div>
            <button 
              onClick={onBack}
              className="text-text-secondary hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-6">
            {/* Wallet Balance Display */}
            <div className="bg-background-dark/50 border border-border-dark rounded-lg p-4 flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-xs font-semibold">Your Wallet Balance</p>
                <p className="text-white text-2xl font-bold">₹{walletBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
              </div>
              <div className="size-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-white text-[20px]">account_balance_wallet</span>
              </div>
            </div>

            {/* Reseller Selection */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-white">Select Reseller</label>
              <div className="relative">
                <div className="flex items-center bg-background-dark border border-border-dark focus-within:border-primary rounded-lg px-3 transition-all">
                  <span className="material-symbols-outlined text-text-secondary text-[20px]">search</span>
                  <input 
                    className="w-full bg-transparent border-none focus:ring-0 text-sm text-white py-3 placeholder:text-text-secondary" 
                    placeholder="Search by name or ID..." 
                    type="text" 
                    defaultValue="Datacorp Tech"
                  />
                  <span className="material-symbols-outlined text-text-secondary text-[20px]">expand_more</span>
                </div>
              </div>
            </div>

            {/* Recharge Amount Input */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-white">Recharge Amount</label>
                <span className="text-[10px] text-text-secondary font-bold tracking-tight bg-background-dark px-2 py-0.5 rounded border border-border-dark">Max: ₹{walletBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary text-sm font-semibold">₹</div>
                <input 
                  className={`w-full bg-background-dark border ${isInsufficient ? 'border-red-500/50 focus:border-red-500' : 'border-border-dark focus:border-primary'} focus:ring-0 rounded-lg pl-8 pr-4 py-3 text-sm text-white placeholder:text-text-secondary transition-all outline-none`} 
                  placeholder="Enter amount" 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                {isInsufficient && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-red-500 bg-red-500/10 px-2 py-1 rounded text-[10px] font-bold">
                    <span className="material-symbols-outlined text-[14px]">error</span>
                    Insufficient Balance
                  </div>
                )}
              </div>
              {isInsufficient && (
                <p className="text-[11px] text-red-400/80 italic">The recharge amount exceeds your current wallet balance.</p>
              )}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-6 bg-background-dark/30 border-t border-border-dark flex items-center justify-end gap-3">
            <button 
              onClick={onBack}
              className="px-5 py-2.5 rounded-lg border border-border-dark text-white font-semibold text-sm hover:bg-surface-dark transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleAddBalance}
              disabled={isInsufficient || isProcessing || !amount}
              className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold text-sm transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isProcessing && <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
              <span>Add Balance</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBalance;
