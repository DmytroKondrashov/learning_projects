const db = new Map();

export function getTodos(userid) {
	if (!db.has(userid)) {
		createTodo({ userid, description: 'Learn about API routes' });
	}

	return Array.from(db.get(userid).values());
}

export function createTodo({userid, description}) {
	if (description === '') {
		throw new Error('Description is required');
	}

	if (!db.has(userid)) {
		db.set(userid, new Map());
	}

	const todos = db.get(userid);

	const id = crypto.randomUUID();

	todos.set(id, {
		id,
		description,
		done: false
	})

	return { id };
}

export function deleteTodo({userid, id}) {
	const todos = db.get(userid);
	todos.delete(id);
}

export function toggleTodo({ userid, id, done }) {
	const todos = db.get(userid);
	todos.get(id).done = done;
}
