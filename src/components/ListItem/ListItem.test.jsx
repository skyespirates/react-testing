import { render, screen } from "@testing-library/react";
import ListItem from "./ListItem";

describe("render list item component", () => {
  it("should render empty list item component", () => {
    render(<ListItem />);
    expect(screen.getByRole("listitem")).toBeEmptyDOMElement();
  });

  it("should render a list with text inside", () => {
    render(<ListItem>kiwkiw</ListItem>);

    expect(screen.getByText(/kiwkiw/i)).toBeInTheDocument();
  });
});
