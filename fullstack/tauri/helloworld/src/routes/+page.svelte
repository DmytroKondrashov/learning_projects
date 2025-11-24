<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { transactions, totalBalance, monthlyIncome, monthlyExpenses } from '../lib/stores/transactionStore';
  import { categories } from '../lib/stores/categoryStore';
  import { settings } from '../lib/stores/settingsStore';
  import StatCard from '../lib/components/StatCard.svelte';
  import TransactionForm from '../lib/components/TransactionForm.svelte';
  import TransactionList from '../lib/components/TransactionList.svelte';
  import CategoryPieChart from '../lib/components/CategoryPieChart.svelte';
  import ThemeToggle from '../lib/components/ThemeToggle.svelte';
  import { formatCurrency } from '../lib/utils/formatters';
  import { getCategoryStats } from '../lib/utils/dataHelpers';
  import { loadData, saveData, exportCSV } from '../lib/tauri';
  import { exportToCSV } from '../lib/utils/dataHelpers';

  let showAddForm = false;
  let activeTab: 'dashboard' | 'transactions' = 'dashboard';
  let transactionFilter: 'all' | 'income' | 'expense' = 'all';
  let searchQuery = '';
  let isLoading = true;

  $: expenseStats = getCategoryStats($transactions, 'expense', $categories);
  $: incomeStats = getCategoryStats($transactions, 'income', $categories);

  onMount(async () => {
    try {
      const data = await loadData();
      if (data) {
        if (data.transactions) transactions.set(data.transactions);
        if (data.categories) categories.set(data.categories);
        if (data.settings) settings.set(data.settings);
      }
    } catch (error) {
      console.error('Failed to load data:', error);
    } finally {
      isLoading = false;
    }
  });

  $: if (!isLoading) {
    saveData({
      transactions: $transactions,
      categories: $categories,
      settings: $settings,
    }).catch(console.error);
  }

  async function handleExport() {
    try {
      const csv = exportToCSV($transactions);
      const filename = `transactions-${new Date().toISOString().split('T')[0]}.csv`;
      const path = await exportCSV(csv, filename);
      alert(`Exported to: ${path}`);
    } catch (error) {
      alert('Failed to export: ' + error);
    }
  }
</script>

<svelte:head>
  <title>Finance Tracker</title>
</svelte:head>

{#if isLoading}
  <div class="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
    <div class="text-white text-2xl font-bold">Loading...</div>
  </div>
{:else}
  <div class="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
    <!-- Header -->
    <header class="bg-white/10 dark:bg-gray-900/40 backdrop-blur-md border-b border-white/20 dark:border-gray-700/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-3xl font-bold text-white flex items-center gap-2">
            💰 Finance Tracker
          </h1>
          <div class="flex gap-3 items-center">
            <ThemeToggle />
            <button
              on:click={handleExport}
              class="px-4 py-2 bg-white/20 dark:bg-gray-700/50 hover:bg-white/30 dark:hover:bg-gray-700/70 text-white rounded-lg font-medium transition backdrop-blur-sm"
            >
              Export CSV
            </button>
            <button
              on:click={() => (showAddForm = true)}
              class="px-6 py-2 bg-white dark:bg-purple-600 text-purple-600 dark:text-white rounded-lg font-semibold hover:shadow-lg transition"
            >
              + Add Transaction
            </button>
          </div>
        </div>

        <!-- Tabs -->
        <div class="flex gap-4 mt-4">
          <button
            on:click={() => (activeTab = 'dashboard')}
            class="px-4 py-2 rounded-lg font-medium transition {activeTab === 'dashboard'
              ? 'bg-white text-purple-600 dark:bg-purple-600 dark:text-white'
              : 'text-white hover:bg-white hover:bg-opacity-10 dark:hover:bg-gray-800'}"
          >
            Dashboard
          </button>
          <button
            on:click={() => (activeTab = 'transactions')}
            class="px-4 py-2 rounded-lg font-medium transition {activeTab === 'transactions'
              ? 'bg-white text-purple-600 dark:bg-purple-600 dark:text-white'
              : 'text-white hover:bg-white hover:bg-opacity-10 dark:hover:bg-gray-800'}"
          >
            Transactions
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {#if activeTab === 'dashboard'}
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Balance"
            value={formatCurrency($totalBalance)}
            icon="💵"
            color={$totalBalance >= 0 ? 'green' : 'red'}
          />
          <StatCard
            title="Monthly Income"
            value={formatCurrency($monthlyIncome)}
            icon="📈"
            color="green"
          />
          <StatCard
            title="Monthly Expenses"
            value={formatCurrency($monthlyExpenses)}
            icon="📉"
            color="red"
          />
        </div>

        <!-- Charts -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <CategoryPieChart data={expenseStats} title="Expenses by Category" />
          <CategoryPieChart data={incomeStats} title="Income by Category" />
        </div>

        <!-- Recent Transactions -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Recent Transactions</h2>
          <TransactionList filter="all" />
        </div>
      {:else}
        <!-- Transactions Tab -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div class="flex flex-col sm:flex-row gap-4 mb-6">
            <!-- Filter -->
            <div class="flex gap-2">
              <button
                on:click={() => (transactionFilter = 'all')}
                class="px-4 py-2 rounded-lg font-medium transition {transactionFilter === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}"
              >
                All
              </button>
              <button
                on:click={() => (transactionFilter = 'income')}
                class="px-4 py-2 rounded-lg font-medium transition {transactionFilter === 'income'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}"
              >
                Income
              </button>
              <button
                on:click={() => (transactionFilter = 'expense')}
                class="px-4 py-2 rounded-lg font-medium transition {transactionFilter === 'expense'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}"
              >
                Expenses
              </button>
            </div>

            <!-- Search -->
            <input
              type="text"
              bind:value={searchQuery}
              placeholder="Search transactions..."
              class="flex-1 px-4 py-2 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none transition bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>

          <TransactionList filter={transactionFilter} {searchQuery} />
        </div>
      {/if}
    </main>
  </div>

  {#if showAddForm}
    <TransactionForm onClose={() => (showAddForm = false)} />
  {/if}
{/if}
