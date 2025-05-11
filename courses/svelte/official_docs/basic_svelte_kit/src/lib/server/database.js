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
  let todos = db.get(userId);

  if (!todos) {
    db.set(userId, []);
    todos = db.get(userId);
  }

  todos.push({
    id: crypto.randomUUID(),
      description,
      done: false
  });

  db.set(userId, todos);
}

export function deleteTodo(userId, id) {
  const todos = db.get(userId);
  const index = todos.findIndex((todo) => todo.id === id);

  if (index !== -1) {
    todos.splice(index, 1);
  }
}
