import { writable } from 'svelte/store';
import { supabase } from '$lib/db';

export const user = writable<string | null>(null);

supabase.auth.getUser().then(({ data: { user: u } }) => {
	if (u) user.set(u.id);
});

supabase.auth.onAuthStateChange((_event, session) => {
	user.set(session?.user?.id ?? null);
});
