<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function PinTask() {
        dispatch("onPinTask", {
            id: task.id,
        });
    }

    function ArchiveTask() {
        dispatch("onArchiveTask", {
            id: task.id,
        });
    }

    export let task = {
        id: "",
        title: "",
        state: "",
        updatedAt: new Date(2021, 0, 1, 9, 0),
    };

    $: isChecked = task.state === "TASK_ARCHIVED";
</script>

<div class="list-item {task.state}">
    <label class="checkbox">
        <input type="checkbox" checked={isChecked} disabled name="checked" />
        <span class="checkbox-custom" on:click={ArchiveTask} />
    </label>
    <div class="title">
        <input
            type="text"
            value={task.title}
            readonly
            placeholder="Input title"
        />
    </div>
    <div class="actions">
        {#if task.state !== "TASK_ARCHIVED"}
            <a href="/" on:click|preventDefault={PinTask}>
                <span class="icon-star" />
            </a>
        {/if}
    </div>
</div>
