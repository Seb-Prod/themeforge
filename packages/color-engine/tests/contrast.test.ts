import { describe, expect, it } from "vitest";
import {
  getContrastRatio,
  getReadableTextColor,
} from "../src/color";

describe("contrast", () => {
  it("calculates black and white contrast", () => {
    const ratio = getContrastRatio(
      "#ffffff",
      "#000000",
    );

    expect(ratio).toBeCloseTo(21, 1);
  });


  it("chooses white text on dark background", () => {
    expect(
      getReadableTextColor("#000000"),
    ).toBe("#ffffff");
  });


  it("chooses dark text on light background", () => {
    expect(
      getReadableTextColor("#ffffff"),
    ).toBe("#000000");
  });
});