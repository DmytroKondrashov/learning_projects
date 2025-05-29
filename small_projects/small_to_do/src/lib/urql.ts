import { Client, cacheExchange, fetchExchange } from '@urql/svelte';

const urql = new Client({
  url: '/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

export default urql;
