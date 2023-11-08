import renderWithTranslation from "@shared/lib/renderWithTranslation";
import {fireEvent, screen} from "@testing-library/react";

import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  test("рендер", () => {
    renderWithTranslation(<Sidebar />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("с переключением вида", () => {
    renderWithTranslation(<Sidebar />);

    const toggleBtn = screen.getByTestId("sidebar-toggle");

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    fireEvent.click(toggleBtn);

    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
