<script lang="ts">
  import type { PageData } from '../$types';

  let { data }: { data: PageData } = $props();
</script>

<dl>
  {#each Object.entries(data.anime) as [key, value]}
    {#if key !== 'poster'}
      <dt>{key}</dt>
      <dd>{value}</dd>
    {/if}
  {/each}
</dl>