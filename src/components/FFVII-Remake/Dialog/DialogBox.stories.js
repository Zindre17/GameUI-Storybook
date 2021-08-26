import DialogBox from "./DialogBox.svelte";

export default {
    component: DialogBox,
    title: "FFVII Remake/Dialog/DialogBox"
}

export const Default = () => ({
    component: DialogBox,
    props: {
        date: "08/22/2021 01:04:53 a.m.",
        title: "Ch. 17: Deliverance from Chaos",
        subtitle: "Sector 0 - Shinra Electric Power Company",
        subtitleExtra: "Combat Simulator",
        message: "Resume playing from where you left off?",
    }
});