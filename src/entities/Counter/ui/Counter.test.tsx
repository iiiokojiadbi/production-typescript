import componentRender from "@shared/lib/componentRender";
import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter";

describe("Counter", () => {
  const user = userEvent.setup();

  test("рендер", () => {
    componentRender(<Counter />, {
      initialState: {counter: {value: 10}},
    });

    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("увеличение счетчика до 11", async () => {
    componentRender(<Counter />, {
      initialState: {counter: {value: 10}},
    });

    await user.click(screen.getByTestId("increment-btn"));

    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });

  test("уменьшение счетчика до 9", async () => {
    componentRender(<Counter />, {
      initialState: {counter: {value: 10}},
    });

    await user.click(screen.getByTestId("decrement-btn"));

    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
  });
});
