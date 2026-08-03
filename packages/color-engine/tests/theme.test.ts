import { describe, expect, it } from "vitest";
import { createTheme } from "../src/theme";

describe("theme", () => {
  it("keeps source color", () => {
    const theme = createTheme({
      primary: "#a865cc",
    });

    expect(theme.light.colors.primary.source).toBe("#a865cc");
  });
  
  it("creates light and dark themes", () => {
    const theme = createTheme({
      primary: "#a865cc",
      accent: "#ffb703",
    });

    expect(theme).toHaveProperty("light");
    expect(theme).toHaveProperty("dark");
  });

  it("generates primary color schemes", () => {
    const theme = createTheme({
      primary: "#a865cc",
      accent: "#ffb703",
    });

    expect(theme.light.colors.primary).toBeDefined();
    expect(theme.dark.colors.primary).toBeDefined();
  });

  it("generates semantic tokens", () => {
    const theme = createTheme({
      primary: "#a865cc",
      accent: "#ffb703",
    });

    const token = theme.light.colors.primary.semantic.solid.default;

    expect(token.background).toMatch(/^#/);
    expect(token.text).toMatch(/^#/);
    expect(token.border).toMatch(/^#/);
  });
});
