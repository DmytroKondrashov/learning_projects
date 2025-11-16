<script lang="ts">
  import type { CategoryStats } from "$lib/types";

  export let data: CategoryStats[]
  export let title: string = 'Expenses by Category';

  $: total = data.reduce((total, item)=> total + item.amount, 0)
</script>


