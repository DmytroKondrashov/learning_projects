<script>
	import urql from '$lib/urql';
	import { setContextClient, gql } from '@urql/svelte';
	import { onMount } from 'svelte';
	import { getAnimeList } from '$lib/queries/getAnimeList';

	setContextClient(urql);

	let animes = $state([]);
	let errors = $state([]);
	let loading = $state(false);

	onMount(async () => {
		console.log('onMount');
		loading = true;
		const { data, error } = await urql.query(getAnimeList, {}).toPromise();

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

<h1>Anime List</h1>
<ul>
	{#if loading}
		<li>Loading...</li>
	{:else if animes}
		{#each animes as anime}
			<li>{anime.name}</li>
		{:else}
			<li>No animes found</li>
		{/each}
	{:else}
		<li>No animes found</li>
	{/if}
</ul>

{#if errors.length > 0}
	<ul>
		{#each errors as error}
			<li>{error}</li>
		{/each}
	</ul>
{/if}
