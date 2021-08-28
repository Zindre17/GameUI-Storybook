import MainMenuEntry from "./MainMenuEntry.svelte";
import MenuDecorator from "./MenuDecorator.svelte"

export default {
    component: MainMenuEntry,
    decorators: [() => MenuDecorator],
    title: "FFVII Remake/Main Menu/Entry",
}

export const Default = () => ({
    Component: MainMenuEntry,
    props: {
        item: {
            label: "New Game",
            onClick: () => { },
        },
    }
});
