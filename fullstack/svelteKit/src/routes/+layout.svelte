<script>
  import { Navbar } from '$lib/components';
  let { children } = $props();
</script>

<Navbar />

<main class="container">
  {@render children()}
</main>

