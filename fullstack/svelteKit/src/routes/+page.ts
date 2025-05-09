import { Client, cacheExchange, fetchExchange } from '@urql/svelte';

export default function load() {
  const client = new Client({
    url: 'https://spacex-production.up.railway.app/',
    exchanges: [cacheExchange, fetchExchange],
  });

  return {
    client
  }
}