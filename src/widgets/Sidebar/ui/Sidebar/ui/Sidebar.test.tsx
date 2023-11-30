import componentRender from "@shared/lib/componentRender";
import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  const user = userEvent.setup();

  test("рендер", () => {
    componentRender(<Sidebar />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("с переключением вида", async () => {
    componentRender(<Sidebar />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    await user.click(screen.getByTestId("sidebar-toggle"));

    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
