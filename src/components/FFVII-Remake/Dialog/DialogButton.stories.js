import DialogButton from "./DialogButton.svelte";
import DialogDecorator from "./DialogDecorator.svelte";

export default {
    component: DialogButton,
    decorators: [() => DialogDecorator],
    title: "FFVII Remake/Dialog/DialogButton",
}

export const Default = () => ({
    Component: DialogButton,
    props: {
        button: {
            label: "Yes",
            onClick: () => { }
        }
    }
});