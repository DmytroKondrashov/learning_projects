import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { endpointRegistry, type EndpointType } from '$lib/server/endpointRegistry';

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
