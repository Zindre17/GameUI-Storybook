<script>
    export let button = {
        label: "Yes",
        onClick: () => {},
    };
    let isHover = false;
</script>

<div class="container">
    <div class="background" />
    <button
        class:hover={isHover}
        on:click={button.onClick}
        on:mouseenter={() => {
            isHover = true;
        }}
        on:mouseleave={() => {
            isHover = false;
        }}
    >
        {button.label}
    </button>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        position: relative;
        margin-bottom: 8px;
    }

    button {
        all: unset;
        padding: 0.4rem 0 0.4rem 0;
        font-size: 2rem;
        cursor: pointer;
        text-align: center;
        width: 75%;
        color: darkgray;
        z-index: 2;
    }

    .background {
        position: absolute;
        top: 3px;
        bottom: -3px;
        left: 0px;
        right: 0px;
        z-index: 1;
        background-image: linear-gradient(
            90deg,
            transparent,
            black,
            black,
            transparent
        );
    }

    .hover {
        color: white;
        text-shadow: 0.05rem 0.15rem rgba(27, 39, 148, 0.582);
        border-image: linear-gradient(
                90deg,
                transparent,
                rgb(98, 209, 172),
                transparent
            )
            1;
        border-image-width: 2px 0 2px 0;
        background-image: linear-gradient(
            90deg,
            transparent,
            rgb(29, 115, 185),
            rgb(29, 115, 185),
            rgb(29, 115, 185),
            transparent
        );
    }
</style>
