import { render, screen } from "@testing-library/react";
import List from "./List";

describe("test List component", () => {
  test("it should render empty List correctly", () => {
    render(<List />);
    expect(screen.getByRole("list")).toBeEmptyDOMElement();
  });

  test("should render 3 list item", () => {
    const items = [1, 2, 3];
    render(<List items={items} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
});
