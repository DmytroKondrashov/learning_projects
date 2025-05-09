import { Client, cacheExchange, fetchExchange } from '@urql/svelte';

export default function load() {
  const client = new Client({
    url: 'https://beta.pokeapi.co/graphql/v1beta',
    exchanges: [cacheExchange, fetchExchange],
  });

  return {
    client
  }
}