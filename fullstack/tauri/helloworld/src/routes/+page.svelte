<script lang="ts">
  import { monthlyIncome, totalBalance, transactions } from "$lib/stores/transactionStore";

  function addTestData() {
    transactions.add({
      type: 'income',
      amount: 5000,
      category: 'salary',
      description: 'Monthly salary',
      date: new Date()
    })

    transactions.add({
      type: 'expense',
      amount: 50,
      category: 'food',
      description: 'Groceries',
      date: new Date()
    });
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-8">
  <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8">
    <h1 class="text-4xl font-bold text-gray-800 mb-8">💰 Finance Tracker</h1>

    <div class="grid grid-cols-3 gap-4 mb-8">
      <div class="bg-blue-50 p-4 rounded-lg">
        <p class="text-sm text-gray-600">Total Balance</p>
        <p class="text-2xl font-bold text-blue-600">${$totalBalance.toFixed(2)}</p>
      </div>

      <div class="bg-green-50 p-4 rounded-lg">
        <p class="text-sm text-gray-600">Monthly Income</p>
        <p class="text-2xl font-bold text-green-600">${$monthlyIncome.toFixed(2)}</p>
      </div>

      <div class="bg-red-50 p-4 rounded-lg">
        <p class="text-sm text-gray-600">Monthly Expenses</p>
        <p class="text-2xl font-bold text-red-600">${$monthlyExpenses.toFixed(2)}</p>
      </div>
    </div>
  </div>
</div>
