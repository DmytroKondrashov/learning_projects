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
