import { Client, cacheExchange, fetchExchange } from '@urql/svelte';

const urql = new Client({
	url: 'https://shikimori.one/api/graphql',
	exchanges: [cacheExchange, fetchExchange]
});

export default urql;
