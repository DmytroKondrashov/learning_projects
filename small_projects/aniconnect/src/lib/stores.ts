import { readable, writable } from 'svelte/store';

export const page = writable(1);
export const limit = writable(12);
export const limits = readable([12, 24, 36, 48]);
export const search = writable('');