export type TransitionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  type: TransitionType;
  amount: number;
  date: Date;
  description: string;
  category: string;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  type: TransitionType;
  color: string;
  icon?: string;
}

export interface MonthlyStats {
  month: string;
  income: number;
  expenses: number;
  balance: number;
}


