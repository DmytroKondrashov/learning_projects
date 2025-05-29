<script>
  import urql from '$lib/urql';
  import { setContextClient, gql } from '@urql/svelte';
	import { onMount } from 'svelte';

  setContextClient(urql);

  let todos = $state([]);
  let errors = $state([]);

  onMount(async () => {
    const { data, error } = await urql.query(gql`
    query {
      todos {
        id
      }
    }
  `, {}).toPromise();

    if (data) {
      todos = data.todos;
    }

    if (error) {
      errors.push(error.message);
    }
  });

  
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<ul>
  {#each todos as todo}
    <li>{todo.id}</li>
  {/each}
</ul>

{#if errors.length > 0}
  <ul>
    {#each errors as error}
      <li>{error}</li>
    {/each}
  </ul>
{/if}

