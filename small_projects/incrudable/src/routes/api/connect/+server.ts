import { json } from '@sveltejs/kit';
import dotenv from 'dotenv';
import pkg from 'pg';
const {Client} = pkg;

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

// import { json } from '@sveltejs/kit';
// import pkg from 'pg';
// import { parse } from 'cookie';

// const { Pool } = pkg;
// let pool: Pool | null = null;

// export async function POST({ request, cookies }) {
//     const dbConfig = await request.json();
    
//     try {
//         pool = new Pool(dbConfig);
//         const result = await pool.query(
//             "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'"
//         );

//         // Store DB config in cookies for persistence
//         cookies.set('dbConfig', JSON.stringify(dbConfig), {
//             path: '/',
//             httpOnly: true
//         });

//         return json({ success: true, tables: result.rows.map(row => row.table_name) });
//     } catch (error) {
//         console.error(error);
//         return json({ success: false, error: error.message }, { status: 500 });
//     }
// }
