import { screen, render, fireEvent } from "@testing-library/react"
import InformationGrid, { Card } from '../index'
import userEvent from '@testing-library/user-event'
import { faker } from "@faker-js/faker"

test("Hover Effect For Dropdown", async () => {
  const user = userEvent.setup()
  render(<InformationGrid />)
  let filter = screen.getByText("Filter")
  expect(filter).toBeInTheDocument()
  expect(filter).toBeVisible()
  await user.hover(filter)
  expect(screen.getByText("Sample 1")).toBeInTheDocument()
})

