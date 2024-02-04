import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test("render hello correctly!", () => {
  render(<Hello />);

  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});
