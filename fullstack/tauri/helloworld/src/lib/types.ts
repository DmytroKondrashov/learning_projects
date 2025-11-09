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
