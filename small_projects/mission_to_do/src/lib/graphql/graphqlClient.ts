import { createClient } from '@urql/svelte';

export const client = createClient({
  url: '/graphql',
  fetchOptions: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }
});
