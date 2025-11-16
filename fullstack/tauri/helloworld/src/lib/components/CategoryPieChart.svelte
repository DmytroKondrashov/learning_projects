<script lang="ts">
  import type { CategoryStats } from "$lib/types";
  import { formatCurrency } from "$lib/utils/formatters";

  export let data: CategoryStats[]
  export let title: string = 'Expenses by Category';

  $: total = data.reduce((total, item)=> total + item.amount, 0)
</script>

<div class="bg-white border-2 border-gray-100 rounded-xl p-6">
  <h3 class="text-lg font-bold mb-4">{title}</h3>

  {#if data.length === 0}
    <p class="text-gray-400 text-center py-8">No data available</p>
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
              <span class="text-sm font-medium text-gray-700">{item.category}</span>
              <span class="text-sm font-bold">{formatCurrency(item.amount)}</span>
            </div>
            <div class="bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                class="h-full transition-all"
                style="width: {item.percentage}%; background-color: {item.color}"
              ></div>
            </div>
          </div>
          <span class="text-xs text-gray-500 w-12 text-right">
            {item.percentage.toFixed(1)}%
          </span>
        </div>
      {/each}
    </div>

    <div class="mt-6 pt-4 border-t-2 border-gray-100">
      <div class="flex justify-between items-center">
        <span class="font-semibold text-gray-700">Total</span>
        <span class="text-xl font-bold text-gray-900">{formatCurrency(total)}</span>
      </div>
    </div>
  {/if}
</div>
