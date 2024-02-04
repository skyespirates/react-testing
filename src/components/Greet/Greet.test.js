import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("render text hello to screen", () => {
  render(<Greet />);

  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("render props", () => {
  render(<Greet name="Skyes" />);

  const textElement = screen.getByText("Hello Skyes");
  expect(textElement).toBeInTheDocument();
});
