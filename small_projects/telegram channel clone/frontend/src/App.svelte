<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
>

<script>
  import { onMount } from 'svelte';

  let posts = [];
  let loading = true;
  let limit = 20;
  let offset = 0;
  let total = 0;

  async function fetchPosts() {
    try {
      const response = await fetch(`http://localhost:5000/api/posts?limit=${limit}&offset=${offset}`);
      const data = await response.json();
      posts = data.posts;
      console.log(posts);
      total = data.total;
    } catch (error) {
      console.error('Error fetching posts:', error);
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

  onMount(fetchPosts);
</script>

<main class="py-6">
  <h1 class="title is-2 has-text-centered has-text-primary">Inkvi's Daily Life</h1>
  {#if loading}
    <div class="loader is-loading"></div>
  {:else}
    {#if posts.length === 0}
      <div class="notification is-warning">No posts available.</div>
    {:else}
      {#each posts as post}
        <div class="box is-max-desktop">
          <div class="media">
            <div class="media-content">
              {#if post.photoUrl}
                <figure class="image is-4by3">
                  <img src={post.photoUrl} alt="Post Image" />
                </figure>
              {/if}
              {#if post.caption}
                <p><strong>Caption:</strong> {post.caption}</p>
              {/if}
            </div>
            {#if post.text}
              <hr />
              <p class="content">{post.text}</p>
            {/if}
          </div>
        </div>
      {/each}
      <div class="buttons is-centered">
        <button class="button is-link" on:click={prevPage} disabled={offset === 0}>Previous</button>
        <button class="button is-link" on:click={nextPage} disabled={offset + limit >= total}>Next</button>
      </div>
    {/if}
  {/if}
</main>

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
</style>
