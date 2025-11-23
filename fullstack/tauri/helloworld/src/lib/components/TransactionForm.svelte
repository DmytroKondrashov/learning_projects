<!-- src/lib/components/TransactionForm.svelte -->
<script lang="ts">
  import { transactions } from '../stores/transactionStore';
  import { categories } from '../stores/categoryStore';
  import type { TransitionType } from '../types';

  export let onClose: () => void;

  let type: TransitionType = 'expense';
  let amount: number | null = null;
  let category = '';
  let description = '';
  let date = new Date().toISOString().split('T')[0];

  $: availableCategories = $categories.filter(c => c.type === type);

  function handleSubmit() {
    if (!amount || !category || !description) {
      alert('Please fill in all fields');
      return;
    }

    transactions.add({
      type,
      amount: Number(amount),
      category,
      description,
      date: new Date(date),
    });

    onClose();
  }
</script>

<div class="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center z-50 p-4">
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md p-6">
    <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Add Transaction</h2>

    <form on:submit|preventDefault={handleSubmit} class="space-y-4">
      <!-- Type Toggle -->
      <div class="flex gap-2">
        <button
          type="button"
          on:click={() => (type = 'expense')}
          class="flex-1 py-3 rounded-lg font-semibold transition {type === 'expense'
            ? 'bg-red-500 text-white'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}"
        >
          Expense
        </button>
        <button
          type="button"
          on:click={() => (type = 'income')}
          class="flex-1 py-3 rounded-lg font-semibold transition {type === 'income'
            ? 'bg-green-500 text-white'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}"
        >
          Income
        </button>
      </div>

      <!-- Amount -->
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Amount</label>
        <input
          type="number"
          step="0.01"
          bind:value={amount}
          placeholder="0.00"
          class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none transition bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          required
        />
      </div>

      <!-- Category -->
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
        <select
          bind:value={category}
          class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none transition bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          required
        >
          <option value="">Select category</option>
          {#each availableCategories as cat}
            <option value={cat.id}>{cat.name}</option>
          {/each}
        </select>
      </div>

      <!-- Description -->
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
        <input
          type="text"
          bind:value={description}
          placeholder="e.g., Grocery shopping"
          class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none transition bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          required
        />
      </div>

      <!-- Date -->
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date</label>
        <input
          type="date"
          bind:value={date}
          class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none transition bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          required
        />
      </div>

      <!-- Actions -->
      <div class="flex gap-3 pt-4">
        <button
          type="button"
          on:click={onClose}
          class="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="flex-1 px-4 py-3 bg-purple-600 dark:bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-800 transition"
        >
          Add Transaction
        </button>
      </div>
    </form>
  </div>
</div>
