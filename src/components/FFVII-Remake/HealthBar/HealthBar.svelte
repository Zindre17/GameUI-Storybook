<script>
    import { onMount } from "svelte";

    export let label = "Cloud";
    export let primaryMax = 100;
    export let primaryCurrent = 100;
    export let secondaryMax = 100;
    export let secondaryCurrent = 100;

    let primaryPadCount =
        primaryMax.toString().length - primaryCurrent.toString().length;

    let secondaryPadCount =
        secondaryMax.toString().length - secondaryCurrent.toString().length;

    let primaryFill;
    let secondaryFill;

    onMount(() => {
        let primaryBox = primaryFill.parentElement.getBoundingClientRect();
        primaryFill.style.width = `${(primaryCurrent / primaryMax) * 100}%`;
        primaryFill.style.backgroundImage = `linear-gradient(
            90deg, 
            rgb(158, 206, 158),
            rgb(220, 241, 220) ${primaryBox.width}px
        )`;

        let secondaryBox = secondaryFill.parentElement.getBoundingClientRect();
        secondaryFill.style.width = `${
            (secondaryCurrent / secondaryMax) * 100
        }%`;
        secondaryFill.style.backgroundImage = `linear-gradient(
            90deg,
            rgb(230, 207, 250),
            rgb(188, 128, 206) ${secondaryBox.width}px
        )`;
    });
</script>

<div class="container">
    <div class="background">
        <div class="inner" />
    </div>
    <div class="label">{label}</div>
    <div class="primary">
        <span>HP</span>
        <pre>{"".padEnd(primaryPadCount)}</pre>
        {primaryCurrent}<span>/{primaryMax}</span>
        <div class="bar">
            <div class="fill" bind:this={primaryFill} />
        </div>
    </div>
    <div class="secondary">
        <span>MP</span>
        <pre>{"".padEnd(secondaryPadCount)}</pre>
        {secondaryCurrent}
        <div class="bar">
            <div class="fill" bind:this={secondaryFill} />
        </div>
    </div>
</div>

<style>
    .container {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        position: relative;
        display: flex;
        height: 3rem;
        padding: 0.2rem 1rem;
        box-shadow: rgba(0, 0, 0, 0.384) 0 0 3px 1px;
    }

    .container :not(.background) {
        z-index: 1;
    }

    .label {
        position: absolute;
        left: 0px;
        top: 0px;
        right: 30%;
        font-size: 1.4rem;
        background-image: linear-gradient(
            90deg,
            rgba(50, 123, 218, 0.815),
            transparent
        );
        color: white;
        padding-left: 5px;
        text-shadow: 4px -1px rgba(47, 44, 88, 0.521);
    }

    .primary,
    .secondary {
        font-size: 1.5rem;
        font-family: sans-serif monospace;
        color: rgb(218, 218, 218);
        text-shadow: 2px -1px rgba(0, 0, 0, 0.445);
        position: relative;
        margin: 0;
        padding: 0;
        white-space: nowrap;
    }

    pre {
        display: inline;
        font-size: 1.5rem;
        font-family: sans-serif monospace;
    }

    .primary :first-child,
    .secondary :first-child {
        color: rgb(62, 180, 226);
        font-size: 1.1rem;
    }

    .primary {
        flex: 15;
        text-align: right;
    }

    .primary span,
    .secondary span {
        font-size: 1.1rem;
    }

    .secondary {
        flex: 5;
        text-align: center;
        margin-left: 20px;
    }

    .bar {
        height: 5px;
        background-color: rgb(66, 45, 45);
        margin-top: -3px;
        box-shadow: black 0 0 1px 1px;
        position: relative;
    }

    .fill {
        height: 5px;
        position: absolute;
        left: 0;
    }

    .bar::before,
    .bar::after {
        content: "";
        position: absolute;
        left: -2px;
        width: 2px;
        height: 7px;
        z-index: 2;
        background-color: rgb(177, 177, 177);
        border-radius: 1px;
        transform: translateY(-1px);
        border: 1px solid black;
        /* box-shadow: black 0 0 1px 1px; */
    }
    .bar::after {
        left: unset;
        right: -2px;
    }

    .background {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: transparent;
        border: 1px solid rgba(118, 145, 158, 0.671);
        border-right: none;
        padding: 2px;
        padding-right: 2px;
    }

    .background::after {
        position: absolute;
        content: "";
        right: -4px;
        top: -1px;
        bottom: -1px;
        width: 4px;
        border-radius: 1px;
        background-color: rgb(44, 161, 228);
    }

    .inner {
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
            rgba(13, 39, 63, 0.459),
            rgba(38, 71, 102, 0.136)
        );
    }
</style>
