<script lang="ts">
	import FullScreenshot from '$lib/components/FullScreenshot.svelte';
	import type Anime from '$lib/interfaces/Anime';
	import type { PageData } from '../$types';

	let { data }: { data: PageData } = $props();

	let visible = $state(null);

	const permittedFieldsList = ['name', 'genres', 'descriptionHtml', 'screenshots', 'videos', ];

	const fieldNames: Record<typeof permittedFieldsList[number], string> = {
		name: '',
		genres: '',
		studios: 'Studios',
		videos: 'Videos',
		screenshots: 'Screenshots',
		descriptionHtml: ''
	}
</script>

{#snippet valueFormatter(key: string, value: unknown)}
	{#if key === 'name'}
		<span class='title'>{value}</span>
	{:else if key === 'genres'}
		{@const genres = value as Anime['genres']}
		{#each genres as { id, name, russian } (id)}
			<span class="tag is-light mr-2">{russian}</span>
		{/each}
	{:else if key === 'videos'}
		{@const videos = value as Anime['videos']}
		<div class="is-flex is-flex-wrap-nowrap is-flex-direction-row" style="overflow-x: scroll;">
			<!-- TODO: show imageUrl thumbnail and "full" video on click -->
			{#each videos as { id, playerUrl, imageUrl } (id)}
				{#if playerUrl.includes('youtube.com')}
					<iframe class="mr-2" src={playerUrl.replace('watch?v=', 'embed/')} 
					frameborder="0" allowfullscreen loading="lazy" title="Anime Video"></iframe>
				{/if}
			{/each}
		</div>
	{:else if key === 'screenshots'}
			<!-- TODO: show  "full" image on click -->
		{@const screenshots = value as Anime['screenshots']}
		<div class="is-flex is-flex-wrap-nowrap is-flex-direction-row" style="overflow-x: scroll;">
			{#each screenshots as { id, x332Url, originalUrl } (id)}
				<img class="mr-2" src={x332Url} loading="lazy" alt="Anime Screenshot" onclick={() => visible = id} />
				<FullScreenshot src={originalUrl} alt="Anime Screenshot" visible={visible === id} onclick={() => visible = null} />
			{/each}
		</div>
	{:else if key === 'descriptionHtml'}
		<span>{@html value}</span>
	{:else}
		<span>{value}</span>
	{/if}
{/snippet}

<dl>
	{#each permittedFieldsList as key}
		{#if permittedFieldsList.includes(key)}
			<dt class="mt-4 subtitle is-capitalized">
				{fieldNames[key]}
			</dt>
			<dd>{@render valueFormatter(key, data.anime[key])}</dd>
		{/if}
	{/each}
</dl>
