<script>
    export let label = "label";

    let isHover = false;

    function onEnter() {
        isHover = true;
    }
    function onLeave() {
        isHover = false;
    }
</script>

<div class="container" on:mouseenter={onEnter} on:mouseleave={onLeave} on:click>
    <div class="bar" class:hover={isHover} />
    <div class="content" class:hover={isHover}>
        <div class="label">{label}</div>
        <div class="background-bar">
            <div class="background-box" />
        </div>
    </div>
</div>

<style>
    .container {
        margin-left: 20px;
        margin-top: 5px;
        padding-left: 1px;
        border-left: 5px solid transparent;
        display: flex;
    }

    .bar {
        display: block;
        width: 5px;
        margin-right: 1px;
    }
    .bar.hover {
        background-color: white;
        box-shadow: -20px 0px 20px rgb(3, 45, 122),
            -10px 0px 10px rgb(15, 65, 158), -3px 0px 5px rgb(94, 200, 204);
    }

    .content {
        position: relative;
        padding: 0.5rem 0 0.6rem 2.5rem;
        color: lightgray;
        font-size: 2em;
        width: 100%;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
    .background-bar {
        position: absolute;
        z-index: -1;
        left: 3px;
        right: -3px;
        top: 2px;
        bottom: -2px;
        padding-left: 2px;
        border-left: 3px solid rgb(69, 132, 250);
    }
    .background-box {
        background-image: linear-gradient(
            90deg,
            rgb(6, 6, 88),
            25%,
            transparent,
            50%,
            transparent
        );
        border-image: linear-gradient(
                90deg,
                rgb(69, 132, 250),
                15%,
                transparent,
                30%,
                transparent
            )
            1;
        border-image-width: 1px;
        width: 100%;
        height: 100%;
    }

    .content.hover {
        border-image: linear-gradient(
                90deg,
                aquamarine,
                aquamarine,
                50%,
                transparent
            )
            1;
        border-image-width: 1px 0 1px 0;
        background-image: linear-gradient(
            90deg,
            rgba(79, 188, 224, 0.8),
            50%,
            rgba(8, 27, 78, 0.6),
            /* rgba(129, 198, 221, 0.8), */ transparent
        );
    }
    .hover .label {
        color: white;
        text-shadow: 0.4rem 0.1rem rgba(14, 4, 61, 0.349);
    }
</style>
