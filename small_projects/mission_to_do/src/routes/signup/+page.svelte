<script lang="ts">
  import { supabase } from '$lib/supabaseClient';
  let email = '';
  let password = '';

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert(error.message);
    } else {
      alert('Check your email for the confirmation link.');
    }
  };
</script>

<form on:submit|preventDefault={handleSignup}>
  <input type="email" bind:value={email} placeholder="Email" required />
  <input type="password" bind:value={password} placeholder="Password" required />
  <button type="submit">Sign Up</button>
</form>
