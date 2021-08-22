import MainMenuEntry from "./MainMenuEntry.svelte";

export default {
    component: MainMenuEntry,
    title: "FFVII Remake/Main Menu/Entry",
}

export const Default = () => ({
    Component: MainMenuEntry,
    args: {
        label: "New Game"
    }
});
