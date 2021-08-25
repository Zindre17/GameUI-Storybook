<div class="container">
    <div class="border top" />
    <div class="border bottom" />
    <div class="border left" />
    <div class="border right" />
    <div class="corner" />
    <div class="corner tr" />
    <div class="corner bl" />
    <div class="corner br" />
    <slot />
</div>

<style>
    .container {
        padding: 1rem;
        position: relative;
    }
    .border {
        background-color: rgb(49, 160, 211);
        position: absolute;
    }
    .left,
    .right {
        height: calc(100% - 60px);
        top: 30px;
        width: 1px;
    }
    .top,
    .bottom {
        width: calc(100% - 60px);
        height: 1px;
        left: 30px;
    }
    .bottom {
        bottom: 0.5rem;
    }
    .top {
        top: 0.5rem;
    }
    .left {
        left: 0.5rem;
    }
    .right {
        right: 0.5rem;
    }
    .corner {
        width: 3px;
        height: 3px;
        background-color: rgb(49, 160, 211);
        top: 0.5rem;
        left: 0.5rem;
        position: absolute;
        transform: rotate(45deg);
        box-shadow: rgb(49, 160, 211) 0 0 0 3px;
    }
    .corner::after,
    .corner::before {
        content: "";
        position: absolute;
        height: 3px;
        width: 3px;
        transform: rotate(-45deg) translateX(12px);
        background-color: rgb(49, 160, 211);
    }
    .corner::before {
        transform: rotate(-45deg) translateY(12px);
    }
    .corner.tr {
        left: unset;
        right: 0.5rem;
        transform: rotate(135deg);
    }
    .corner.br {
        top: unset;
        left: unset;
        bottom: 0.5rem;
        right: 0.5rem;
        transform: rotate(225deg);
    }
    .corner.bl {
        transform: rotate(-45deg);
        top: unset;
        bottom: 0.5rem;
    }
</style>
