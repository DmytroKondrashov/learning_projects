<script lang="ts">
  import { transactions } from '../stores/transactionStore';
  import { categories } from '../stores/categoryStore';
  import { formatCurrency, formatDate } from '../utils/formatters';
  import type { Transaction } from '../types';

  export let filter: 'all' | 'income' | 'expense' = 'all';
  export let searchQuery = '';

  $: filteredTransactions = $transactions
    .filter(t => {
      if (filter !== 'all' && t.type !== filter) return false;
      if (searchQuery) {
        const query = searchQuery.toLocaleLowerCase();
        return (
          t.description.toLocaleLowerCase().includes(query) ||
          t.category.toLowerCase().includes(query)
        )
      }
      return true;
    })
    .slice(0, 50);

  function getCategoryName(categoryId: string): string {
    return $categories.find(c => c.id === categoryId)?.name || categoryId;
  }

  function getCategoryColor(categoryId: string): string {
    return $categories.find(c => c.id === categoryId)?.color || '#gray';
  }

  function deleteTransaction(id: string) {
    if (confirm('Are you sure you want to delete this transaction?')) {
      transactions.remove(id);
    }
  }
</script>
