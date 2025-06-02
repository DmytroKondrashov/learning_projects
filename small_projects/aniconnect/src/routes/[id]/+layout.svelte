<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import type { PageData } from '../$types';

	interface Props extends Record<string, unknown> {
		data: PageData;
		children: Snippet;
	}

	let { data, children }: Props = $props();
	data.anime = { poster: data.anime.poster, ...data.anime };
	const permittedFields = new Set(['poster', 'name', 'russian', 'english', 'japanese', 'episodes']);
</script>

<ul>
	{#if data.loading}
		<span>Loading...</span>
	{:else if data.anime}
		<div class="fixed-grid has-4-cols">
			<div class="grid">
				<div class="cell">
					{#each Object.entries(data.anime) as [key, value]}
						{#if permittedFields.has(key)}
							{#if key === 'poster'}
								<figure class="image mb-4">
									<img src={value.mainUrl} alt="Placeholder image" />
								</figure>
							{:else}
								<div class="is-flex is-flex-direction-column">
									<span class="mb-2"><b class="is-capitalized">{key}:</b> {value}</span>
								</div>
							{/if}
						{/if}
					{/each}
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
