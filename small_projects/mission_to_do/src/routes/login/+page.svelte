<script lang="ts">
  import { supabase } from '$lib/supabaseClient';
  let email = '';
  let password = '';

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert(error.message);
    } else {
      alert('Logged in successfully.');
    }
  };
</script>

<form on:submit|preventDefault={handleLogin}>
  <input type="email" bind:value={email} placeholder="Email" required />
  <input type="password" bind:value={password} placeholder="Password" required />
  <button type="submit">Log In</button>
</form>