<script lang="ts">
  import { gql } from '@urql/svelte';

  let { data } = $props();

  const query = gql`
      query getPosts($first: Int) {
  posts(first: $first) {
    id
    title
    body
    comments(first: $first) {
      id
      name
      email
      body
    }
    user {
      id
      name
      username
      email
      phone
      website
    }
  }
}
    `
</script>

{#await data.client.query(query, { first: 10}).toPromise()}
  <div>Loading...</div>
{:then { data, error }}
  {#if error }
    <div>Error: {error.message}</div>
  {/if}
  <pre>{JSON.stringify(data, null, 2)}</pre>
{:catch error}
  <div>Error: {error.message}</div>
{/await}