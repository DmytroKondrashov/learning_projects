<script>
  import { onMount } from 'svelte';
  let posts = [];
  let loading = true;

  async function fetchPosts() {
    try {
      const response = await fetch('http://localhost:5000/api/posts');
      posts = await response.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      loading = false;
    }
  }

  onMount(fetchPosts);
</script>

<main class="container">
  <h1>Telegram Posts</h1>
  {#if loading}
    <p>Loading...</p>
  {:else}
    {#if posts.length === 0}
      <p>No posts available.</p>
    {:else}
      <ul>
        {#each posts as post}
          <li>{post.text}</li>
        {/each}
      </ul>
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
</style>
