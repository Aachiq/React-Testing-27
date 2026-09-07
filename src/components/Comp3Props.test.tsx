import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Comp3Props from "./Comp3Props"

describe("Comp3Props", () => {
  it("should display the name received from props", () => {
    render(<Comp3Props name="Ahmed" />);

    expect(screen.getByText("Hello Ahmed")).toBeInTheDocument();
  });
});