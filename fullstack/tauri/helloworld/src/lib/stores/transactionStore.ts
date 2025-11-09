import { writable, derived } from "svelte/store";
import type { Transaction } from "../types";

function createTransactionStore() {
  const { subscribe, set, update } = writable<Transaction[]>([]);

  return {
    subscribe,
    set,
    add: (transaction: Omit<Transaction, 'id' | 'createdAt'>) => {
      const newTransaction: Transaction = {
        ...transaction,
        id: crypto.randomUUID(),
        createdAt: new Date(),
      }
      update(transactions => [...transactions, newTransaction]);
      return newTransaction;
    },
    update: (id: string, updates: Partial<Transaction>) => {
      update(transactions => 
        transactions.map(t => t.id === id ? {...t, ...updates} : t)
      )
    },
    remove: (id: string) => {
      update(transactions => transactions.filter(t => t.id !== id));
    },
    clear: () => set([]),
  }
}

export const transactions = createTransactionStore();

export const totalBalance = derived(transactions. $transactions => 
  $transactions.reduce((total, transaction) => {
    return transaction.type === 'income' ? total + transaction.amount : total - transaction.amount;
  }, 0)
);
