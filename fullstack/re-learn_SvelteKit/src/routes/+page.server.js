import * as db from '$lib/server/database.js';

export function load({ cookies }) {
	const visited = cookies.get('visited');
	let id = cookies.get('userid');

  cookies.set('visited', 'true', { path: '/' });

  if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}

	return {
		visited: visited === 'true',
    todos: db.getTodos(id)
	};
}

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		db.createTodo(cookies.get('userid'), data.get('description'));
	}
};
