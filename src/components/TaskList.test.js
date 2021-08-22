import TaskList from "./TaskList.svelte";

import { render } from "@testing-library/svelte";

import { WithPinnedTasks } from "./TaskList.stories";

test("renders pinned tasks at the start of the list", () => {
    const { container } = render(TaskList, {
        props: WithPinnedTasks.args,
    });
    expect(container.firstChild.children[0].classList.contains("TASK_PINNED")).toBe(true);
})