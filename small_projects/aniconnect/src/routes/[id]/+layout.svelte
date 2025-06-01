<script lang="ts">
	import type Anime from '$lib/interfaces/Anime';
	import { getAnime } from '$lib/queries/getAnime.js';
	import urql from '$lib/urql.js';
	import { onMount, type Snippet } from 'svelte';
	import type { PageData } from '../$types';

	interface Props extends Record<string, unknown> {
		data: PageData;
		children: Snippet;
	}

	let { data, children }: Props = $props();
</script>

<!-- TODO: make an array of fields to show on the left -->
<ul>
	{#if data.loading}
		<span>Loading...</span>
	{:else if data.anime}
		<div class="fixed-grid has-4-cols">
			<div class="grid">
				<div class="cell">
					<figure class="image">
						<img src={data.anime.poster.mainUrl} alt="Placeholder image" />
					</figure>
				</div>
				<div class="cell is-col-span-3">
					{@render children?.()}
				</div>
			</div>
		</div>
	{:else}
		<span>Anime not found</span>
	{/if}
</ul>

{#if data.errors.length > 0}
	<ul>
		{#each data.errors as error}
			<li>{error}</li>
		{/each}
	</ul>
{/if}
