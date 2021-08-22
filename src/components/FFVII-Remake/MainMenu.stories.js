import MainMenu from "./MainMenu.svelte";

export default {
    component: MainMenu,
    title: "FFVII Remake/Main Menu/Menu",
}

export const Default = () => ({
    Comment: MainMenu,
    props: {
        items: ["New Game", "Continue", "Load Game", "Download Save Data", "Options", "Square Enix Members"],
    }
});