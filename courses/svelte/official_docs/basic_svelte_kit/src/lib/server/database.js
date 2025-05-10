const db = new Map();

export function getTodos(userId) {
  if (!db.get(userId)) {
    db.set(userId, [{
      id: crypto.randomUUID(),
      description: 'Learn SvelteKit',
      done: false
    }])
  }

  return db.get(userId);
}

export function addTodo(userId, description) {
  const todos = db.get(userId);

  todos.push({
    id: crypto.randomUUID(),
      description,
      done: false
  });
}

export function deleteTodo(userId, id) {
  const todos = db.get(userId);
  const index = todos.findIndex((todo) => todo.id === id);

  if (index !== -1) {
    todos.splice(index, 1);
  }
}
