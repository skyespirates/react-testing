import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("test Text component", () => {
  it("should render empty text", () => {
    render(<Text>skyes</Text>);
    expect(screen.getByText("skyes")).toBeInTheDocument();
  });
});
