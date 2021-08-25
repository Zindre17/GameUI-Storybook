<script>
    import DialogButton from "./DialogButton.svelte";
    import Exclamation from "./Exclamation.svelte";
    import DialogOuterBorder from "./DialogOuterBorder.svelte";
</script>

<DialogOuterBorder>
    <div class="box">
        <Exclamation />
        <div class="datetime">08/22/2021 01:04:53 a.m.</div>
        <div class="title">Ch. 17: Deliverance from Chaos</div>
        <div class="extra">Sector 0 - Shinra Electric Power Company</div>
        <div class="extra">Combat Simulator</div>
        <div class="message">Resume playing from where you left off?</div>
        <DialogButton button={{ label: "Yes" }} />
        <DialogButton button={{ label: "No" }} />
    </div>
</DialogOuterBorder>

<style>
    .box {
        font-size: 2rem;
        text-align: center;
        padding: 2rem 4rem 4rem 4rem;
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
</style>
