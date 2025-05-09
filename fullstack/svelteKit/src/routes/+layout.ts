import { Client, cacheExchange, fetchExchange } from '@urql/svelte';

export default function load() {
  const client = new Client({
    url: 'http://localhost:3000/graphql',
    exchanges: [cacheExchange, fetchExchange],
  });

  return {
    client
  }
}