<svelte:head>
    <link rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined">
</svelte:head>

<script>
    export let nome
    export let handler = () => {};
    export let color = "green"
</script>

<span class="material-icons-outlined icon" on:click={handler} style="--color:{color};">
    {nome}
</span>

<style>
    .icon {
        color: var(--color);
        font-size: 32px;
    }

    .icon:hover {
        cursor: pointer;
    }
</style>