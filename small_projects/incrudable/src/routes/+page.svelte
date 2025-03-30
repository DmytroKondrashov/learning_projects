<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  let dbConfig = writable({ host: '', port: '', user: '', password: '', database: '' });
  let tables = writable<string[]>([]);
  let connectionStatus = writable('');

  async function connectToDatabase() {
      connectionStatus.set('Connecting...');
      try {
          const response = await fetch('/api/connect', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify($dbConfig)
          });

          const data = await response.json();
          if (data.success) {
              connectionStatus.set('Connected');
              tables.set(data.tables);
          } else {
              connectionStatus.set('Failed to connect');
          }
      } catch (error) {
          connectionStatus.set('Error connecting to database');
          console.error(error);
      }
  }
</script>

<main class="p-4">
  <h1 class="text-xl font-bold">Connect to PostgreSQL</h1>

  <div class="mt-4 space-y-2">
      <input bind:value={$dbConfig.host} placeholder="Host" class="border p-2 w-full" />
      <input bind:value={$dbConfig.port} placeholder="Port" class="border p-2 w-full" />
      <input bind:value={$dbConfig.user} placeholder="User" class="border p-2 w-full" />
      <input type="password" bind:value={$dbConfig.password} placeholder="Password" class="border p-2 w-full" />
      <input bind:value={$dbConfig.database} placeholder="Database" class="border p-2 w-full" />
      <button on:click={connectToDatabase} class="bg-blue-500 text-white p-2 rounded">Connect</button>
  </div>

  <p class="mt-2 text-gray-600">Status: {$connectionStatus}</p>

  {#if $tables.length > 0}
      <h2 class="mt-4 text-lg font-semibold">Tables</h2>
      <ul class="mt-2 space-y-1">
          {#each $tables as table}
              <li class="border p-2 rounded">{table}</li>
          {/each}
      </ul>
  {/if}
</main>
