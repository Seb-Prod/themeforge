import { describe, expect, it } from "vitest";
import {
  createTheme,
  exportThemeCss,
  generateComponentTokens,
} from "../src";

describe("theme pipeline", () => {
  it("generates a complete theme", () => {
    const theme = createTheme({
      colors: {
        primary: "#a865cc",
        accent: "#ffb703",
      },
      surfaces: {
        card: "#ffffff",
      },
    });

    const css = exportThemeCss(theme);

    const components = generateComponentTokens(theme);

    expect(theme.light.colors.primary).toBeDefined();

    expect(theme.light.surfaces.card)
      .toBe("#ffffff");

    expect(css)
      .toContain("--color-primary-solid-default-background");

    expect(css)
      .toContain("--surface-card");

    expect(components)
      .toHaveLength(2);
  });
});