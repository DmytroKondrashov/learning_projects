// import { json } from '@sveltejs/kit';
// import { endpointRegistry } from '$lib/server/endpointRegistry';

// export async function GET({ params }) {
//     const { table, operation } = params;

//     const allowed = endpointRegistry?.[table]?.[operation as keyof typeof endpointRegistry[string]];
//     if (!allowed) {
//         return json({ success: false, error: 'Endpoint not enabled' }, { status: 404 });
//     }

//     if (operation === 'getAll') {
//         // Example dummy implementation
//         return json({ success: true, data: `Fetching all rows from ${table}` });
//     }

//     if (operation === 'getById') {
//         return json({ success: true, data: `Fetching row by ID from ${table}` });
//     }

//     // Other operations...
//     return json({ success: true, message: `Operation '${operation}' on table '${table}' executed.` });
// }

import { json } from '@sveltejs/kit';
import { endpointRegistry } from '$lib/server/endpointRegistry';
import { parse } from 'cookie';
import pkg from 'pg';

const { Client } = pkg;


function getClient(dbConfig: any) {
    return new Client({
        host: dbConfig.host,
        port: parseInt(dbConfig.port),
        user: dbConfig.user,
        password: dbConfig.password,
        database: dbConfig.database
    });
}

export async function GET({ params, url, request }) {
    const { table, operation } = params;
    const cookies = parse(request.headers.get('dbConfig') || '');
    const dbConfig = cookies.dbConfig ? JSON.parse(cookies.dbConfig) : null;

    if (!dbConfig) return json({ success: false, error: 'No database configuration found' }, { status: 400 });

    const allowed = endpointRegistry?.[table]?.[operation as keyof typeof endpointRegistry[string]];
    if (!allowed) return json({ success: false, error: 'Endpoint not enabled' }, { status: 404 });

    const client = getClient(dbConfig);
    await client.connect();

    try {
        if (operation === 'getAll') {
            const result = await client.query(`SELECT * FROM ${table}`);
            return json({ success: true, data: result.rows });
        }
    } catch (err) {
        return json({ success: false, error: err.message }, { status: 500 });
    } finally {
        await client.end();
    }
}