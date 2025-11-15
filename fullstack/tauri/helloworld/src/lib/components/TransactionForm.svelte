<script lang="ts">
  import { transactions } from '../stores/transactionStore';
  import { categories } from '../stores/categoryStore';
  import type { TransitionType } from '../types';

  export let onClose: () => void;

  let type: TransitionType = 'expense';
  let amount: number | null = null;
  let category = '';
  let description = '';
  let date = new Date().toISOString().split('T')[0];

  $: availableCategories = $categories.filter(c => c.type === type);
</script>
