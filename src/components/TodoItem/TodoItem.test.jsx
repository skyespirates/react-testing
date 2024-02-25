import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TodoItem from "./TodoItem";

describe("test todo item", () => {
  it("should render correctly", () => {
    render(<TodoItem />);
    expect(screen.getByText(/todo item/i)).toBeInTheDocument();
  });
  it("should render loading", () => {
    render(<TodoItem />);
    const nextButton = screen.getByText(/next/i);
    userEvent.click(nextButton);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
  it("should render todo title", async () => {
    render(<TodoItem />);
    const nextButton = screen.getByRole("button", { name: /next/i });
    userEvent.click(nextButton);
    expect(await screen.findByText(/delectus aut autem/i)).toBeInTheDocument();
  });
});
