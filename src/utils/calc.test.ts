import { add } from "./calc";
import { describe, it, expect } from "vitest";

describe("add", () => {
  it("should return the sum of two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});