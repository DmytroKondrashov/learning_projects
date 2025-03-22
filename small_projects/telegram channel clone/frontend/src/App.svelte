<script>
  import { onMount } from 'svelte';

  let posts = [];
  let loading = false;
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

<main class="container">
  <h1>Inkvi's Daily Life</h1>
  {#if loading}
    <p>Loading...</p>
  {:else}
    {#if posts.length === 0}
      <p>No posts available.</p>
    {:else}
      <ul>
        {#each posts as post}
          <li>
            {#if post.text}
              <p>{post.text}</p>
            {/if}
            {#if post.photoUrl}
              <img src={post.photoUrl} alt="Post Image" class="post-image" />
            {/if}
            {#if post.caption}
              <i>{post.caption}</i>
            {/if}
          </li>
        {/each}
      </ul>
      <div class="pagination">
        <button on:click={prevPage} disabled={offset === 0}>Previous</button>
        <span class="page-info">Page {offset / limit + 1} of {Math.ceil(total / limit)}</span>
        <button on:click={nextPage} disabled={offset + limit >= total}>Next</button>
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
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    background: #f4f4f4;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
  }
  .pagination {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page-info {
    margin: 0 10px;
  }

  h1 {
    width: 100%;
    text-align: center;
  }
</style>
