<script lang="ts">
	import { supabase } from '$lib/db';
	import { goto } from '$app/navigation';
	let email = '';
	let password = '';
	let error = '';
	let mode: 'login' | 'signup' = 'login';

	async function handleSubmit() {
		const fn = mode === 'login' ? supabase.auth.signInWithPassword : supabase.auth.signUp;
		const { error: err } = await fn({ email, password });
		if (err) {
			error = err.message;
		} else {
			goto('/');
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<h2>{mode === 'login' ? 'Log In' : 'Sign Up'}</h2>
	<input type="email" bind:value={email} placeholder="Email" required />
	<input type="password" bind:value={password} placeholder="Password" required />
	<button type="submit">{mode === 'login' ? 'Log In' : 'Sign Up'}</button>
	<button type="button" on:click={() => (mode = mode === 'login' ? 'signup' : 'login')}>
		Switch to {mode === 'login' ? 'Sign Up' : 'Log In'}
	</button>
	{#if error}<p style="color: red;">{error}</p>{/if}
</form>
