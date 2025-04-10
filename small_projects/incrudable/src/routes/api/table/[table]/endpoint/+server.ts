import { json } from '@sveltejs/kit';
// import pkg from 'pg';
// const {Pool} = pkg;
import type { RequestHandler } from './$types';
import { endpointRegistry, type EndpointType } from '$lib/server/endpointRegistry';

// type EndpointType = 'create' | 'getAll' | 'getById' | 'update' | 'delete';
// const endpointRegistry: Record<string, Partial<Record<EndpointType, boolean>>> = {};

export const POST: RequestHandler = async ({ params, request }) => {
    const table = params.table;
    const { type, enabled } = await request.json();

    if (!table || !type) {
        return json({ success: false, error: 'Missing table or endpoint type' }, { status: 400 });
    }

    if (!['create', 'getAll', 'getById', 'update', 'delete'].includes(type)) {
        return json({ success: false, error: 'Invalid endpoint type' }, { status: 400 });
    }

    if (!endpointRegistry[table]) {
        endpointRegistry[table] = {};
    }

    endpointRegistry[table][type as EndpointType] = enabled;
    console.log(`Endpoint ${type} for table ${table} is now ${enabled ? 'enabled' : 'disabled'}`);

    return json({ success: true, table, type, enabled });
}

export { endpointRegistry };

// export async function GET({ params, url, cookies }) {
//     console.log('GET request received');
//     const { table, id } = params;
//     const cookieHeader = cookies.get('dbConfig');
//     if (!cookieHeader) return json({ success: false, error: "No DB config found" }, { status: 400 });

//     const dbConfig = JSON.parse(cookieHeader);
//     const pool = new Pool(dbConfig);

//     try {
//         if (id) {
//             // Get single record by ID
//             const result = await pool.query(`SELECT * FROM ${table} WHERE id = $1`, [id]);
//             return json(result.rows[0] || {});
//         } else {
//             // Get all records
//             const result = await pool.query(`SELECT * FROM ${table}`);
//             return json(result.rows);
//         }
//     } catch (error) {
//         return json({ success: false, error: error.message }, { status: 500 });
//     }
// }

// export async function POST({ params, request }) {
//     console.log('POST request received');
//     // console.log('params', params);
//     // console.log('request', request.json());
//     try {
//         const { type, enabled } = await request.json();
        
//         // Here we're just acknowledging the endpoint toggle
//         // We don't need to modify the database table
//         return json({ 
//             success: true, 
//             message: `${type} endpoint ${enabled ? 'enabled' : 'disabled'} for table ${params.table}`
//         });

//     } catch (error) {
//         return json({ 
//             success: false, 
//             error: error instanceof Error ? error.message : 'Unknown error occurred' 
//         }, { status: 500 });
//     }
// }

// export async function PUT({ params, request, cookies }) {
//     console.log('PUT request received');
//     const { table, id } = params;
//     const cookieHeader = cookies.get('dbConfig');
//     if (!cookieHeader) return json({ success: false, error: "No DB config found" }, { status: 400 });

//     const dbConfig = JSON.parse(cookieHeader);
//     const pool = new Pool(dbConfig);

//     try {
//         const data = await request.json();
//         const updates = Object.keys(data).map((key, i) => `${key} = $${i + 1}`).join(', ');
//         const values = Object.values(data);
//         values.push(id);

//         await pool.query(`UPDATE ${table} SET ${updates} WHERE id = $${values.length}`, values);
//         return json({ success: true });
//     } catch (error) {
//         return json({ success: false, error: error.message }, { status: 500 });
//     }
// }

// export async function DELETE({ params, cookies }) {
//     console.log('DELETE request received');
//     const { table, id } = params;
//     const cookieHeader = cookies.get('dbConfig');
//     if (!cookieHeader) return json({ success: false, error: "No DB config found" }, { status: 400 });

//     const dbConfig = JSON.parse(cookieHeader);
//     const pool = new Pool(dbConfig);

//     try {
//         await pool.query(`DELETE FROM ${table} WHERE id = $1`, [id]);
//         return json({ success: true });
//     } catch (error) {
//         return json({ success: false, error: error.message }, { status: 500 });
//     }
// }
