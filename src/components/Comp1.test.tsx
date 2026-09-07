import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Comp1 from "./Comp1";

describe("HelloWorld", () => {
  it("should display H2 Text", () => {
    render(<Comp1 />);

    expect(screen.getByText("I'm first React STatic Comp To Test")).toBeInTheDocument();
  });
});