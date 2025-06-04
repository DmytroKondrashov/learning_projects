<script lang="ts">
	import { limits } from "$lib/stores";

  let { page = $bindable(), 
  limit = $bindable(), } = $props();
</script>

<nav class="pagination my-6" role="navigation" aria-label="pagination">
  <button class="pagination-previous" disabled={page === 1} onclick={() => page -= 1}>Previous</button>
  <button class="pagination-next" onclick={() => page += 1}>Next page</button>

  <ul class="pagination-list">
    {#each $limits as limitVariant}
      <li>
        <button class:is-current={limit === limitVariant} class="pagination-link" 
        onclick={() => limit = limitVariant}>{limitVariant}</button>
      </li>
    {/each}
  </ul>
</nav>
