<script>
	import urql from '$lib/urql';
	import { setContextClient, gql } from '@urql/svelte';
	import { onMount } from 'svelte';
	import { getAnimeList } from '$lib/queries/getAnimeList';
	import AnimeCard from '$lib/components/AnimeCard.svelte';

	setContextClient(urql);

	let animes = $state([]);
	let errors = $state([]);
	let loading = $state(false);

	onMount(async () => {
		console.log('onMount');
		loading = true;
		const { data, error } = await urql.query(getAnimeList, { limit: 12 }).toPromise();

		if (data?.animes) {
			console.log(data);
			animes = data.animes;
		}

		if (error?.message) {
			errors.push(error.message);
		}

		loading = false;
	});
</script>

<ul>
	{#if loading}
		<span>Loading...</span>
	{:else if animes}
		<section class="fixed-grid has-4-cols">
      <div class="grid">
			{#each animes as anime}
				<AnimeCard class='cell' {anime} />
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
