<script lang="ts">
  export let title: string;
  export let value: string;
  export let icon: string = '💰';
  export let color: 'blue' | 'green' | 'red' | 'purple' = 'blue';

  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700',
    green: 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-700',
    red: 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-700',
    purple: 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-700',
  };
</script>

<div class="border-2 {colorClasses[color]} rounded-xl p-6 transition-all hover:shadow-lg">
  <div class="flex items-center justify-between mb-2">
    <p class="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
    <span class="text-2xl">{icon}</span>
  </div>
  <p class="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
</div>
