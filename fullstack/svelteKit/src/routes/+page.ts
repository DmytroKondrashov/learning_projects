import { Client, cacheExchange, fetchExchange } from '@urql/svelte';

export function load() {
  const client = new Client({
    url: 'https://graphqlplaceholder.vercel.app/graphql',
    exchanges: [cacheExchange, fetchExchange],
  });

  return {
    client
  }
}