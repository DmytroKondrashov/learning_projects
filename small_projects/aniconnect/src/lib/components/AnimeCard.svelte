<script lang="ts">
	import type Anime from '$lib/interfaces/Anime';

	interface Props extends Record<string, unknown> {
		anime: Anime;
		class: string;
	}

	let { anime, class: className }: Props = $props();
</script>

<a class={['card', className]} href="/{anime.id}">
	<div class="card-image">
		<figure class="image">
			<img src={anime.poster.mainUrl} alt="Placeholder image" />
		</figure>
	</div>
	<div class="p-2 is-flex is-flex-direction-column is-align-items-center">
		<p class="is-5 has-text-centered title">{anime.name}</p>
		<p class="is-6 has-text-centered subtitle">{anime.russian}</p>

		<!-- <div class="content" style="text-overflow: ellipsis; max-height: 300px; overflow: hidden;">
      {@html anime.descriptionHtml}
    </div> -->
	</div>
</a>
