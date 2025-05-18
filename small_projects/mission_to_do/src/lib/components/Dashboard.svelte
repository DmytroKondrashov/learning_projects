<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';
  import { goto } from '$app/navigation';
  import { PUBLIC_PROJECT_REF, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

  let todoLists = [];
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;

      if (!token) {
        goto('/auth');
        return;
      }

      const response = await fetch(`https://${PUBLIC_PROJECT_REF}.supabase.co/graphql/v1`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'apikey': PUBLIC_SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({
          query: `
            query GetUserTodoLists {
              todo_listCollection {
                edges {
                  node {
                    id
                    name
                    created_at
                  }
                }
              }
            }
          `
        })
      })

      const result = await response.json();
      console.log(result);
      todoLists = result.data.todo_listCollection.edges.map(edge => edge.node);
    } catch (err) {
      error = err;
    } finally {
      loading = false;
    }
  });

  async function createTodoList() {
    const name = prompt('Enter the name of the new to-do list:');
    if (!name) return;

    try {
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;

      const response = await fetch(`https://${PUBLIC_PROJECT_REF}.supabase.co/graphql/v1`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'apikey': PUBLIC_SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({
          query: `
            mutation CreateTodoList($name: String!) {
              insertIntoTodo_listCollection(objects: { name: $name }) {
                records {
                  id
                  name
                  created_at
                }
              }
            }
          `,
          variables: {
            name
          }
        })
      });

      const result = await response.json();
      const newList = result.data.insertIntoTodo_listCollection.records[0];
      todoLists = [...todoLists, newList];
    } catch (err) {
      error = err;
    }
  }
</script>

{#if loading}
  <p>Loading your to-do lists...</p>
{:else if error}
  <p>Error loading to-do lists: {error.message}</p>
{:else}
  {#if todoLists.length === 0}
    <p>No To-Do Lists yet.</p>
    <button on:click={createTodoList}>Create a New To-Do List</button>
  {:else}
    <ul>
      {#each todoLists as list}
        <li>{list.name}</li>
      {/each}
    </ul>
    <button on:click={createTodoList}>Create a New To-Do List</button>
  {/if}
{/if}
