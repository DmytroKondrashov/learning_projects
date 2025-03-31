<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  let tableName = writable('');
  let tableData = writable([]);
  let columns = writable([]);

  onMount(async () => {
      const table = $page.params.table;
      tableName.set(table);

      try {
          const response = await fetch(`/api/table/${table}`);
          const data = await response.json();
          
          if (data.success) {
              columns.set(data.columns);
              tableData.set(data.rows);
          }
      } catch (error) {
          console.error('Error fetching table data:', error);
      }
  });
</script>

<main class="p-4">
  <h1 class="text-xl font-bold">Table: {$tableName}</h1>

  {#if $columns.length > 0}
      <table class="mt-4 border-collapse border border-gray-300 w-full">
          <thead>
              <tr>
                  {#each $columns as col}
                      <th class="border p-2 bg-gray-100">{col}</th>
                  {/each}
              </tr>
          </thead>
          <tbody>
              {#each $tableData as row}
                  <tr>
                      {#each $columns as col}
                          <td class="border p-2">{row[col]}</td>
                      {/each}
                  </tr>
              {/each}
          </tbody>
      </table>
  {:else}
      <p class="mt-4">No data found.</p>
  {/if}
</main>
