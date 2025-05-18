<script lang="ts">
  import { goto } from '$app/navigation';
  import { supabase } from '$lib/supabaseClient';
  import { PUBLIC_PROJECT_REF, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

  export let list: {
    id: string;
    name: string;
    created_at: string;
    user_id: string;
  };

  export let onDelete: (id: string) => void;
  export let onRename: (id: string, newName: string) => void;

  async function handleRename() {
    const newName = prompt('Enter a new name for the list:', list.name);
    if (!newName || newName === list.name) return;

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
            mutation RenameTodoList($id: UUID!, $name: String!) {
              updateTodo_listCollection(
                filter: { id: { eq: $id } },
                set: { name: $name }
              ) {
                records {
                  id
                  name
                }
              }
            }
          `,
          variables: {
            id: list.id,
            name: newName
          }
        })
      });

      const result = await response.json();
      if (result.errors) {
        throw new Error(result.errors[0].message);
      }

      onRename(list.id, newName);
    } catch (err) {
      alert(`Error renaming list: ${err.message}`);
    }
  }

  async function handleDelete() {
    const confirmDelete = confirm(`Are you sure you want to delete the list "${list.name}"?`);
    if (!confirmDelete) return;

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
            mutation DeleteTodoList($id: UUID!) {
              deleteFromTodo_listCollection(filter: { id: { eq: $id } }) {
                affectedCount
              }
            }
          `,
          variables: {
            id: list.id
          }
        })
      });

      const result = await response.json();
      if (result.errors) {
        throw new Error(result.errors[0].message);
      }

      onDelete(list.id);
    } catch (err) {
      alert(`Error deleting list: ${err.message}`);
    }
  }
</script>

<div class="list-item">
  <a href={`/todo_list/${list.id}`}>{list.name}</a>
  <button on:click={handleRename}>Edit</button>
  <button on:click={handleDelete}>Delete</button>
</div>

<style>
  .list-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }

  a {
    flex: 1;
    text-decoration: none;
    color: blue;
  }

  button {
    padding: 0.25rem 0.5rem;
  }
</style>
