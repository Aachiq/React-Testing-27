import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Comp4InteractState from "./Comp4InteractState";

describe("Comp4InteractState", () => {
  it("should change the value after clicking the button", async () => {
    const EventSetup = userEvent.setup();

    render(<Comp4InteractState />);

    expect(screen.getByRole("heading")).toHaveTextContent("Name");

    const button = screen.getByRole("button", { name: "Change Value" });

    await EventSetup.click(button);

    expect(screen.getByRole("heading")).toHaveTextContent("Karim");
  });
});