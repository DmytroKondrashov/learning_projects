import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { supabase } from '$lib/db';

export const handle: Handle = async ({ event, resolve }) => {
	const session = await supabase.auth.getSession();
	const user = session.data.session?.user;

	event.locals.user = user;

	if (!user && event.url.pathname !== '/login') {
		throw redirect(303, '/login');
	}

	return resolve(event);
};
