<script>
    import DialogButton from "./DialogButton.svelte";
</script>

<div class="container">
    <div class="border top" />
    <div class="border bottom" />
    <div class="border left" />
    <div class="border right" />
    <div class="corner" />
    <div class="corner tr" />
    <div class="corner bl" />
    <div class="corner br" />
    <div class="box">
        <div class="datetime">08/22/2021 01:04:53 a.m.</div>
        <div class="title">Ch. 17: Deliverance from Chaos</div>
        <div class="extra">Sector 0 - Shinra Electric Power Company</div>
        <div class="extra">Combat Simulator</div>
        <div class="message">Resume playing from where you left off?</div>
        <DialogButton button={{ label: "Yes" }} />
        <DialogButton button={{ label: "No" }} />
    </div>
</div>

<style>
    .container {
        padding: 1rem;
        position: relative;
    }
    .box {
        font-size: 2rem;
        text-align: center;
        padding: 8rem 4rem 3rem 4rem;
        background-image: radial-gradient(
            150% 90% at top,
            rgb(68, 172, 233),
            rgb(15, 74, 126),
            rgb(6, 37, 83),
            rgb(4, 12, 44)
        );
        border-image: radial-gradient(
                120% 20% at top,
                rgb(28, 158, 197),
                rgb(3, 3, 34)
            )
            1;
        border-image-width: 0.5rem;
    }
    .datetime {
        color: rgb(0, 186, 233);
    }
    .title {
        color: white;
    }
    .extra {
        color: darkgray;
    }
    .message {
        margin: 2rem 0 3rem 0;
        color: lightgray;
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
        box-shadow: black 0 0 0 0.5px, rgb(49, 160, 211) 0px 0px 0px 3px;
    }
    .corner::after {
        content: "";
        position: absolute;
        height: 3px;
        width: 3px;
        transform: rotate(-45deg) translateX(12px);
        background-color: rgb(49, 160, 211);
    }
    .corner::before {
        content: "";
        position: absolute;
        height: 3px;
        width: 3px;
        transform: rotate(-45deg) translateY(12px);
        background-color: rgb(49, 160, 211);
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
