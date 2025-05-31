<script lang="ts">
	import type Anime from "$lib/interfaces/Anime";

  let { anime }: { anime: Anime } = $props();
</script>

<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img
        src={anime.poster.mainUrl}
        alt="Placeholder image"
      />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{anime.name}</p>
        <p class="subtitle is-6">{anime.russian}</p>
      </div>
    </div>

    <div class="content" style:text-overflow="ellipsis">
      {anime.description}
    </div>
  </div>
</div>
