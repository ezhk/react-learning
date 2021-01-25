import React from "react";

import { render, screen } from "@testing-library/react";
import Layout from "./components/Layout";

test("renders learn react link", () => {
  render(<Layout />);

  const buttonElement = screen.getByText(/Send/i);
  expect(buttonElement).toBeInTheDocument();
});
