<script lang="ts">
	import urql from '$lib/urql';
	import { setContextClient, gql } from '@urql/svelte';
	import { onMount } from 'svelte';
	import { getAnimeList } from '$lib/queries/getAnimeList';
	import AnimeCard from '$lib/components/AnimeCard.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { page, limit } from '$lib/stores';
	import type Anime from '$lib/interfaces/Anime';
	setContextClient(urql);

	let animes = $state<Anime[]>([]);
	let errors = $state<string[]>([]);
	let loading = $state(false);

	async function fetchAnimes(variables: { limit: number, page: number }) {
		loading = true;
		const { data, error } = await urql.query(getAnimeList, variables).toPromise();

		if (data?.animes) {
			animes = data.animes;
		}

		if (error?.message) {
			errors.push(error.message);
		}

		loading = false;
	}

	$effect(() => {
		fetchAnimes({ limit: $limit, page: $page });
	});
</script>

<div class="mb-6 is-flex is-justify-content-center">
	<div class="field has-addons p-2" style="width: 100%; max-width: 600px;">
		<p class="control" style="flex-grow: 1;">
			<input class="input" type="text" placeholder="Find your anime" style="width: 100%;" />
		</p>
		<p class="control">
			<button class="button">Search</button>
		</p>
	</div>
</div>
<ul>
	{#if loading}
		<span>Loading...</span>
	{:else if animes}
		<section class="fixed-grid has-4-cols">
			<div class="grid">
				{#each animes as anime}
					<AnimeCard class="cell" {anime} />
				{:else}
					<span>No animes found</span>
				{/each}
			</div>
		</section>
	{:else}
		<span>No animes found</span>
	{/if}
</ul>

{#if errors.length > 0}
	<ul>
		{#each errors as error}
			<li>{error}</li>
		{/each}
	</ul>
{/if}

<Pagination />
