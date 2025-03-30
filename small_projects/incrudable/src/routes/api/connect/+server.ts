import { json } from '@sveltejs/kit';
import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export async function POST({ request }) {
    try {
        const { host, port, user, password, database } = await request.json();

        const client = new Client({
            host,
            port: parseInt(port),
            user,
            password,
            database
        });

        await client.connect();

        // Fetch table names
        const res = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
        const tables = res.rows.map((row: { table_name: string }) => row.table_name);

        await client.end();

        return json({ success: true, tables });
    } catch (error) {
        if (error instanceof Error) {
            return json({ success: false, error: error.message }, { status: 500 });
        } else {
            return json({ success: false, error: 'An unknown error occurred' }, { status: 500 });
        }
    }
}
