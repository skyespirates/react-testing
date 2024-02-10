import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("test Input component", () => {
  it("should render default input component", () => {
    render(<Input />);
    expect(screen.getByPlaceholderText("type here")).toBeInTheDocument();
  });

  it("should render input based on props", () => {
    render(<Input placeholder="heyhey not bad" />);
    expect(screen.getByPlaceholderText("heyhey not bad")).toBeInTheDocument();
  });
});
