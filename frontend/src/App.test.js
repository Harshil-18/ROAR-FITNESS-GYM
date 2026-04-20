import React from "react";
import { render, screen } from "@testing-library/react";

jest.mock("./lib/api", () => ({
  __esModule: true,
  getUsers: jest.fn().mockResolvedValue([]),
}));

import Home from "./pages/Home";

jest.mock("framer-motion", () => {
  const React = require("react");
  const omitMotionProps = ({
    animate,
    custom,
    initial,
    transition,
    variants,
    viewport,
    whileHover,
    whileInView,
    ...rest
  }) => rest;

  return {
    motion: new Proxy(
      {},
      {
        get: (_, tag) =>
          React.forwardRef(({ children, ...props }, ref) =>
            React.createElement(tag, { ...omitMotionProps(props), ref }, children)
          ),
      }
    ),
  };
});

test("renders elite forge branding", async () => {
  render(<Home />);
  const heroElement = await screen.findByText(/premium gym portfolio/i);
  expect(heroElement).toBeInTheDocument();
});
