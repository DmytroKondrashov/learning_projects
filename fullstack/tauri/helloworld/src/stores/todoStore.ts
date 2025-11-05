import { writable } from 'svelte/store';
import type { Todo } from '../types';

function createTodoStore() {
  const { subscribe, set, update } = writable<Todo[]>([]);

  return {
    subscribe,
    set,
    add: (text: string) => {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        text,
        completed: false,
        createdAt: Date.now()
      };
      update(todos => [newTodo, ...todos]);
    },
    toggle: (id: string) => {
      update(todos =>
        todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    remove: (id: string) => {
      update(todos => todos.filter(todo => todo.id !== id));
    },
    clear: () => set([])
  };
}

export const todos = createTodoStore();
