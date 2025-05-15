<script>
  import AuthForm from '$lib/components/AuthForm.svelte';
  export let data;
</script>

<AuthForm error={data?.error} />
