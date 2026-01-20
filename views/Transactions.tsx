
import React from 'react';
import { Transaction } from '../types';

const Transactions: React.FC = () => {
  const purchases: Transaction[] = [
    { id: '1', date: 'Oct 24, 2023', amount: '5,000.00', status: 'Completed', type: 'Purchase' },
    { id: '2', date: 'Oct 15, 2023', amount: '9,500.00', status: 'Completed', type: 'Purchase' },
    { id: '3', date: 'Oct 10, 2023', amount: '2,400.00', status: 'Processing', type: 'Purchase' },
  ];

  const recharges: Transaction[] = [
    { id: '#TXN-88329-XY', date: 'Oct 22, 2023 04:30 PM', amount: '+₹5,000.00', status: 'Success', type: 'Recharge' },
    { id: '#TXN-11202-PP', date: 'Sep 18, 2023 11:15 AM', amount: '+₹2,500.00', status: 'Success', type: 'Recharge' },
    { id: '#TXN-99381-WT', date: 'Sep 05, 2023 09:00 AM', amount: '+₹10,000.00', status: 'Failed', type: 'Recharge' },
  ];

  const TableHeader = ({ cols }: { cols: { label: string, span: string, align?: string }[] }) => (
    <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-slate-50 dark:bg-[#151b1e] border-b border-slate-200 dark:border-border-dark text-[10px] font-bold text-text-secondary dark:text-text-secondary-dark tracking-widest uppercase">
      {cols.map((col, i) => (
        <div key={i} className={`${col.span} ${col.align === 'right' ? 'text-right' : ''}`}>{col.label}</div>
      ))}
    </div>
  );

  return (
    <div className="px-4 md:px-10 py-8 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-charcoal dark:text-white text-3xl md:text-4xl font-extrabold tracking-tight">Transactions History</h1>
          <p className="text-text-secondary dark:text-text-secondary-dark text-base max-w-2xl">View and manage your license purchases and wallet recharge history.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-border-dark text-charcoal dark:text-white rounded-lg font-bold text-sm transition-colors border border-slate-200 dark:border-border-dark shadow-sm">
          <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
          <span>Export as PDF/CSV</span>
        </button>
      </div>

      <section className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark flex flex-col shadow-sm mb-8 overflow-hidden">
        <div className="p-5 border-b border-slate-200 dark:border-border-dark flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-charcoal dark:text-white text-lg font-bold">Purchase History</h3>
            <p className="text-text-secondary dark:text-text-secondary-dark text-sm">Detailed log of license volume purchases</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-background-dark text-charcoal dark:text-white rounded-lg text-xs font-bold border border-slate-200 dark:border-border-dark min-w-[140px] justify-between">
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">calendar_month</span> Last 30 Days</span>
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </button>
          </div>
        </div>
        <TableHeader cols={[
          { label: 'Date', span: 'col-span-3' },
          { label: 'Quantity', span: 'col-span-2' },
          { label: 'Price / Unit', span: 'col-span-2' },
          { label: 'Total', span: 'col-span-2' },
          { label: 'Status', span: 'col-span-3', align: 'right' }
        ]} />
        <div className="flex flex-col">
          {purchases.map((p, i) => (
            <div key={p.id} className={`md:grid md:grid-cols-12 md:gap-4 flex flex-col gap-2 p-4 md:px-6 md:py-4 items-center border-b border-slate-100 dark:border-border-dark/30 transition-colors ${i % 2 === 1 ? 'bg-slate-50/50 dark:bg-white/[0.01]' : ''}`}>
              <div className="col-span-3 w-full text-charcoal dark:text-white text-sm font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-text-secondary text-[16px]">event</span> {p.date}
              </div>
              <div className="col-span-2 w-full text-charcoal dark:text-white text-sm font-medium">500 Licenses</div>
              <div className="col-span-2 w-full text-text-secondary dark:text-text-secondary-dark text-sm font-mono">₹10.00</div>
              <div className="col-span-2 w-full text-charcoal dark:text-white text-sm font-mono font-bold">₹{p.amount}</div>
              <div className="col-span-3 w-full flex justify-end">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                  p.status === 'Completed' ? 'bg-green-50 dark:bg-[#458545]/10 text-green-700 dark:text-[#458545] border-green-100 dark:border-green-500/20' : 'bg-amber-50 dark:bg-yellow-500/10 text-amber-700 dark:text-yellow-500 border-amber-100 dark:border-yellow-500/20'
                }`}>
                  <span className={`size-1.5 rounded-full ${p.status === 'Completed' ? 'bg-green-600' : 'bg-amber-500 animate-pulse'}`}></span> {p.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark flex flex-col shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-200 dark:border-border-dark flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-charcoal dark:text-white text-lg font-bold">Wallet Recharge History</h3>
            <p className="text-text-secondary dark:text-text-secondary-dark text-sm">Funds added to your account balance</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-background-dark text-charcoal dark:text-white rounded-lg text-xs font-bold border border-slate-200 dark:border-border-dark min-w-[140px] justify-between">
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">calendar_month</span> Last 6 Months</span>
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </button>
          </div>
        </div>
        <TableHeader cols={[
          { label: 'Date', span: 'col-span-3' },
          { label: 'Transaction Id', span: 'col-span-3' },
          { label: 'Payment Method', span: 'col-span-2' },
          { label: 'Amount', span: 'col-span-2' },
          { label: 'Status', span: 'col-span-2', align: 'right' }
        ]} />
        <div className="flex flex-col">
          {recharges.map((r, i) => (
            <div key={r.id} className={`md:grid md:grid-cols-12 md:gap-4 flex flex-col gap-2 p-4 md:px-6 md:py-4 items-center border-b border-slate-100 dark:border-border-dark/30 transition-colors ${i % 2 === 1 ? 'bg-slate-50/50 dark:bg-white/[0.01]' : ''}`}>
              <div className="col-span-3 w-full text-charcoal dark:text-white text-sm font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-text-secondary text-[16px]">schedule</span> {r.date}
              </div>
              <div className="col-span-3 w-full flex items-center gap-2">
                <span className="text-charcoal dark:text-white text-sm font-mono font-medium">{r.id}</span>
                <button className="text-text-secondary hover:text-primary transition-colors"><span className="material-symbols-outlined text-[14px]">content_copy</span></button>
              </div>
              <div className="col-span-2 w-full text-text-secondary dark:text-text-secondary-dark text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">credit_card</span> Visa **** 4242
              </div>
              <div className="col-span-2 w-full text-charcoal dark:text-white text-sm font-mono font-bold">{r.amount}</div>
              <div className="col-span-2 w-full flex justify-end">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                  r.status === 'Success' ? 'bg-green-50 dark:bg-[#458545]/10 text-green-700 dark:text-[#458545] border-green-100 dark:border-green-500/20' : 'bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border-red-100 dark:border-red-500/20'
                }`}>
                  {r.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Transactions;
