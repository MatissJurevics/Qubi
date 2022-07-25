<script>
    let collections = [
        "test",
        "boop"
    ]
</script>

<main>
    <h1>Collections</h1>
    <ul>
        {#each collections as collection}
             <li>{collection}</li>
        {/each}
    </ul>
</main>