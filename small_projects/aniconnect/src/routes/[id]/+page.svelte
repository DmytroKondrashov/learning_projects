<script lang="ts">
	import type Anime from '$lib/interfaces/Anime';
	import type { PageData } from '../$types';

	let { data }: { data: PageData } = $props();

	// TODO: make an array of fields to show on the right
	const omittedFields = new Set(['id', 'poster', 'kind', 'rating', '__typename', 'synonyms']);
</script>

{#snippet valueFormatter(key: string, value: unknown)}
	{#if key === 'genres'}
		{@const genres = value as Anime['genres']}
		<span>{genres.map(({ russian }) => russian).join(', ')}</span>
	{:else if key === 'studios'}
		{@const studios = value as Anime['studios']}
		<span>{studios.map(({ name }) => name).join(', ')}</span>
	{:else if key === 'videos'}
		<!-- TODO: find and clear broken videos -->
		{@const videos = value as Anime['videos']}
		<div class="is-flex is-flex-wrap-nowrap is-flex-direction-row" style="overflow-x: scroll;">
			{#each videos as { id, playerUrl, imageUrl } (id)}
				{#if !playerUrl.includes('vk.com')}
					<video class="mr-2" src={playerUrl} poster={imageUrl} controls></video>
				{/if}
			{/each}
		</div>
	{:else if key === 'screenshots'}
		{@const screenshots = value as Anime['screenshots']}
		<div class="is-flex is-flex-wrap-nowrap is-flex-direction-row" style="overflow-x: scroll;">
			{#each screenshots as { id, x332Url } (id)}
				<img class="mr-2" src={x332Url} />
			{/each}
		</div>
	{:else if key === 'descriptionHtml'}
		<span>{@html value}</span>
	{:else}
		<span>{value}</span>
	{/if}
{/snippet}

<dl>
	{#each Object.entries(data.anime) as [key, value]}
		{#if !omittedFields.has(key)}
			<dt class="mt-4 subtitle is-capitalized">
				{key !== 'descriptionHtml' ? key : 'Description'}
			</dt>
			<dd>{@render valueFormatter(key, value)}</dd>
		{/if}
	{/each}
</dl>
