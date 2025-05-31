<script>
  import urql from '$lib/urql';
  import { setContextClient, gql } from '@urql/svelte';
	import { onMount } from 'svelte';
	import { getAnimeList } from '$lib/queries/getAnimeList';

  setContextClient(urql);

  let animes = $state([]);
  let errors = $state([]);
  let introspection = $state(null);

  onMount(async () => {
    console.log('onMount');
    const { data, error } = await urql.query(getAnimeList, {}).toPromise();

    if (data?.animes) {
      console.log(data);
      animes = data.animes;
    }

    if (error?.message) {
      errors.push(error.message);
    }
  });
</script>

<h1>Anime List</h1>
<ul>
  {#if animes}
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
