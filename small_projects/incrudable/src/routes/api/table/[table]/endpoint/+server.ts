import { json } from '@sveltejs/kit';
import pkg from 'pg';
const {Pool} = pkg;

export async function GET({ params, url, cookies }) {
    const { table, id } = params;
    const cookieHeader = cookies.get('dbConfig');
    if (!cookieHeader) return json({ success: false, error: "No DB config found" }, { status: 400 });

    const dbConfig = JSON.parse(cookieHeader);
    const pool = new Pool(dbConfig);

    try {
        if (id) {
            // Get single record by ID
            const result = await pool.query(`SELECT * FROM ${table} WHERE id = $1`, [id]);
            return json(result.rows[0] || {});
        } else {
            // Get all records
            const result = await pool.query(`SELECT * FROM ${table}`);
            return json(result.rows);
        }
    } catch (error) {
        return json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST({ params, request, cookies }) {
    const { table } = params;
    const cookieHeader = cookies.get('dbConfig');
    if (!cookieHeader) return json({ success: false, error: "No DB config found" }, { status: 400 });

    const dbConfig = JSON.parse(cookieHeader);
    const pool = new Pool(dbConfig);

    try {
        const data = await request.json();
        const keys = Object.keys(data).join(', ');
        const values = Object.values(data);
        const placeholders = values.map((_, i) => `$${i + 1}`).join(', ');

        await pool.query(`INSERT INTO ${table} (${keys}) VALUES (${placeholders})`, values);
        return json({ success: true });
    } catch (error) {
        return json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function PUT({ params, request, cookies }) {
    const { table, id } = params;
    const cookieHeader = cookies.get('dbConfig');
    if (!cookieHeader) return json({ success: false, error: "No DB config found" }, { status: 400 });

    const dbConfig = JSON.parse(cookieHeader);
    const pool = new Pool(dbConfig);

    try {
        const data = await request.json();
        const updates = Object.keys(data).map((key, i) => `${key} = $${i + 1}`).join(', ');
        const values = Object.values(data);
        values.push(id);

        await pool.query(`UPDATE ${table} SET ${updates} WHERE id = $${values.length}`, values);
        return json({ success: true });
    } catch (error) {
        return json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function DELETE({ params, cookies }) {
    const { table, id } = params;
    const cookieHeader = cookies.get('dbConfig');
    if (!cookieHeader) return json({ success: false, error: "No DB config found" }, { status: 400 });

    const dbConfig = JSON.parse(cookieHeader);
    const pool = new Pool(dbConfig);

    try {
        await pool.query(`DELETE FROM ${table} WHERE id = $1`, [id]);
        return json({ success: true });
    } catch (error) {
        return json({ success: false, error: error.message }, { status: 500 });
    }
}
