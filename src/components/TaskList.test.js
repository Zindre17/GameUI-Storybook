import PureTaskList from "./PureTaskList.svelte";

import { render } from "@testing-library/svelte";

import { WithPinnedTasks } from "./PureTaskList.stories";

test("renders pinned tasks at the start of the list", () => {
    const { container } = render(PureTaskList, {
        props: WithPinnedTasks.args,
    });
    expect(container.firstChild.children[0].classList.contains("TASK_PINNED")).toBe(true);
})