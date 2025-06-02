<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import type { PageData } from '../$types';

	interface Props extends Record<string, unknown> {
		data: PageData;
		children: Snippet;
	}

	let { data, children }: Props = $props();
	data.anime = { poster: data.anime.poster, ...data.anime };

	const permittedFields = ['poster', 'name', 'russian', 'english', 'japanese', 'episodes', 'studios'];

	const fieldNames: Record<typeof permittedFields[number], string> = {
		poster: '',
		name: 'Name',
		russian: 'Russian',
		english: 'English',
		japanese: 'Japanese',
		episodes: 'Episodes',
		studios: 'Studios',
	}
</script>

<ul>
	{#if data.loading}
		<span>Loading...</span>
	{:else if data.anime}
		<div class="fixed-grid has-4-cols">
			<div class="grid">
				<div class="cell">
					{#each permittedFields as key}
						{#if key === 'poster'}
							<figure class="image mb-4">
								<img src={data.anime[key].mainUrl} alt="Placeholder image" />
							</figure>
						{:else if key === 'studios'}
							{@const studios = data.anime[key] as Anime['studios']}
							<span class="mb-2"><b class="is-capitalized">{fieldNames[key]}:</b> {studios.map(({ name }) => name).join(', ')}</span>
						{:else}
							<div class="is-flex is-flex-direction-column">
								<span class="mb-2"><b class="is-capitalized">{fieldNames[key]}:</b> {data.anime[key]}</span>
							</div>
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
