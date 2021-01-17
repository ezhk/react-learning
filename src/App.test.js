import React from "react";

import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

test("renders learn react link", () => {
  render(<App />);
  const buttonElement = screen.getByText(/Send/i);
  expect(buttonElement).toBeInTheDocument();
});
