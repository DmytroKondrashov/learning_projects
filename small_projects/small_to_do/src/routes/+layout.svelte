
<script lang="ts">
	import type { Snippet } from 'svelte';
  import '../app.css';

  interface Props extends Record<string, unknown> {
    children?: Snippet
  }

  let { children }: Props = $props();
</script>

<div class="container">
  {@render children?.()}
</div>