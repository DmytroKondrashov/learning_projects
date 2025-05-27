import { client } from '$lib/postgres';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  const { query, variables } = await request.json();

  const result = await client`SELECT graphql.resolve(${query}, ${variables || {}})`;

  return json(result);
}