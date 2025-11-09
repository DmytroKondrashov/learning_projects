import type { Category } from "./types";

export const DEFAULT_CATEGORIES: Category[] = [
   // Income categories
  { id: 'salary', name: 'Salary', type: 'income', color: '#10b981' },
  { id: 'freelance', name: 'Freelance', type: 'income', color: '#059669' },
  { id: 'investment', name: 'Investment', type: 'income', color: '#047857' },
  { id: 'other-income', name: 'Other Income', type: 'income', color: '#065f46' },
  
   // Expense categories
  { id: 'food', name: 'Food & Dining', type: 'expense', color: '#ef4444' },
  { id: 'transport', name: 'Transportation', type: 'expense', color: '#f97316' },
  { id: 'shopping', name: 'Shopping', type: 'expense', color: '#f59e0b' },
  { id: 'entertainment', name: 'Entertainment', type: 'expense', color: '#eab308' },
  { id: 'bills', name: 'Bills & Utilities', type: 'expense', color: '#84cc16' },
  { id: 'healthcare', name: 'Healthcare', type: 'expense', color: '#22c55e' },
  { id: 'education', name: 'Education', type: 'expense', color: '#14b8a6' },
  { id: 'housing', name: 'Housing', type: 'expense', color: '#06b6d4' },
  { id: 'other-expense', name: 'Other Expense', type: 'expense', color: '#6366f1' },
]