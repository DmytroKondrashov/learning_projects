<script lang="ts">
  import { categories } from '$lib/stores/categoryStore';
  import { transactions } from '$lib/stores/transactionStore';
  import { onMount } from 'svelte';
  import { categoryStats } from '../lib/utils/dataHelpers';

  let showAddForm = false;
  let activeTab: 'dashboard' | 'transactions' = 'dashboard';
  let transactionsFilter: 'all' | 'income' | 'expense' = 'all';
  let searchQuery = '';
  let isLoading = true;

  $: incomeStats = categoryStats($transactions, 'income', $categories);
  $: expensesStats = categoryStats($transactions, 'expense', $categories);

  onMount(async () => {
    try {
      
    } catch (error) {
      
    }
  })
</script>

