import { describe, expect, it } from "vitest";
import { generateScale } from "../src/palette";
import { convertToOklch, isInGamut } from "../src/color";

describe("gamut", () => {
  it("generates colors inside RGB gamut", () => {
    const scale = generateScale("#a865cc");

    Object.values(scale).forEach((color) => {
      expect(isInGamut(convertToOklch(color))).toBe(true);
    });
  });
});
