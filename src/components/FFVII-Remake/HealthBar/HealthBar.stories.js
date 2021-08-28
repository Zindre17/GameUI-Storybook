import HealthBar from "./HealthBar.svelte";
import HealthBarDecorator from "./HealthBarDecorator.svelte"

export default {
    component: HealthBar,
    decorators: [() => HealthBarDecorator],
    title: "FFVII Remake/HealthBar/HealthBar"
}

export const Default = () => ({
    Component: HealthBar,
    props: {

    }
});