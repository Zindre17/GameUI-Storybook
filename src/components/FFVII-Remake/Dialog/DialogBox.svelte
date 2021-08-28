<script>
    import DialogButton from "./DialogButton.svelte";
    import Exclamation from "./Exclamation.svelte";
    import DialogOuterBorder from "./DialogOuterBorder.svelte";

    export let date = "";
    export let title = "";
    export let subtitle = "";
    export let subtitleExtra = "";
    export let message = "";
    export let acceptLabel = "Yes";
    export let declineLabel = "No";
    export let onAccept;
    export let onDecline;
</script>

<DialogOuterBorder>
    <div class="box">
        <Exclamation />
        <div class="datetime">{date}</div>
        <div class="title">{title}</div>
        <div class="extra">{subtitle}</div>
        <div class="extra">{subtitleExtra}</div>
        <div class="message">{message}</div>
        <DialogButton button={{ label: acceptLabel, onClick: onAccept }} />
        <DialogButton button={{ label: declineLabel, onClick: onDecline }} />
    </div>
</DialogOuterBorder>

<style>
    .box {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
