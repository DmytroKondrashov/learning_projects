<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { supabase } from '$lib/supabaseClient';
  import { PUBLIC_PROJECT_REF, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

  let todoList = null;
  let listItems = [];
  let loading = true;
  let error = null;

  onMount(async () => {
    const unsubscribe = page.subscribe(async ($page) => {
      const id = $page.params.id;

      try {
        const { data: { session } } = await supabase.auth.getSession();
        const token = session?.access_token;

        if (!token) {
          window.location.href = '/auth';
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
              query GetListItems($id: UUID!) {
                list_itemCollection(filter: { todo_list_id: { eq: $id } }) {
                  edges {
                    node {
                      id
                      name
                      description
                      done
                      due_date
                    }
                  }
                }
              }
            `,
            variables: { id }
          })
        });

        const result = await response.json();
        listItems = result.data.list_itemCollection.edges.map(edge => edge.node);
      } catch (err) {
        error = err;
      } finally {
        loading = false;
      }
    });

    return () => {
      unsubscribe();
    };
  });

  async function createListItem() {
    const name = prompt('Enter the name of the new list item:');
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
            mutation CreateListItem($name: String!, $todo_list_id: UUID!) {
              insertIntolist_itemCollection(objects: { name: $name, todo_list_id: $todo_list_id }) {
                records {
                  id
                  name
                  description
                  done
                  due_date
                }
              }
            }
          `,
          variables: {
            name,
            todo_list_id: todoList.id
          }
        })
      });

      const result = await response.json();
      const newItem = result.data.insertIntolist_itemCollection.records[0];
      listItems = [...listItems, newItem];
    } catch (err) {
      error = err;
    }
  }
</script>

{#if loading}
  <p>Loading to-do list...</p>
{:else if error}
  <p>Error loading to-do list: {error.message}</p>
{:else}
  <!-- <h1>{todoList.name}</h1> -->
  {#if listItems.length === 0}
    <p>No items yet.</p>
    <button on:click={createListItem}>Create a New List Item</button>
  {:else}
    <ul>
      {#each listItems as item}
        <li>{item.name}</li>
      {/each}
    </ul>
    <button on:click={createListItem}>Create a New List Item</button>
  {/if}
{/if}
