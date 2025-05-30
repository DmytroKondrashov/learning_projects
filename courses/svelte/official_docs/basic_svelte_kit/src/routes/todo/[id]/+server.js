import * as db from '$lib/server/database.js';

export async function PUT ({ params, request, cookies }) {
  const { done } = await request.json();
  const userid = cookies.get('userid');

  await db.toggleTodo({ userid, id: params.id, done });
  return new Response(null, { status: 204 });
}

export async function DELETE ({ params, cookies }) {
  const userid = cookies.get('userid');

  await db.deleteTodo({ userid, id: params.id });
  return new Response(null, { status: 204 });
}
