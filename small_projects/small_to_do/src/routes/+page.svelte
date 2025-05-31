<script>
  import urql from '$lib/urql';
  import { setContextClient, gql } from '@urql/svelte';
	import { onMount } from 'svelte';
  import { IntrospectionQuery } from '$lib/queries/IntrospectionQuery';

  setContextClient(urql);

  let todos = $state([]);
  let errors = $state([]);
  let introspection = $state(null);

  onMount(async () => {
    console.log('onMount');
    // const { data, error } = await urql.query(IntrospectionQuery, {}).toPromise();

    // if (data) {
    //   introspection = data;
    // }

    const { data, error } = await urql.query(gql`
    query {
      todo_listCollection {
        name
      }
    }
  `, {}).toPromise();

    if (data) {
      console.log(data);
      todos = data.todo_list;
    }

    if (error) {
      errors.push(error.message);
    }
  });

  async function fetchTodos() {
    const { data, error } = await urql.query(gql`
    query {
      todo_list {
        id
      }
    }
  `, {}).toPromise();

    if (data) {
      console.log(data);
      todos = data.todo_list;
    }
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<ul>
  {#if todos}
    {#each todos as todo}
      <li>{todo.id}</li>
    {/each}
    {#if todos.length === 0}
      <li>No todos found</li>
    {/if}
  {:else}
    <li>No todos found</li>
  {/if}
</ul>

{#if errors.length > 0}
  <ul>
    {#each errors as error}
      <li>{error}</li>
    {/each}
  </ul>
{/if}

<button onclick={fetchTodos}>Fetch Todos</button>

<pre>{JSON.stringify(introspection, null, 2)}</pre>