import HealthBar from "./HealthBar.svelte";
import DialogDecorator from "../Dialog/DialogDecorator.svelte"

export default {
    component: HealthBar,
    decorators: [() => DialogDecorator],
    title: "FFVII Remake/HealthBar/HealthBar"
}

export const Default = () => ({
    Component: HealthBar,
    props: {

    }
});