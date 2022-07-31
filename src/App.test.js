import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import EmojiResults from "./EmojiResults";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("Başlık render edildi", () => {
  render(<App></App>);
  const title = screen.getByText("Emoji Search");

  expect(title).toHaveTextContent("Emoji Search");
});
test("Emoji listesi render edildi", () => {
  render(<App />);
  const items = screen.getAllByTestId("row");
  expect(items.length).toEqual(20);
});

test("Emoji kopyalandı", () => {
  render(<App />);
  const clicks = screen.getAllByTestId("row");
  expect(clicks[0]).toHaveAttribute("data-clipboard-text");
});

test("Emoji filter render edildi", () => {
  render(<App />);
  const inputText = screen.getByText("1234");
  expect(inputText).toBeInTheDocument("1234");
});
