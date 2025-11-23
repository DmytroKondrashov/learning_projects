<!-- src/lib/components/CategoryPieChart.svelte -->
<script lang="ts">
  import type { CategoryStats } from '../types';
  import { formatCurrency } from '../utils/formatters';

  export let data: CategoryStats[];
  export let title: string = 'Expenses by Category';

  $: total = data.reduce((sum, item) => sum + item.amount, 0);
</script>

<div class="bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-xl p-6">
  <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">{title}</h3>

  {#if data.length === 0}
    <p class="text-gray-400 dark:text-gray-500 text-center py-8">No data available</p>
  {:else}
    <div class="space-y-3">
      {#each data as item}
        <div class="flex items-center gap-3">
          <div
            class="w-4 h-4 rounded"
            style="background-color: {item.color}"
          ></div>
          <div class="flex-1">
            <div class="flex justify-between items-center mb-1">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{item.category}</span>
              <span class="text-sm font-bold text-gray-900 dark:text-white">{formatCurrency(item.amount)}</span>
            </div>
            <div class="bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                class="h-full transition-all"
                style="width: {item.percentage}%; background-color: {item.color}"
              ></div>
            </div>
          </div>
          <span class="text-xs text-gray-500 dark:text-gray-400 w-12 text-right">
            {item.percentage.toFixed(1)}%
          </span>
        </div>
      {/each}
    </div>

    <div class="mt-6 pt-4 border-t-2 border-gray-100 dark:border-gray-700">
      <div class="flex justify-between items-center">
        <span class="font-semibold text-gray-700 dark:text-gray-300">Total</span>
        <span class="text-xl font-bold text-gray-900 dark:text-white">{formatCurrency(total)}</span>
      </div>
    </div>
  {/if}
</div>
