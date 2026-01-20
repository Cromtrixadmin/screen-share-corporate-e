
export type View = 'LOGIN' | 'DASHBOARD' | 'TRANSACTIONS' | 'FILES' | 'SESSION' | 'VERIFICATION' | 'ERROR' | 'SCREEN_SHARE_HOME' | 'ADD_BALANCE' | 'RESELLER_PROFILE';

export interface Reseller {
  id: string;
  name: string;
  role: 'Direct Reseller' | 'Sub-Reseller';
  activeLicenses: number;
  wallet: number;
  status: 'Active' | 'Warning' | 'Suspended';
}

export interface Transaction {
  id: string;
  date: string;
  resellerName?: string;
  type: 'Allocation' | 'Reversal' | 'Purchase' | 'Recharge';
  amount: number | string;
  status: 'Completed' | 'Processing' | 'Failed' | 'Success' | 'Refunded';
}

export interface ExamFile {
  id: string;
  name: string;
  size: string;
  date: string;
  type: 'pdf' | 'docx' | 'zip' | 'xlsx';
}
