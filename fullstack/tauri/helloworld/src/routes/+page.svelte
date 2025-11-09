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

<main class="flex justify-center items-center min-h-screen p-5">
  <div class="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-[500px]">
    <h1 class="m-0 mb-6 text-3xl text-gray-800 text-center">📝 My Todos</h1>
    
    <div class="flex gap-2 mb-4">
      <input
        type="text"
        bind:value={newTodoText}
        on:keypress={handleKeyPress}
        placeholder="What needs to be done?"
        class="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg text-base transition-colors focus:outline-none focus:border-indigo-500"
      />
      <button 
        on:click={addTodo} 
        class="px-6 py-3 bg-indigo-500 text-white border-none rounded-lg text-base font-semibold cursor-pointer transition-colors hover:bg-indigo-600"
      >
        Add
      </button>
    </div>

    <div class="flex justify-between px-3 py-3 bg-gray-100 rounded-lg text-sm text-gray-600 mb-4">
      <span>{activeTodos.length} active</span>
      <span>{completedTodos.length} completed</span>
    </div>

    <div class="max-h-[400px] overflow-y-auto">
      {#if $todos.length === 0}
        <p class="text-center text-gray-400 py-10 px-5 text-base">No todos yet. Add one above! 👆</p>
      {:else}
        {#each $todos as todo (todo.id)}
          <div class="flex items-center py-3 border-b border-gray-100 transition-colors hover:bg-gray-50">
            <input
              type="checkbox"
              checked={todo.completed}
              on:change={() => todos.toggle(todo.id)}
              id={todo.id}
              class="w-5 h-5 cursor-pointer mr-3"
            />
            <label 
              for={todo.id}
              class="flex-1 cursor-pointer text-base text-gray-800 transition-colors {todo.completed ? 'text-gray-400 line-through' : ''}"
            >
              {todo.text}
            </label>
            <button
              class="bg-transparent border-none text-gray-400 text-xl cursor-pointer px-2 py-1 transition-colors hover:text-red-500"
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
