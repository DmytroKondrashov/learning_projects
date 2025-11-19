<script lang="ts">
  import { categories } from '$lib/stores/categoryStore';
  import { monthlyIncome, monthlyExpences, totalBalance, transactions } from '$lib/stores/transactionStore';
  import { onMount } from 'svelte';
  import { categoryStats, exportToCSV } from '../lib/utils/dataHelpers';
  import { settings } from '$lib/stores/settingsStore';
  import { exportCSV, loadData, saveData } from '$lib/tauri';
  import TransactionForm from '$lib/components/TransactionForm.svelte';
  import TransactionList from '$lib/components/TransactionList.svelte';
  import StatCard from '$lib/components/StatCard.svelte';
  import { formatCurrency } from '$lib/utils/formatters';
  import CategoryPieChart from '$lib/components/CategoryPieChart.svelte';

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
        if (data.transactions) {
          // Convert date strings back to Date objects
          const normalizedTransactions = data.transactions.map((t: any) => ({
            ...t,
            date: t.date instanceof Date ? t.date : new Date(t.date),
            createdAt: t.createdAt instanceof Date ? t.createdAt : new Date(t.createdAt),
          }));
          transactions.set(normalizedTransactions);
        }
        if (data.categories) categories.set(data.categories);
        if (data.settings) settings.set(data.settings);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      isLoading = false;
    }
  })

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
  <div class="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center">
    <div class="text-white text-2xl font-bold">Loading...</div>
  </div>
{:else}
  <div class="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
    <!-- Header -->
    <header class="bg-white bg-opacity-10 backdrop-blur-md border-b border-white border-opacity-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-3xl font-bold flex items-center gap-2">
            💰 Finance Tracker
          </h1>
          <div class="flex gap-3">
            <button
              on:click={handleExport}
              class="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg font-medium transition backdrop-blur-sm"
            >
              Export CSV
            </button>
            <button
              on:click={() => (showAddForm = true)}
              class="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-lg transition"
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
              ? 'bg-white text-purple-600'
              : 'text-gray-300 hover:text-gray-700 hover:bg-white hover:bg-opacity-10'}"
          >
            Dashboard
          </button>
          <button
            on:click={() => (activeTab = 'transactions')}
            class="px-4 py-2 rounded-lg font-medium transition {activeTab === 'transactions'
              ? 'bg-white text-purple-600'
              : 'text-gray-300 hover:text-gray-700 hover:bg-white hover:bg-opacity-10'}"
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
            value={formatCurrency($monthlyExpences)}
            icon="📉"
            color="red"
          />
        </div>

        <!-- Charts -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <CategoryPieChart data={expensesStats} title="Expenses by Category" />
          <CategoryPieChart data={incomeStats} title="Income by Category" />
        </div>

        <!-- Recent Transactions -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h2 class="text-2xl font-bold mb-4">Recent Transactions</h2>
          <TransactionList filter="all" />
        </div>
      {:else}
        <!-- Transactions Tab -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <div class="flex flex-col sm:flex-row gap-4 mb-6">
            <!-- Filter -->
            <div class="flex gap-2">
              <button
                on:click={() => (transactionsFilter = 'all')}
                class="px-4 py-2 rounded-lg font-medium transition {transactionsFilter === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
              >
                All
              </button>
              <button
                on:click={() => (transactionsFilter = 'income')}
                class="px-4 py-2 rounded-lg font-medium transition {transactionsFilter === 'income'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
              >
                Income
              </button>
              <button
                on:click={() => (transactionsFilter = 'expense')}
                class="px-4 py-2 rounded-lg font-medium transition {transactionsFilter === 'expense'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
              >
                Expenses
              </button>
            </div>

            <!-- Search -->
            <input
              type="text"
              bind:value={searchQuery}
              placeholder="Search transactions..."
              class="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition"
            />
          </div>

          <TransactionList filter={transactionsFilter} {searchQuery} />
        </div>
      {/if}
    </main>
  </div>

  {#if showAddForm}
    <TransactionForm onClose={() => (showAddForm = false)} />
  {/if}
{/if}

