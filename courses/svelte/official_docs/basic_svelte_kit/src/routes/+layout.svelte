<script lang="ts">
	import { page, navigating } from '$app/state'
	
  let { children } = $props();
</script>

<nav>
	<a href="/" aria-current={page.url.pathname === '/'}>home</a>
	<a href="/blog" aria-current={page.url.pathname === '/blog'}>blog</a>
	<a href="/errors/expected">expected error</a>
	<a href="/errors/unexpected">unexpected error</a>
	<a href="/redirect">redirect</a>
	{#if navigating.to}
		navigating to {navigating.to.url.pathname}
	{/if}
</nav>

{@render children()}
