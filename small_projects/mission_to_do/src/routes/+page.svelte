<!-- <script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';
  import { goto } from '$app/navigation';

  let user = null;

  onMount(async () => {
    const { data: { session } } = await supabase.auth.getSession();
    user = session?.user;
  });

  const logout = async () => {
    await supabase.auth.signOut();
    goto('/auth');
  };
</script>

{#if user}
  <h1>Welcome!</h1>
  <p>Your UID: {user.id}</p>
  <button on:click={logout}>Log Out</button>
{/if} -->

<script>
	import Dashboard from "$lib/components/Dashboard.svelte";
</script>

<Dashboard />

