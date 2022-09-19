import React from "react";
import { screen, render } from "@testing-library/react";
import InformationGrid, { Card } from "../index";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";

test("Hover Effect For Dropdown", async () => {
  const user = userEvent.setup();
  render(<InformationGrid />);
  let filter = screen.getByText("Filter");
  expect(filter).toBeInTheDocument();
  expect(filter).toBeVisible();
  await user.hover(filter);
  expect(screen.getByText("Sample 1")).toBeInTheDocument();
});

test("Card Quick View on hover", async () => {
  let user = userEvent.setup();
  render(<Card src={faker.image.abstract()} />);
  let card = screen.getByTestId("Card");
  expect(card).toBeInTheDocument();
  expect(screen.queryByTestId("Quick-View")).not.toBeInTheDocument();
  await user.hover(card);
  expect(screen.getByTestId("Quick-View")).toBeInTheDocument();
});
