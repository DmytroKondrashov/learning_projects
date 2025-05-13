import { json } from '@sveltejs/kit';
import * as db from '$lib/server/database.js';

export async function POST ({ request, cookies }) {
  const { description } = await request.json();

  const userId = cookies.get('userId');
  const { id } = db.createTodo(userId, description);

  return json({ id }, { status: 201 });
}
