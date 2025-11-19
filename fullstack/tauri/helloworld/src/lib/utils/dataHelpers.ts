import type { Category, CategoryStats, Transaction, TransitionType } from "$lib/types";

export function categoryStats(
  transactions: Transaction[],
  type: TransitionType,
  categories: Category[]
): CategoryStats[] {
  const filtered = transactions.filter(t => t.type === type);
  const total = filtered.reduce((sum, t) => sum + t.amount, 0);

  const categoryTotals = new Map<string, number>();

  filtered.forEach(t => {
    const current = categoryTotals.get(t.category) || 0;
    categoryTotals.set(t.category, current + t.amount);
  })

  const stats: CategoryStats[] = [];
  categoryTotals.forEach((amount, categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    stats.push({
      category: category?.name || categoryId,
      amount,
      percentage: total > 0 ? (amount / total) * 100 : 0,
      color: category?.color || '#gray',
    })
  })

  return stats.sort((a, b) => b.amount - a.amount);
}

export function getMonthlyData(transactions: Transaction[], month: number = 6) {
  const monthlyMap = new Map<string, {income: number, expenses: number}>;

  transactions.forEach(t => {
    const dateObj = t.date instanceof Date ? t.date : new Date(t.date);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const monthKey = `${year}-${month}`;

    const existing = monthlyMap.get(monthKey) || {income: 0, expenses: 0};
    if (t.type === 'income') {
      existing.income += t.amount;
    } else {
      existing.expenses += t.amount;
    }

    monthlyMap.set(monthKey, existing);
  })

  const sortedMonths = Array.from(monthlyMap.keys()).sort().slice(-month);
  return sortedMonths.map(month => ({
    month,
    income: monthlyMap.get(month)?.income || 0,
    expenses: monthlyMap.get(month)?.expenses || 0,
    balance: (monthlyMap.get(month)?.income || 0) - (monthlyMap.get(month)?.expenses || 0),
  }));
};

export function exportToCSV(transactions: Transaction[]) {
  const headers = ['Date', 'Type', 'Category', 'Description', 'Amount'];
  const rows = transactions.map(t => [
    t.date,
    t.type,
    t.category,
    t.description,
    t.amount.toFixed(2),
  ])

  return [
    headers.join(','),
    ...rows.map(row => row.join(',')),
  ].join('\n');
}
