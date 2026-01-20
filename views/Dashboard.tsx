
import React, { useState } from 'react';
import AssignLicensesModal from '../components/AssignLicensesModal';
import AddResellerModal from '../components/AddResellerModal';

interface DashboardProps {
  onAddBalance?: () => void;
  onViewProfile?: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onAddBalance, onViewProfile }) => {
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [isAddResellerModalOpen, setIsAddResellerModalOpen] = useState(false);
  const [isDatacorpExpanded, setIsDatacorpExpanded] = useState(true);
  
  const stats = [
    { label: 'Total License', value: '5,000', sub: 'Volume Purchased Lifetime' },
    { label: 'Distribution', value: '3,450', sub: '69% Allocated To Resellers' },
    { label: 'Used', value: '2,100', sub: 'Active Activations', active: true },
    { label: 'Available', value: '1,550', sub: 'Unallocated Licenses' },
    { label: 'Wallet Balance', value: '₹1,250.00', sub: 'Low Balance Warning', warn: true },
  ];

  const ActionButtons = () => (
    <div className="flex items-center gap-1">
      <button 
        onClick={onViewProfile}
        className="size-8 flex items-center justify-center rounded-lg hover:bg-primary/10 text-text-secondary hover:text-primary transition-all group/btn" 
        title="View Details"
      >
        <span className="material-symbols-outlined text-[18px]">visibility</span>
      </button>
      <button 
        onClick={() => setIsAddResellerModalOpen(true)}
        className="size-8 flex items-center justify-center rounded-lg hover:bg-primary/10 text-text-secondary hover:text-primary transition-all group/btn" 
        title="Edit Reseller"
      >
        <span className="material-symbols-outlined text-[18px]">edit</span>
      </button>
    </div>
  );

  return (
    <div className="px-4 md:px-10 py-8 max-w-[1440px] mx-auto w-full transition-colors duration-300">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-text-main dark:text-white text-3xl md:text-4xl font-extrabold tracking-tight">License Management</h1>
          <p className="text-text-secondary dark:text-text-secondary-dark text-base max-w-2xl">Overview of your reseller network, license distribution, and remaining balance.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={onAddBalance}
            className="flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold text-sm transition-all shadow-md shadow-primary/10"
          >
            <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
            <span>Add Balance</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-border-dark text-text-main dark:text-white rounded-lg font-bold text-sm transition-colors border border-border-light dark:border-border-dark shadow-sm">
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Export Data</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-border-light dark:border-border-dark shadow-sm relative overflow-hidden flex flex-col justify-between h-full gap-4">
            <div>
              <p className="text-text-secondary dark:text-text-secondary-dark text-sm font-bold mb-2">{stat.label}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-text-main dark:text-white text-3xl font-bold">{stat.value}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {stat.active && <span className="size-2 rounded-full bg-primary animate-pulse"></span>}
              <p className={`text-sm font-medium ${stat.warn ? 'text-orange-600 dark:text-yellow-500' : 'text-text-secondary dark:text-text-secondary-dark'}`}>{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Reseller Network Section */}
      <section className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark flex flex-col shadow-sm">
        <div className="p-5 border-b border-border-light dark:border-border-dark flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-text-main dark:text-white text-lg font-bold">Reseller Network</h3>
            <p className="text-text-secondary dark:text-text-secondary-dark text-sm">Manage hierarchy and license allocation</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <div className="relative group">
              <select className="appearance-none bg-gray-50 dark:bg-background-dark text-text-main dark:text-white text-sm rounded-lg pl-3 pr-8 py-2.5 border border-border-light dark:border-border-dark focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none cursor-pointer min-w-[140px]">
                <option>All Statuses</option>
                <option>Active</option>
                <option>Suspended</option>
                <option>Pending</option>
              </select>
              <span className="material-symbols-outlined absolute right-2 top-2.5 text-text-secondary pointer-events-none text-[20px]">expand_more</span>
            </div>
            
            <button 
              onClick={() => setIsAddResellerModalOpen(true)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 dark:bg-background-dark hover:bg-gray-100 dark:hover:bg-[#232d30] text-text-main dark:text-white border border-border-light dark:border-border-dark rounded-lg font-bold text-sm transition-all group"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">person_add</span>
              Add Reseller
            </button>

            <button 
              onClick={() => setIsAssignModalOpen(true)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold text-sm transition-all shadow-md shadow-primary/10"
            >
              <span className="material-symbols-outlined text-[18px]">assignment_add</span>
              Assign Licenses
            </button>
          </div>
        </div>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 dark:bg-[#151b1e] border-b border-border-light dark:border-border-dark text-xs font-bold text-text-secondary dark:text-text-secondary-dark tracking-wide">
          <div className="col-span-4">Reseller Name / Id</div>
          <div className="col-span-2">Role</div>
          <div className="col-span-2">Active Licenses</div>
          <div className="col-span-2">Wallet</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>

        {/* Table Content */}
        <div className="flex flex-col custom-scrollbar overflow-x-auto">
          {/* Datacorp Tech Row */}
          <div className="group flex flex-col border-b border-border-light dark:border-border-dark hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
            <div className="md:grid md:grid-cols-12 md:gap-4 flex flex-col gap-2 p-4 md:px-6 md:py-4 items-center">
              <div className="col-span-4 w-full flex items-center gap-3">
                <button 
                  onClick={() => setIsDatacorpExpanded(!isDatacorpExpanded)}
                  className={`text-text-secondary hover:text-text-main dark:hover:text-white transition-transform ${isDatacorpExpanded ? 'rotate-0' : '-rotate-90'}`}
                >
                  <span className="material-symbols-outlined text-[20px]">arrow_drop_down</span>
                </button>
                <div className="size-8 rounded-full bg-blue-100 dark:bg-gradient-to-tr dark:from-blue-900 dark:to-slate-800 flex items-center justify-center text-xs font-bold text-blue-700 dark:text-blue-700 border border-blue-200 dark:border-white/10">DT</div>
                <div>
                  <p className="text-text-main dark:text-white text-sm font-semibold">Datacorp Tech</p>
                  <p className="text-text-secondary dark:text-text-secondary-dark text-xs">Id: #RES-8821</p>
                </div>
              </div>
              <div className="col-span-2 w-full md:w-auto pl-11 md:pl-0 flex items-center">
                <span className="px-2 py-1 rounded text-xs font-medium bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">Direct Reseller</span>
              </div>
              <div className="col-span-2 w-full md:w-auto pl-11 md:pl-0">
                <p className="text-text-main dark:text-white text-sm font-medium">500</p>
                <div className="w-24 h-1 bg-gray-200 dark:bg-background-dark mt-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="col-span-2 w-full md:w-auto pl-11 md:pl-0">
                <p className="text-text-main dark:text-white text-sm font-mono">₹450.00</p>
              </div>
              <div className="col-span-1 w-full md:w-auto pl-11 md:pl-0">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 dark:bg-[#458545]/20 text-green-700 dark:text-[#458545] border border-green-100 dark:border-green-500/20">
                  <span className="size-1.5 rounded-full bg-green-600 dark:bg-[#458545]"></span> Active
                </span>
              </div>
              <div className="col-span-1 w-full md:w-auto flex justify-end">
                <ActionButtons />
              </div>
            </div>

            {/* Sub-reseller B (Conditional) */}
            {isDatacorpExpanded && (
              <div className="md:grid md:grid-cols-12 md:gap-4 flex flex-col gap-2 p-4 md:px-6 md:py-3 items-center bg-gray-50/30 dark:bg-black/20 border-t border-border-light dark:border-border-dark/30">
                <div className="col-span-4 w-full flex items-center gap-3 relative pl-8">
                  <div className="absolute left-[19px] top-[-26px] bottom-[22px] w-px bg-border-light dark:bg-border-dark"></div>
                  <div className="absolute left-[19px] top-1/2 w-4 h-px bg-border-light dark:bg-border-dark"></div>
                  <div className="size-8 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-text-secondary dark:text-text-secondary-dark border border-border-light dark:border-border-dark">SB</div>
                  <div>
                    <p className="text-text-main dark:text-white text-sm font-medium">Sub-reseller B</p>
                    <p className="text-text-secondary dark:text-text-secondary-dark text-xs">Id: #SUB-102</p>
                  </div>
                </div>
                <div className="col-span-2 w-full md:w-auto pl-16 md:pl-0">
                  <span className="text-xs text-text-secondary dark:text-text-secondary-dark">Sub-reseller (Lvl 2)</span>
                </div>
                <div className="col-span-2 w-full md:w-auto pl-16 md:pl-0">
                  <p className="text-text-main dark:text-white text-sm">100</p>
                </div>
                <div className="col-span-2 w-full md:w-auto pl-16 md:pl-0">
                  <p className="text-text-main dark:text-white text-sm font-mono">₹0.00</p>
                </div>
                <div className="col-span-1 w-full md:w-auto pl-16 md:pl-0">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 dark:bg-[#458545]/20 text-green-700 dark:text-[#458545] border border-green-100 dark:border-green-500/20">
                    <span className="size-1.5 rounded-full bg-green-600 dark:bg-[#458545]"></span> Active
                  </span>
                </div>
                <div className="col-span-1 w-full md:w-auto flex justify-end">
                  <ActionButtons />
                </div>
              </div>
            )}
          </div>

          {/* Global Systems Row */}
          <div className="group flex flex-col border-b border-border-light dark:border-border-dark hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
            <div className="md:grid md:grid-cols-12 md:gap-4 flex flex-col gap-2 p-4 md:px-6 md:py-4 items-center">
              <div className="col-span-4 w-full flex items-center gap-3">
                <button className="text-text-secondary hover:text-text-main dark:hover:text-white transition-colors -rotate-90">
                  <span className="material-symbols-outlined text-[20px]">arrow_drop_down</span>
                </button>
                <div className="size-8 rounded-full bg-purple-100 dark:bg-gradient-to-tr dark:from-purple-900 dark:to-indigo-900 flex items-center justify-center text-xs font-bold text-purple-700 dark:text-purple-700 border border-purple-200 dark:border-white/10">GS</div>
                <div>
                  <p className="text-text-main dark:text-white text-sm font-semibold">Global Systems Inc</p>
                  <p className="text-text-secondary dark:text-text-secondary-dark text-xs">Id: #RES-9930</p>
                </div>
              </div>
              <div className="col-span-2 w-full md:w-auto pl-11 md:pl-0">
                <span className="px-2 py-1 rounded text-xs font-medium bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">Direct Reseller</span>
              </div>
              <div className="col-span-2 w-full md:w-auto pl-11 md:pl-0">
                <p className="text-text-main dark:text-white text-sm font-medium">1,200</p>
                <div className="w-24 h-1 bg-gray-200 dark:bg-background-dark mt-1 rounded-full overflow-hidden">
                  <div className="bg-orange-500 dark:bg-yellow-500 h-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="col-span-2 w-full md:w-auto pl-11 md:pl-0">
                <p className="text-orange-600 dark:text-yellow-500 text-sm font-mono font-bold">₹12.50</p>
                <p className="text-[10px] text-text-secondary dark:text-text-secondary-dark font-medium">Low Balance</p>
              </div>
              <div className="col-span-1 w-full md:w-auto pl-11 md:pl-0">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-50 dark:bg-yellow-500/10 text-orange-600 dark:text-yellow-500 border border-orange-100 dark:border-yellow-500/20">
                  <span className="size-1.5 rounded-full bg-orange-500 dark:bg-yellow-500 animate-pulse"></span> Warning
                </span>
              </div>
              <div className="col-span-1 w-full md:w-auto flex justify-end">
                <ActionButtons />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Pagination */}
        <div className="px-6 py-4 border-t border-border-light dark:border-border-dark grid grid-cols-1 sm:grid-cols-3 items-center gap-4 bg-gray-50/30 dark:bg-transparent">
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
            <span className="text-xs text-text-secondary dark:text-text-secondary-dark font-semibold whitespace-nowrap">Rows Per Page:</span>
            <div className="relative">
              <select className="appearance-none bg-white dark:bg-background-dark text-text-main dark:text-white text-xs rounded-lg border border-border-light dark:border-border-dark focus:outline-none cursor-pointer py-1.5 pl-3 pr-8 w-16 text-center shadow-sm">
                <option>10</option>
                <option selected>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span className="material-symbols-outlined absolute right-2 top-1.5 text-text-secondary pointer-events-none text-[16px]">expand_more</span>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="text-xs text-text-secondary dark:text-text-secondary-dark text-center font-medium">Showing 3 Of 128</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto justify-center sm:justify-end">
            <button className="px-3 py-1.5 text-xs font-bold text-text-secondary dark:text-text-secondary-dark hover:text-text-main dark:hover:text-white bg-white dark:bg-background-dark rounded-lg border border-border-light dark:border-border-dark hover:border-gray-400 transition-all shadow-sm">Previous</button>
            <button className="px-3 py-1.5 text-xs font-bold text-text-main dark:text-white bg-white dark:bg-surface-dark rounded-lg border border-border-light dark:border-border-dark hover:border-primary hover:text-primary transition-all shadow-sm">Next</button>
          </div>
        </div>
      </section>

      {/* License Usage History Section */}
      <section className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark flex flex-col shadow-sm mt-8">
        <div className="p-5 border-b border-border-light dark:border-border-dark flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-text-main dark:text-white text-lg font-bold">License Usage History</h3>
            <p className="text-text-secondary dark:text-text-secondary-dark text-sm">Recent exam activity and duration logs</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative group">
              <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-background-dark hover:bg-gray-50 dark:hover:bg-border-dark text-text-secondary dark:text-text-secondary-dark hover:text-text-main dark:hover:text-white rounded-lg text-sm border border-border-light dark:border-border-dark transition-colors shadow-sm font-medium">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                This Month
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>
            </div>
            <button className="p-2 hover:bg-gray-50 dark:hover:bg-background-dark rounded-lg text-text-secondary hover:text-text-main dark:hover:text-white transition-colors border border-transparent hover:border-border-light dark:hover:border-border-dark">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
        </div>
        
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 dark:bg-[#151b1e] border-b border-border-light dark:border-border-dark text-xs font-bold text-text-secondary dark:text-text-secondary-dark tracking-wide">
          <div className="col-span-3">Date</div>
          <div className="col-span-3">Partner Id</div>
          <div className="col-span-4">Exam</div>
          <div className="col-span-2 text-right">Duration</div>
        </div>

        <div className="flex flex-col custom-scrollbar overflow-x-auto">
          {/* History Item 1 */}
          <div className="md:grid md:grid-cols-12 md:gap-4 flex flex-col gap-2 p-4 md:px-6 md:py-4 items-center border-b border-border-light/50 dark:border-border-dark/50 hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
            <div className="col-span-3 w-full text-text-main dark:text-white text-sm font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-text-secondary text-[16px]">schedule</span>
              Oct 24, 2023 <span className="text-text-secondary text-xs">10:30 Am</span>
            </div>
            <div className="col-span-3 w-full flex items-center gap-2">
              <div className="size-6 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-[10px] font-bold border border-blue-100 dark:border-blue-500/20">DT</div>
              <span className="text-text-main dark:text-white text-sm">#RES-8821</span>
            </div>
            <div className="col-span-4 w-full text-text-secondary dark:text-text-secondary-dark text-sm flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary"></span>
              Aws Certified Solutions Architect
            </div>
            <div className="col-span-2 w-full text-right text-text-main dark:text-white text-sm font-mono">120 Min</div>
          </div>

          {/* History Item 2 */}
          <div className="md:grid md:grid-cols-12 md:gap-4 flex flex-col gap-2 p-4 md:px-6 md:py-4 items-center border-b border-border-light/50 dark:border-border-dark/50 hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
            <div className="col-span-3 w-full text-text-main dark:text-white text-sm font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-text-secondary text-[16px]">schedule</span>
              Oct 24, 2023 <span className="text-text-secondary text-xs">09:15 Am</span>
            </div>
            <div className="col-span-3 w-full flex items-center gap-2">
              <div className="size-6 rounded-full bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center text-[10px] font-bold border border-purple-100 dark:border-purple-500/20">GS</div>
              <span className="text-text-main dark:text-white text-sm">#RES-9930</span>
            </div>
            <div className="col-span-4 w-full text-text-secondary dark:text-text-secondary-dark text-sm flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary"></span>
              Cisco Ccna 200-301
            </div>
            <div className="col-span-2 w-full text-right text-text-main dark:text-white text-sm font-mono">90 Min</div>
          </div>
        </div>

        {/* Footer Pagination */}
        <div className="px-6 py-4 border-t border-border-light dark:border-border-dark grid grid-cols-1 sm:grid-cols-3 items-center gap-4 bg-gray-50/30 dark:bg-transparent">
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
            <span className="text-xs text-text-secondary dark:text-text-secondary-dark font-semibold whitespace-nowrap">Rows Per Page:</span>
            <div className="relative">
              <select className="appearance-none bg-white dark:bg-background-dark text-text-main dark:text-white text-xs rounded-lg border border-border-light dark:border-border-dark focus:outline-none cursor-pointer py-1.5 pl-3 pr-8 w-16 text-center shadow-sm">
                <option>10</option>
                <option selected>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span className="material-symbols-outlined absolute right-2 top-1.5 text-text-secondary pointer-events-none text-[16px]">expand_more</span>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="text-xs text-text-secondary dark:text-text-secondary-dark text-center font-medium">Showing 3 Of 128</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto justify-center sm:justify-end">
            <button className="px-3 py-1.5 text-xs font-bold text-text-secondary dark:text-text-secondary-dark hover:text-text-main dark:hover:text-white bg-white dark:bg-background-dark rounded-lg border border-border-light dark:border-border-dark hover:border-gray-400 transition-all shadow-sm">Previous</button>
            <button className="px-3 py-1.5 text-xs font-bold text-text-main dark:text-white bg-white dark:bg-surface-dark rounded-lg border border-border-light dark:border-border-dark hover:border-primary hover:text-primary transition-all shadow-sm">Next</button>
          </div>
        </div>
      </section>

      <AssignLicensesModal isOpen={isAssignModalOpen} onClose={() => setIsAssignModalOpen(false)} />
      <AddResellerModal isOpen={isAddResellerModalOpen} onClose={() => setIsAddResellerModalOpen(false)} />
    </div>
  );
};

export default Dashboard;
