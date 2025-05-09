<script>
  import { Navbar } from '$lib/components';
  let { children } = $props();
</script>

<Navbar />

{@render children()}

