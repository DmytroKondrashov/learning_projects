<script lang="ts">
	import type Anime from '$lib/interfaces/Anime';
  import type { PageData } from '../$types';

  let { data }: { data: PageData } = $props();
</script>

{#snippet valueFormatter(key: string, value: unknown)}
  {#if key === 'genres'}
    {@const genres = value as Anime['genres']}
    <span>{genres.map(({ russian }) => russian).join(', ')}</span>
  {:else if key === 'studios'}
    {@const studios = value as Anime['studios']}
    <span>{studios.map(({ name }) => name).join(', ')}</span>
  {:else if key === 'videos'}
    {@const videos = value as Anime['videos']}
    {#each videos as { id, url, name, kind, playerUrl, imageUrl } (id)}
      <span>{name} - {kind} - {playerUrl} - {imageUrl}</span>
    {/each}
  {:else if key === 'screenshots'}
    {@const screenshots = value as Anime['screenshots']}
    {#each screenshots as { id, originalUrl, x166Url, x332Url } (id)}
      <span>{originalUrl} - {x166Url} - {x332Url}</span>
    {/each}
  {:else if key === 'descriptionHtml'}
    <span>{@html value}</span>
  {:else}
    <span>{value}</span>
  {/if}
{/snippet}

<dl>
  {#each Object.entries(data.anime) as [key, value]}
    {#if key !== 'poster'}
      <dt>{key}</dt>
      <dd>{@render valueFormatter(key, value)}</dd>
    {/if}
  {/each}
</dl>
