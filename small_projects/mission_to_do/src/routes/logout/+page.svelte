<script lang="ts">
  import { supabase } from '$lib/supabaseClient';

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert(error.message);
    } else {
      alert('Logged out successfully.');
    }
  };
</script>

<button on:click={handleLogout}>Log Out</button>
