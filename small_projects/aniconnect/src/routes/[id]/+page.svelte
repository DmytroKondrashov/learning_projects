<script lang="ts">
	import type Anime from '$lib/interfaces/Anime';
	import type { PageData } from '../$types';

	let { data }: { data: PageData } = $props();

	const permittedFields = new Set(['genres', 'studios', 'videos', 'screenshots', 'descriptionHtml']);
</script>

{#snippet valueFormatter(key: string, value: unknown)}
	{#if key === 'genres'}
		{@const genres = value as Anime['genres']}
		{#each genres as { id, name, russian } (id)}
			<span class="tag is-light mr-2">{russian}</span>
		{/each}
	{:else if key === 'studios'}
		{@const studios = value as Anime['studios']}
		<span>{studios.map(({ name }) => name).join(', ')}</span>
	{:else if key === 'videos'}
		{@const videos = value as Anime['videos']}
		<div class="is-flex is-flex-wrap-nowrap is-flex-direction-row" style="overflow-x: scroll;">
			{#each videos as { id, playerUrl, imageUrl } (id)}
				{#if !playerUrl.includes('vk.com') && !playerUrl.includes('video.sibnet.ru')}
					<iframe class="mr-2" src={playerUrl.replace('watch?v=', 'embed/')} frameborder="0" allowfullscreen></iframe>
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
		{#if permittedFields.has(key)}
			<dt class="mt-4 subtitle is-capitalized">
				{key !== 'descriptionHtml' ? key : 'Description'}
			</dt>
			<dd>{@render valueFormatter(key, value)}</dd>
		{/if}
	{/each}
</dl>
