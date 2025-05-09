<script lang="ts">
  import { gql } from '@urql/svelte';

  let { data } = $props();

  const query = gql`
      query Dragons {
        dragons {
          name
          first_flight
          diameter {
            feet
          }
          launch_payload_mass {
            lb
          }
        }
}
    `
</script>

{#await data.client.query(query, { }).toPromise()}
  <div>Loading...</div>
{:then { data, error }}
  {#if error }
    <div>Error: {error.message}</div>
  {/if}
  <pre>{JSON.stringify(data, null, 2)}</pre>
{:catch error}
  <div>Error: {error.message}</div>
{/await}