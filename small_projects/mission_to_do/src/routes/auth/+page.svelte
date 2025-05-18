<script lang="ts">
  import { supabase } from '$lib/supabaseClient';
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (!error) {
      goto('/');
    } else {
      console.error(error.message);
    }
  };

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (!error) {
      goto('/');
    } else {
      console.error(error.message);
    }
  };
</script>

<h1>Sign In / Sign Up</h1>
<input type="email" bind:value={email} placeholder="Email" />
<input type="password" bind:value={password} placeholder="Password" />
<button on:click={signIn}>Sign In</button>
<button on:click={signUp}>Sign Up</button>
