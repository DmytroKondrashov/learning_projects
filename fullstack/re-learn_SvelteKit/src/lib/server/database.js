const db = new Map();

export function getTodos(userid) {
	if (!db.get(userid)) {
		db.set(userid, [{
			id: crypto.randomUUID(),
			description: 'Learn SvelteKit',
			done: false
		}]);
	}

	return db.get(userid);
}

export function createTodo(userid, description) {
  if (description === '') {
    throw new Error('todo must have a description')
  }

  const todos = db.get(userid)

  if (todos.find((todo) => todo.description === description)) {
    throw new Error('Todos must be unique!')
  }

  todos.push({
    id: crypto.randomUUID(),
    description,
    done: false
  })
}

export function deleteTodo(userid, todoid) {
  const todos = db.get(userid)
  const index = todos.findIndex((todo) => todo.id === todoid)

  if (index !== -1) {
    todos.splice(index, 1)
  }
}
