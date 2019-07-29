<script>
    import {
        Button
    } from 'svelma'
    import { onMount } from 'svelte';

    const onDeleteAll = function () {
        const response = fetch('api/images', {
            method: 'DELETE'
        });
    }

    let images = [];

    // Here will load the list of images
    onMount(async () => {
        const response = await fetch('api/images/list');
        images = await response.json();
    });
</script>


<h2 class="subtitle">Download Pictures</h2>

<div class="level">
    <div class="level-left">
        <div class="level-item">
            <Button type="is-link" tag="a" href="/api/images/all">Download All</Button>
        </div>
        <div class="level-item">
            <Button type="is-danger" on:click={onDeleteAll}>Delete All</Button>
        </div>
    </div>
</div>

<div id="grid" class="columns is-multiline">

    <!-- Foreach loop here -->
</div>