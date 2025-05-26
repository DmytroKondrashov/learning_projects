import { cacheExchange, createClient, fetchExchange } from '@urql/svelte';

export const client = createClient({
  url: '/graphql',
  fetchOptions: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  },
  exchanges: [
    fetchExchange
  ]
});
