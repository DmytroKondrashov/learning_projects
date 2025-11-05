<script lang="ts">
  import { todos } from '../stores/todoStore';
  import type { Todo } from '../types';

  let newTodoText = '';

  function addTodo() {
    if (newTodoText.trim()) {
      todos.add(newTodoText.trim());
      newTodoText = '';
    }
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      addTodo();
    }
  }

  $: activeTodos = $todos.filter(t => !t.completed);
  $: completedTodos = $todos.filter(t => t.completed);
</script>

<svelte:head>
  <title>My Todos</title>
</svelte:head>

<main>
  <div class="container">
    <h1>📝 My Todos</h1>
    
    <div class="input-group">
      <input
        type="text"
        bind:value={newTodoText}
        on:keypress={handleKeyPress}
        placeholder="What needs to be done?"
        class="todo-input"
      />
      <button on:click={addTodo} class="add-btn">Add</button>
    </div>

    <div class="stats">
      <span>{activeTodos.length} active</span>
      <span>{completedTodos.length} completed</span>
    </div>

    <div class="todo-list">
      {#if $todos.length === 0}
        <p class="empty-state">No todos yet. Add one above! 👆</p>
      {:else}
        {#each $todos as todo (todo.id)}
          <div class="todo-item" class:completed={todo.completed}>
            <input
              type="checkbox"
              checked={todo.completed}
              on:change={() => todos.toggle(todo.id)}
              id={todo.id}
            />
            <label for={todo.id}>{todo.text}</label>
            <button
              class="delete-btn"
              on:click={() => todos.remove(todo.id)}
            >
              ✕
            </button>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
  }

  .container {
    background: white;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    padding: 32px;
    width: 100%;
    max-width: 500px;
  }

  h1 {
    margin: 0 0 24px 0;
    font-size: 32px;
    color: #333;
    text-align: center;
  }

  .input-group {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }

  .todo-input {
    flex: 1;
    padding: 12px 16px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.2s;
  }

  .todo-input:focus {
    outline: none;
    border-color: #667eea;
  }

  .add-btn {
    padding: 12px 24px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }

  .add-btn:hover {
    background: #5568d3;
  }

  .stats {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    background: #f5f5f5;
    border-radius: 8px;
    font-size: 14px;
    color: #666;
    margin-bottom: 16px;
  }

  .todo-list {
    max-height: 400px;
    overflow-y: auto;
  }

  .empty-state {
    text-align: center;
    color: #999;
    padding: 40px 20px;
    font-size: 16px;
  }

  .todo-item {
    display: flex;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.2s;
  }

  .todo-item:hover {
    background: #fafafa;
  }

  .todo-item input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-right: 12px;
  }

  .todo-item label {
    flex: 1;
    cursor: pointer;
    font-size: 16px;
    color: #333;
    transition: color 0.2s;
  }

  .todo-item.completed label {
    color: #999;
    text-decoration: line-through;
  }

  .delete-btn {
    background: none;
    border: none;
    color: #999;
    font-size: 20px;
    cursor: pointer;
    padding: 4px 8px;
    transition: color 0.2s;
  }

  .delete-btn:hover {
    color: #ff4757;
  }
</style>
