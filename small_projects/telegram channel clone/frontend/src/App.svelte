
<script>
  import { onMount } from "svelte";

  let posts = [];
  let loading = true;
  let limit = 20;
  let offset = 0;
  let total = 0;
  
  let showModal = false;
  let modalImage = "";

  async function fetchPosts() {
    try {
      const response = await fetch(
        `http://localhost:5000/api/posts?limit=${limit}&offset=${offset}`
      );
      const data = await response.json();
      posts = data.posts;
      total = data.total;
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      loading = false;
    }
  }

  function nextPage() {
    if (offset + limit < total) {
      offset += limit;
      fetchPosts();
    }
  }

  function prevPage() {
    if (offset > 0) {
      offset -= limit;
      fetchPosts();
    }
  }

  function openModal(imageUrl) {
    modalImage = imageUrl;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
    modalImage = "";
  }

  onMount(fetchPosts);
</script>

<main class="py-6">
  <h1 class="title is-2 has-text-centered has-text-primary">
    Inkvi's Daily Life
  </h1>
  {#if loading}
    <div class="loader is-loading"></div>
  {:else}
    {#if posts.length === 0}
      <div class="notification is-warning">No posts available.</div>
    {:else}
      {#each posts as post}
        <div class="box is-max-desktop mb-6">
          <div>
            {#if post.photo_url && post.photo_url.length > 0}
              <div class="image-gallery">
                {#each post.photo_url as imageUrl}
                  <figure class="image" on:click={() => openModal(imageUrl)}>
                    <img src={imageUrl} alt="Post Image" />
                  </figure>
                {/each}
              </div>
            {/if}
            {#if post.photo_url?.length > 0 && post.caption}
              <hr />
            {/if}
            {#if post.caption}
              <i>{post.caption}</i>
            {/if}
            {#if post.caption && post.text}
              <hr />
            {/if}
            {#if post.text}
              <p class="content">{post.text}</p>
            {/if}
          </div>
        </div>
      {/each}
      <div class="buttons is-centered">
        <button class="button is-link" on:click={prevPage} disabled={offset === 0}>
          Previous
        </button>
        <button class="button is-link" on:click={nextPage} disabled={offset + limit >= total}>
          Next
        </button>
      </div>
    {/if}
  {/if}
</main>

{#if showModal}
  <div class="modal is-active">
    <div class="modal-background" on:click={closeModal}></div>
    <div class="modal-content">
      <figure class="image">
        <img src={modalImage} alt="Full-size Image" />
      </figure>
    </div>
    <button class="modal-close is-large" aria-label="close" on:click={closeModal}></button>
  </div>
{/if}

<style>
  .container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  h1 {
    width: 100%;
    text-align: center;
  }

  .box {
    max-width: 600px;
    margin: auto;
  }

  .image img {
    max-height: 600px;
    width: auto;
    margin: 0 auto;
    object-fit: contain;
  }

  .image-gallery {
    display: grid;
    grid-gap: 10px;
    margin-bottom: 1rem;
  }

  .image-gallery:has(> :nth-child(1):nth-last-child(1)) {
    /* Single image */
    grid-template-columns: 1fr;
  }

  .image-gallery:has(> :nth-child(1):nth-last-child(2)) {
    /* Two images */
    grid-template-columns: repeat(2, 1fr);
  }

  .image-gallery:has(> :nth-child(1):nth-last-child(n+3)) {
    /* Three or more images */
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .image-gallery .image {
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
  }

  .image-gallery .image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s;
  }

  .image-gallery .image:hover img {
    transform: scale(1.05);
  }

  /* Modal Styling */
  .modal-content {
    max-width: 90%;
    max-height: 90vh;
    text-align: center;
  }

  .modal-content img {
    max-width: 100%;
    max-height: 90vh;
    border-radius: 8px;
  }
</style>
