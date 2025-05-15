<script>
  export let email = '';
  export let password = '';
  export let error = '';
</script>

<form method="POST" class="auth-form">
  {#if error}
    <p class="text-red-500">{error}</p>
  {/if}

  <label>
    Email:
    <input type="email" name="email" bind:value={email} required />
  </label>

  <label>
    Password:
    <input type="password" name="password" bind:value={password} required />
  </label>

  <button type="submit">Login</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: auto;
  }
</style>
