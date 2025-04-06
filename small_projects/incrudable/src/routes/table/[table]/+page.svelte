<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    let tableName = writable('');
    let endpoints = writable({ create: false, getAll: false, getById: false, update: false, delete: false });

    onMount(() => {
        const table = $page.params.table;
        tableName.set(table);
    });

    async function toggleEndpoint(type: string) {
        try {
            endpoints.update(ep => ({ ...ep, [type]: !ep[type] }));
            
            const response = await fetch(`/api/table/${$tableName}/endpoint`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    type, 
                    enabled: $endpoints[type] 
                })
            });
            
            const data = await response.json();
            if (!data.success) {
                // Revert the toggle if the server request failed
                endpoints.update(ep => ({ ...ep, [type]: !ep[type] }));
                console.error('Failed to update endpoint:', data.error);
            }
        } catch (error) {
            // Revert the toggle if there was an error
            endpoints.update(ep => ({ ...ep, [type]: !ep[type] }));
            console.error('Error updating endpoint:', error);
        }
    }
</script>

<main class="p-4">
    <h1 class="text-xl font-bold">Table: {$tableName}</h1>
    
    <div class="mt-4 space-y-2">
        <label class="flex items-center space-x-2">
            <input type="checkbox" bind:checked={$endpoints.create} on:change={() => toggleEndpoint('create')} />
            <span>Create Endpoint</span>
        </label>
        <label class="flex items-center space-x-2">
            <input type="checkbox" bind:checked={$endpoints.getAll} on:change={() => toggleEndpoint('getAll')} />
            <span>Get All Endpoint</span>
        </label>
        <label class="flex items-center space-x-2">
            <input type="checkbox" bind:checked={$endpoints.getById} on:change={() => toggleEndpoint('getById')} />
            <span>Get By ID Endpoint</span>
        </label>
        <label class="flex items-center space-x-2">
            <input type="checkbox" bind:checked={$endpoints.update} on:change={() => toggleEndpoint('update')} />
            <span>Update Endpoint</span>
        </label>
        <label class="flex items-center space-x-2">
            <input type="checkbox" bind:checked={$endpoints.delete} on:change={() => toggleEndpoint('delete')} />
            <span>Delete Endpoint</span>
        </label>
    </div>
</main>
