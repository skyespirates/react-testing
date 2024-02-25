import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("test counter component", () => {
  it("should render counter component correctly", () => {
    render(<Counter />);
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(3);
  });

  it("should decrease count value by 1", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText(/decrement/i));
    expect(screen.getByText(/count: -1/i)).toBeInTheDocument();
  });

  it("should reset count back to 0", () => {
    render(<Counter />);

    fireEvent.click(screen.getByText(/decrement/i)); // count: -1
    fireEvent.click(screen.getByText(/reset/i)); // reset count to 0

    expect(screen.getByText(/count: 0/)).toBeInTheDocument();
  });

  it("should increase count value by 1", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText(/increment/i));
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });
});
