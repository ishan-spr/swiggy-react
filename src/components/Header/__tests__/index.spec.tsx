import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../index";

test("Nav state working", async () => {
  const user = userEvent.setup();
  render(<Header />);
  expect(screen.getByText("Swiggy")).toBeInTheDocument();
  let searchLink = screen.getByText("Search");
  expect(searchLink).toBeInTheDocument();
  let nav = screen.getByTestId("nav-1");
  expect(nav).toBeInTheDocument();
  expect(nav).not.toHaveClass("active");
  await user.click(nav);
  expect(nav).toHaveClass("active");
});
