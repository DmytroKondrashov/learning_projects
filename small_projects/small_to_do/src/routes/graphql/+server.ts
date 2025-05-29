import { json } from '@sveltejs/kit';
import { client } from '$lib/postgres';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
  const { query, variables = {}, operationName = null } = await request.json();

  const rows = await client`SELECT graphql.resolve(${query}, ${variables}, ${operationName}) AS result;`;

  return json(rows[0].result);
};
