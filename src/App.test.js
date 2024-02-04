import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("render text Edit src/App.js and save to reload.", () => {
  render(<App />);
  const paragraf = screen.getByTestId("paragraf");
  expect(paragraf).toBeInTheDocument();
});
