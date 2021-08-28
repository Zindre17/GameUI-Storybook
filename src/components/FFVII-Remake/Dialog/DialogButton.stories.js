import DialogButton from "./DialogButton.svelte";
import DialogButtonDecorator from "./DialogButtonDecorator.svelte";

export default {
    component: DialogButton,
    decorators: [() => DialogButtonDecorator],
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