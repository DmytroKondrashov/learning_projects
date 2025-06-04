<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	interface Props extends Record<string, unknown> {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<Navbar />
<div class="container mb-6">
	{@render children?.()}
</div>
