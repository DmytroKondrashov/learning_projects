import { writable } from 'svelte/store';

export const page = writable(1);
export const limit = writable(12);
