import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("testing Button component", () => {
  it("should render button with text Button", () => {
    render(<Button />);
    expect(screen.getByText("Button")).toBeInTheDocument();
  });

  it("should render Button with customized text inside", () => {
    render(<Button>click me</Button>);
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });
});
