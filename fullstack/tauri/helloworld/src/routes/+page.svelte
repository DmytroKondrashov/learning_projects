<script lang="ts">
  import { monthlyIncome, totalBalance, transactions, monthlyExpences } from "$lib/stores/transactionStore";

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
        <p class="text-2xl font-bold text-red-600">${$monthlyExpences.toFixed(2)}</p>
      </div>
    </div>

      <button onclick={addTestData} class="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">Add test data</button>

    <div class="mt-8">
      <h2 class="text-xl font-bold mb-4">Transactions ({$transactions.length})</h2>
      <div class="space-y-2">
        {#each $transactions as transaction}
          <div class="flex justify-between items-center p-3 bg-gray-50 rounded">
            <div>
              <p class="font-semibold">{transaction.description}</p>
              <p class="text-sm text-gray-600">{transaction.category} • {transaction.date}</p>
            </div>
            <p class="font-bold" class:text-green-600={transaction.type === 'income'} class:text-red-600={transaction.type === 'expense'}>
              {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
