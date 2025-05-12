// uncomment for fun :)

// export function load({ setHeaders }) {
//   setHeaders({
//     'Content-Type': 'text/plain'
//   }) 
// }

// export function load({ cookies }) {
//   const visited = cookies.get('visited');

//   cookies.set('visited', 'true', {path: '/'});

//   return {
//     visited: visited === 'true'
//   }
// }

import * as db from '$lib/server/database.js';
import { fail } from '@sveltejs/kit';

export function load({ cookies }) {
	let id = cookies.get('userid');

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}

	return {
		todos: db.getTodos(id)
	};
}

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();
		try {
			db.createTodo(cookies.get('userid'), data.get('description'));
		} catch (error) {
			return fail(422, { description: data.get('description'), error: error.message });
		}
	},

  delete: async ({ cookies, request }) => {
    const data = await request.formData();
    db.deleteTodo(cookies.get('userid'), data.get('id'))
  }
};

