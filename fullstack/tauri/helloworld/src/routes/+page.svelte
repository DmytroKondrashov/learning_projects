<script lang="ts">
  import { categories } from '$lib/stores/categoryStore';
  import { transactions } from '$lib/stores/transactionStore';
  import { onMount } from 'svelte';
  import { categoryStats } from '../lib/utils/dataHelpers';
  import { settings } from '$lib/stores/settingsStore';
  import { loadData } from '$lib/tauri';

  let showAddForm = false;
  let activeTab: 'dashboard' | 'transactions' = 'dashboard';
  let transactionsFilter: 'all' | 'income' | 'expense' = 'all';
  let searchQuery = '';
  let isLoading = true;

  $: incomeStats = categoryStats($transactions, 'income', $categories);
  $: expensesStats = categoryStats($transactions, 'expense', $categories);

  onMount(async () => {
    try {
      const data = await loadData();
      if (data) {
        if (data.transactions) transactions.set(data.transactions);
        if (data.categories) categories.set(data.categories);
        if (data.settings) settings.set(data.settings);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      isLoading = false;
    }
  })
</script>

