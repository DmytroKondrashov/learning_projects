import { json } from '@sveltejs/kit';
import * as database from '$lib/server/database.js';

export async function POST({ request, cookies }) {
  const { description } = request.json();

  const userid = cookies.get('userid');
  const { id } = database.createTodo({ userid, description });

  return json({ id }, { status: 201 });
}
