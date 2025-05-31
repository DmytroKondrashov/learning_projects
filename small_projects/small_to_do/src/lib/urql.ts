import { Client, cacheExchange, fetchExchange } from '@urql/svelte';

const urql = new Client({
  url: 'https://anilist.co/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

export default urql;
