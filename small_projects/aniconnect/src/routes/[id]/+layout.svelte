<script lang="ts">
	import { getAnime } from '$lib/queries/getAnime.js';
	import urql from '$lib/urql.js';
	import { onMount, type Snippet } from 'svelte';

  let { data, children }: { data: { id: string }, children: Snippet<[content: Record<string, any>]> } = $props();

  let loading = $state(false);
  let errors = $state([]);
  let anime = $state(null);
  let { id } = data;

  onMount(async () => {
    loading = true;
		const { data, error } = await urql.query(getAnime, { id }).toPromise();

		if (data?.animes) {
			anime = data?.animes[0];
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
	{:else if anime}
  {@const content = Object.entries(anime)}
  {console.log(content)}
  <div class="fixed-grid has-4-cols">
		<div class="grid ">
      <div class="cell">
        <figure class="image">
          <img
            src={anime.poster.mainUrl}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="cell is-col-span-3">
        {@render children?.(content)}
      </div>
    </div>
  </div>
	{:else}
		<span>Anime not found</span>
	{/if}
</ul>

{#if errors.length > 0}
	<ul>
		{#each errors as error}
			<li>{error}</li>
		{/each}
	</ul>
{/if}
