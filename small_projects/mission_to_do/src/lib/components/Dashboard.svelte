<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';
  import { goto } from '$app/navigation';
  import { PUBLIC_PROJECT_REF, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
  import List from '$lib/components/List.svelte';

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
                    user_id
                  }
                }
              }
            }
          `
        })
      });

      const result = await response.json();
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
      const userId = session?.user?.id;

      const response = await fetch(`https://${PUBLIC_PROJECT_REF}.supabase.co/graphql/v1`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'apikey': PUBLIC_SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({
          query: `
            mutation CreateTodoList($name: String!, $userId: UUID!) {
              insertIntotodo_listCollection(objects: { name: $name, user_id: $userId }) {
                records {
                  id
                  name
                  user_id
                  created_at
                }
              }
            }
          `,
          variables: {
            name,
            userId
          }
        })
      });

      const result = await response.json();
      const newList = result.data.insertIntotodo_listCollection.records[0];
      todoLists = [...todoLists, newList];
    } catch (err) {
      error = err;
    }
  }

  function handleDelete(id: string) {
    todoLists = todoLists.filter(list => list.id !== id);
  }

  function handleRename(id: string, newName: string) {
    todoLists = todoLists.map(list => list.id === id ? { ...list, name: newName } : list);
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
        <li>
          <List {list} onDelete={handleDelete} onRename={handleRename} />
        </li>
      {/each}
    </ul>
    <button on:click={createTodoList}>Create a New To-Do List</button>
  {/if}
{/if}
