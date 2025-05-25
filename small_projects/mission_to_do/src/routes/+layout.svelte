<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';
  import { goto } from '$app/navigation';

  let user = null;

  onMount(async () => {
    const { data: { session } } = await supabase.auth.getSession();
    user = session?.user;

    // FIXME: globalThis. might be wrong
    // if (!user && globalThis.$page.url.pathname !== '/auth') {
    //   goto('/auth');
    // }
  });
</script>

<slot />
