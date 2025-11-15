<script lang="ts">
  export let title: string;
  export let value: string;
  export let icon: string = '💰';
  export let color: 'blue' | 'green' | 'red' | 'purple' = 'blue';

  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    red: 'bg-red-50 text-red-600 border-red-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
  };
</script>

<div class="border-2 {colorClasses[color]} rounded-xl p-6 transition-all hover:shadow-lg">
  <div class="flex items-center justify-between mb-2">
    <p class="text-sm font-medium text-gray-600">{title}</p>
    <span class="text-2xl">{icon}</span>
  </div>
  <p class="text-3xl font-bold">{value}</p>
</div>
