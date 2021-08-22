<script>
    import MainMenuEntry from "./MainMenuEntry.svelte";

    export let items = [];
</script>

{#each items as item}
    <MainMenuEntry label={item} />
{/each}
