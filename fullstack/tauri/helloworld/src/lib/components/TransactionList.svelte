<script lang="ts">
  import { transactions } from '../stores/transactionStore';
  import { categories } from '../stores/categoryStore';
  import { formatCurrency, formatDate } from '../utils/formatters';

  export let filter: 'all' | 'income' | 'expense' = 'all';
  export let searchQuery = '';

  let transactionToDelete: string | null = null;

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

  function getDateString(date: Date | string | undefined): string {
    if (!date) return '';
    if (date instanceof Date) {
      return date.toISOString().split('T')[0];
    }
    if (typeof date === 'string') {
      return date.split('T')[0];
    }
    return String(date);
  }

  function confirmDelete(id: string) {
    transactionToDelete = id;
  }

  function cancelDelete() {
    transactionToDelete = null;
  }

  function confirmDeleteTransaction() {
    if (transactionToDelete) {
      transactions.remove(transactionToDelete);
      transactionToDelete = null;
    }
  }
</script>

<div class="space-y-2">
  {#if filteredTransactions.length === 0}
    <div class="text-center py-12 text-gray-400 dark:text-gray-500">
      <p class="text-lg">No transactions found</p>
      <p class="text-sm">Add your first transaction to get started!</p>
    </div>
  {:else}
    {#each filteredTransactions as transaction (transaction.id)}
    <div class="bg-white dark:bg-gray-700 border-2 border-gray-100 dark:border-gray-600 rounded-lg p-4 hover:border-gray-200 dark:hover:border-gray-500 transition">
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-1">
              <span
                class="w-3 h-3 rounded-full"
                style="background-color: {getCategoryColor(transaction.category)}"
              ></span>
              <span class="text-sm font-medium text-gray-600 dark:text-gray-400">
                {getCategoryName(transaction.category)}
              </span>
            </div>
            <p class="font-semibold text-gray-900 dark:text-white mb-1">{transaction.description}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">{formatDate(getDateString(transaction?.date))}</p>
          </div>

          <div class="text-right flex items-start gap-3">
            <div>
              <p
                class="text-xl font-bold {transaction.type === 'income'
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'}"
              >
                {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
              </p>
            </div>
            <button
              on:click={() => confirmDelete(transaction.id)}
              class="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition p-1"
              title="Delete"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    {/each}
  {/if}
</div>

{#if transactionToDelete}
  <div 
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" 
    role="dialog"
    aria-modal="true"
    aria-labelledby="delete-dialog-title"
    on:click={cancelDelete}
    on:keydown={(e) => e.key === 'Escape' && cancelDelete()}
    tabindex="-1"
  >
    <div 
      class="bg-white rounded-xl shadow-2xl w-full max-w-md p-6" 
      role="presentation"
      on:click|stopPropagation
      on:keydown|stopPropagation
    >
      <h2 id="delete-dialog-title" class="text-2xl font-bold mb-4 text-gray-900">Delete Transaction</h2>
      <p class="text-gray-600 mb-6">Are you sure you want to delete this transaction? This action cannot be undone.</p>
      <div class="flex gap-3 justify-end">
        <button
          on:click={cancelDelete}
          class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Cancel
        </button>
        <button
          on:click={confirmDeleteTransaction}
          class="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
{/if}
