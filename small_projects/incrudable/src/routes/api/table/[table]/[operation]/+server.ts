import { json } from '@sveltejs/kit';
import { endpointRegistry } from '$lib/server/endpointRegistry';

export async function GET({ params }) {
    const { table, operation } = params;

    const allowed = endpointRegistry?.[table]?.[operation as keyof typeof endpointRegistry[string]];
    if (!allowed) {
        return json({ success: false, error: 'Endpoint not enabled' }, { status: 404 });
    }

    if (operation === 'getAll') {
        // Example dummy implementation
        return json({ success: true, data: `Fetching all rows from ${table}` });
    }

    if (operation === 'getById') {
        return json({ success: true, data: `Fetching row by ID from ${table}` });
    }

    // Other operations...
    return json({ success: true, message: `Operation '${operation}' on table '${table}' executed.` });
}
