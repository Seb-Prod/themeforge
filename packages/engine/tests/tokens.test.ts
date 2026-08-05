import { describe, expect, it } from "vitest";
import { createDesignTokens } from "../src";


describe("design tokens", () => {

  it("generates default tokens", () => {

    const tokens = createDesignTokens();

    expect(tokens.radius.md)
      .toBe("12px");

    expect(tokens.spacing[4])
      .toBe("16px");

    expect(tokens.shadows.md)
      .toContain("0 4px");

  });

});