<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { goto } from '$app/navigation';

    let dbConfig = writable({ host: '', port: '', user: '', password: '', database: '' });
    let tables = writable<string[]>([]);
    let connectionStatus = writable('');

    function setCookie(name: string, value: string, days = 7) {
        const expires = new Date();
        expires.setDate(expires.getDate() + days);
        const cookieString = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
        document.cookie = cookieString;
        console.log('Setting cookie:', cookieString);
        console.log('Current cookies:', document.cookie);
    }

    function getCookie(name: string) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) {
                return decodeURIComponent(c.substring(nameEQ.length, c.length));
            }
        }
        return null;
    }

    async function loadConfigFromCookie() {
        const storedConfig = getCookie('dbConfig');
        if (storedConfig) {
            dbConfig.set(JSON.parse(storedConfig));
        }
    }

    async function connectToDatabase() {
        connectionStatus.set('Connecting...');
        try {
            const response = await fetch('/api/connect', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify($dbConfig)
            });

            const data = await response.json();
            if (data.success) {
                connectionStatus.set('Connected');
                tables.set(data.tables);
                setCookie('dbConfig', JSON.stringify($dbConfig));
            } else {
                connectionStatus.set('Failed to connect');
            }
        } catch (error) {
            connectionStatus.set('Error connecting to database');
            console.error(error);
        }
    }

    function navigateToTable(table: string) {
        goto(`/table/${table}`);
    }

    onMount(loadConfigFromCookie);
</script>

<main class="p-4">
    <h1 class="text-xl font-bold">Connect to PostgreSQL</h1>

    <div class="mt-4 space-y-2">
        <input bind:value={$dbConfig.host} placeholder="Host" class="border p-2 w-full" />
        <input bind:value={$dbConfig.port} placeholder="Port" class="border p-2 w-full" />
        <input bind:value={$dbConfig.user} placeholder="User" class="border p-2 w-full" />
        <input type="password" bind:value={$dbConfig.password} placeholder="Password" class="border p-2 w-full" />
        <input bind:value={$dbConfig.database} placeholder="Database" class="border p-2 w-full" />
        <button on:click={connectToDatabase} class="bg-blue-500 text-white p-2 rounded">Connect</button>
    </div>

    <p class="mt-2 text-gray-600">Status: {$connectionStatus}</p>

    {#if $tables.length > 0}
        <h2 class="mt-4 text-lg font-semibold">Tables</h2>
        <ul class="mt-2 space-y-1">
            {#each $tables as table}
                <li class="border p-2 rounded cursor-pointer text-blue-600" on:click={() => navigateToTable(table)}>{table}</li>
            {/each}
        </ul>
    {/if}
</main>
