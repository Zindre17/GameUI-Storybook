import MainMenu from "./MainMenu.svelte";

export default {
    component: MainMenu,
    title: "FFVII Remake/Main Menu/Menu",
}

export const Default = () => ({
    Comment: MainMenu,
    props: {
        items: [
            { label: "New Game", onClick: () => { } },
            { label: "Continue", onClick: () => { } },
            { label: "Load Game", onClick: () => { } },
            { label: "Download Save Data", onClick: () => { } },
            { label: "Options", onClick: () => { } },
            { label: "Square Enix Members", onClick: () => { } }
        ],
    }
});