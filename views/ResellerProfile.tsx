
import React, { useState } from 'react';

interface ResellerProfileProps {
  onBack: () => void;
  onAddBalance: () => void;
}

const ResellerProfile: React.FC<ResellerProfileProps> = ({ onBack, onAddBalance }) => {
  const [hasChanges, setHasChanges] = useState(false);
  const [autoTopUp, setAutoTopUp] = useState(true);
  const [allowSubResellers, setAllowSubResellers] = useState(true);
  const [price, setPrice] = useState('1000.00');

  const handleToggleChange = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter(prev => !prev);
    setHasChanges(true);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
    setHasChanges(true);
  };

  return (
    <div className="relative min-h-full flex flex-col bg-background-light dark:bg-background-dark font-display">
      <main className="flex-1 px-4 md:px-10 py-8 max-w-[1200px] mx-auto w-full pb-32">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6 flex items-center gap-2">
          <button 
            onClick={onBack}
            className="text-text-secondary hover:text-text-main dark:hover:text-white transition-colors flex items-center gap-1 text-sm font-medium"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Dashboard
          </button>
        </div>

        {/* Profile Header Summary */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 bg-white dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
          <div className="flex items-center gap-5">
            <div className="size-16 rounded-xl bg-gradient-to-tr from-blue-900 to-slate-800 flex items-center justify-center text-2xl font-bold text-white border border-white/10 shadow-lg">
              DT
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h1 className="text-text-main dark:text-white text-2xl font-extrabold tracking-tight">Datacorp Tech</h1>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary dark:text-text-secondary-dark">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                  contact@datacorp.tech
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">badge</span>
                  ID: #RES-8821
                </div>
                <div className="flex items-center gap-1.5 text-[#458545]">
                  <span className="size-2 rounded-full bg-[#458545]"></span>
                  Active Status
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-[18px]">block</span>
              Suspend
            </button>
            <button 
              onClick={onAddBalance}
              className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
              Add Balance
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Performance Overview */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-text-main dark:text-white font-bold text-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">analytics</span>
                  Performance Overview
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Total Distributed', value: '1,250', icon: 'share' },
                  { label: 'Licenses Used', value: '892', sub: '71.3%', color: 'text-primary' },
                  { label: 'Remaining Balance', value: '358', icon: 'account_balance_wallet', color: 'text-primary' },
                ].map((p, i) => (
                  <div key={i} className="bg-white dark:bg-surface-dark p-5 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
                    <p className="text-text-secondary dark:text-text-secondary-dark text-xs font-semibold tracking-wider mb-3">{p.label}</p>
                    <div className="flex items-baseline justify-between">
                      <span className="text-text-main dark:text-white text-2xl font-bold">{p.value}</span>
                      {p.icon ? (
                        <span className={`material-symbols-outlined ${p.color || 'text-text-secondary/30'} ${p.icon === 'share' ? '' : 'text-[20px]'}`}>{p.icon}</span>
                      ) : (
                        <span className={`${p.color} text-xs font-medium`}>{p.sub}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Transaction History Table */}
            <section className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden shadow-sm">
              <div className="p-5 border-b border-border-light dark:border-border-dark flex items-center justify-between">
                <div>
                  <h3 className="text-text-main dark:text-white font-bold">Transaction History</h3>
                  <p className="text-text-secondary dark:text-text-secondary-dark text-xs">Recent license assignments and top-ups</p>
                </div>
                <button className="text-primary text-sm font-bold hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-background-dark/50 text-[10px] uppercase tracking-wider text-text-secondary dark:text-text-secondary-dark">
                      <th className="px-6 py-3 font-semibold">Transaction ID</th>
                      <th className="px-6 py-3 font-semibold">Type</th>
                      <th className="px-6 py-3 font-semibold">Amount</th>
                      <th className="px-6 py-3 font-semibold">Date</th>
                      <th className="px-6 py-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-border-light dark:divide-border-dark/50">
                    {[
                      { id: '#TRX-99210', type: 'Allocation', amount: '+200 Lic', date: 'Oct 24, 2023', status: 'Completed' },
                      { id: '#TRX-98542', type: 'Allocation', amount: '+500 Lic', date: 'Sep 12, 2023', status: 'Completed' },
                      { id: '#TRX-97120', type: 'Reversal', amount: '-50 Lic', date: 'Aug 05, 2023', status: 'Refunded', isReversal: true },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
                        <td className="px-6 py-4 text-text-main dark:text-white font-mono">{row.id}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-text-main dark:text-white">
                            <span className={`material-symbols-outlined ${row.isReversal ? 'text-yellow-500' : 'text-primary'} text-[18px]`}>
                              {row.isReversal ? 'refresh' : 'add_task'}
                            </span>
                            {row.type}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-text-main dark:text-white font-bold">{row.amount}</td>
                        <td className="px-6 py-4 text-text-secondary dark:text-text-secondary-dark">{row.date}</td>
                        <td className="px-6 py-4">
                          <span className={`${row.status === 'Completed' ? 'text-[#458545] bg-[#458545]/10' : 'text-text-secondary bg-gray-100 dark:bg-surface-dark'} text-xs font-medium px-2 py-0.5 rounded border border-transparent dark:border-border-dark/30`}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Sidebar Section */}
          <div className="space-y-8">
            <section className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary">sell</span>
                <h3 className="text-text-main dark:text-white font-bold text-lg">Pricing & Settings</h3>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-background-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                  <p className="text-text-secondary dark:text-text-secondary-dark text-xs font-semibold tracking-wider mb-3">Pricing Strategy</p>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-text-main dark:text-white font-mono font-bold text-lg">₹</span>
                    <input 
                      type="number"
                      step="0.01"
                      value={price}
                      onChange={handlePriceChange}
                      className="w-full bg-white dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg text-text-main dark:text-white text-xl font-mono font-bold focus:ring-primary focus:border-primary pl-10 pr-16 py-3 outline-none transition-all shadow-inner"
                    />
                    <div className="absolute right-4 text-[10px] font-bold text-text-secondary dark:text-text-secondary-dark bg-gray-100 dark:bg-surface-dark px-2 py-1 rounded border border-border-light dark:border-border-dark uppercase">INR</div>
                  </div>
                  <p className="text-[11px] text-text-secondary dark:text-text-secondary-dark mt-2 italic">Set the fixed price per license for this partner</p>
                </div>

                <div className="space-y-4 pt-2">
                  <h4 className="text-text-main dark:text-white text-sm font-bold">Permissions</h4>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between cursor-pointer group">
                      <span className="text-sm text-text-secondary dark:text-text-secondary-dark group-hover:text-text-main dark:group-hover:text-white transition-colors">Auto-top up enabled</span>
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={autoTopUp} 
                          onChange={() => handleToggleChange(setAutoTopUp)}
                          className="sr-only peer" 
                        />
                        <div className="w-11 h-6 bg-gray-200 dark:bg-background-dark peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </div>
                    </label>
                    <label className="flex items-center justify-between cursor-pointer group">
                      <span className="text-sm text-text-secondary dark:text-text-secondary-dark group-hover:text-text-main dark:group-hover:text-white transition-colors">Allow Sub-Resellers</span>
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={allowSubResellers} 
                          onChange={() => handleToggleChange(setAllowSubResellers)}
                          className="sr-only peer" 
                        />
                        <div className="w-11 h-6 bg-gray-200 dark:bg-background-dark peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="pt-4 border-t border-border-light dark:border-border-dark">
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 dark:bg-background-dark hover:bg-red-500/10 text-red-600 dark:text-red-500 border border-red-500/20 rounded-lg font-bold text-sm transition-all">
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                    Delete Reseller Account
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Floating Save Actions Bar */}
      {hasChanges && (
        <div className="fixed bottom-0 left-0 right-0 z-[60] bg-white/90 dark:bg-[#101618]/90 backdrop-blur-md border-t border-border-light dark:border-border-dark py-4 px-6 lg:px-10 flex items-center justify-between shadow-2xl animate-in slide-in-from-bottom-full duration-300">
          <div className="flex items-center gap-3">
            <div className="size-2 bg-primary rounded-full animate-pulse"></div>
            <p className="text-sm text-text-main dark:text-white font-medium">You have unsaved changes</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => {
                setHasChanges(false);
                // In a real app, you might want to reset the state values here
              }}
              className="px-5 py-2.5 text-sm font-bold text-text-secondary dark:text-text-secondary-dark hover:text-text-main dark:hover:text-white transition-colors bg-transparent border border-transparent hover:border-border-light dark:hover:border-border-dark rounded-lg"
            >
              Discard Changes
            </button>
            <button 
              onClick={() => setHasChanges(false)}
              className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResellerProfile;
