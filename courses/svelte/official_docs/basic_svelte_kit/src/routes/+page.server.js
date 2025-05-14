import * as database from '$lib/server/database.js';

export function load({ cookies }) {
	let userid = cookies.get('userid');

	if (!userid) {
		userid = crypto.randomUUID();
		cookies.set('userid', userid, { path: '/' });
	}

	return {
		todos: database.getTodos(userid)
	};
}

// Commented out while the POST route is implemented
// import * as db from '$lib/server/database.js';
// import { fail } from '@sveltejs/kit';

// export function load({ cookies }) {
// 	let id = cookies.get('userid');

// 	if (!id) {
// 		id = crypto.randomUUID();
// 		cookies.set('userid', id, { path: '/' });
// 	}

// 	return {
// 		todos: db.getTodos(id)
// 	};
// }

// export const actions = {
// 	create: async ({ cookies, request }) => {
// 		// Temporarly disabled while the POST route is implemented
// 		await new Promise((resolve) => setTimeout(resolve, 1000));
// 		const data = await request.formData();
// 		try {
// 			db.createTodo(cookies.get('userid'), data.get('description'));
// 		} catch (error) {
// 			return fail(422, { description: data.get('description'), error: error.message });
// 		}
// 	},

//   delete: async ({ cookies, request }) => {
// 		await new Promise((resolve) => setTimeout(resolve, 1000));
//     const data = await request.formData();
//     db.deleteTodo(cookies.get('userid'), data.get('id'))
//   }
// };

