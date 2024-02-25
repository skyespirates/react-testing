import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

describe("test todo list", () => {
  it("should render loading...", () => {
    render(<TodoList />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it("should render list item", async () => {
    render(<TodoList />);

    const listItem = await screen.findAllByRole("listitem");

    expect(listItem).toHaveLength(5);
  });
});
