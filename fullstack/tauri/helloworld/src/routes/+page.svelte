<script lang="ts">
  import { transactions } from "$lib/stores/transactionStore";

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

    
  </div>
</div>
