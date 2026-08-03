import { describe, expect, it } from "vitest";
import { createTheme, generateComponentTokens } from "../src";

describe("component tokens", () => {
  it("generates component tokens from theme", () => {
    const theme = createTheme({
      colors: {
        primary: "#a865cc",
        accent: "#ffb703",
      },
    });

    const tokens = generateComponentTokens(theme);

    expect(tokens).toHaveLength(2);

    expect(tokens[0].color).toBe("primary");

    expect(tokens[0].semantic.solid.default).toBeDefined();
  });
});
