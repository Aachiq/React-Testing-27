import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Comp2ConstantState from "./Comp2ConstantState";

describe("Test Comp2ConstantState", () => {
  it("should display stac tistate", () => {
    render(<Comp2ConstantState />);

    expect(screen.getByText("Ali")).toBeInTheDocument();
  });
});