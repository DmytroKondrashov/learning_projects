import { json } from '@sveltejs/kit';
import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'localhost',
  port: 5432,
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'mission_to_do'
});

export const POST = async ({ request }) => {
  const { query, variables } = await request.json();

  try {
    const client = await pool.connect();
    const result = await client.query(
      'SELECT graphql.resolve($1::text, $2::json)',
      [query, variables || {}]
    );
    client.release();

    const data = result.rows[0]?.resolve;
    return json(data);
  } catch (err) {
    console.error(err);
    return json({ error: 'GraphQL execution failed' }, { status: 500 });
  }
};
