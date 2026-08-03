import { describe, expect, it } from "vitest";
import { generateScale } from "../src/palette";

describe("generateScale", () => {
  it("generates all scale steps", () => {
    const scale = generateScale("#a865cc");

    expect(Object.keys(scale)).toEqual([
      "50",
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
      "950",
    ]);
  });


  it("keeps source color at step 500", () => {
    const scale = generateScale("#a865cc");

    expect(scale[500]).toBe("#a865cc");
  });


  it("generates different light and dark scales", () => {
    const light = generateScale(
      "#a865cc",
      "light",
    );

    const dark = generateScale(
      "#a865cc",
      "dark",
    );

    expect(light[100]).not.toBe(dark[100]);
  });
});