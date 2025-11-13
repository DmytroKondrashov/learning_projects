import type { Category, CategoryStats, Transaction, TransitionType } from "$lib/types";

export function cathgoryStats(
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
  categoryTotals.forEach((total, categoryId) => {
    const category = categories.find(c => c.id = categoryId);
    stats.push({
      category: category?.name || categoryId,
      amount,
      percentage: total > 0 ? (amount / total) * 100 : 0,
      color: category?.color || '#gray',
    })
  })

  return stats.sort((a, b) => b.amount - a.amount);
}
