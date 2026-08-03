import { describe, expect, it } from "vitest";
import { createTheme } from "../src/theme";

describe("theme", () => {
  it("keeps source color", () => {
    const theme = createTheme({
      colors: {
        primary: "#a865cc",
      },
    });

    expect(theme.light.colors.primary.source).toBe("#a865cc");
  });

  it("creates light and dark themes", () => {
    const theme = createTheme({
      colors: {
        primary: "#a865cc",
        accent: "#ffb703",
      },
    });

    expect(theme).toHaveProperty("light");
    expect(theme).toHaveProperty("dark");
  });

  it("generates primary color schemes", () => {
    const theme = createTheme({
      colors: {
        primary: "#a865cc",
        accent: "#ffb703",
      },
    });

    expect(theme.light.colors.primary).toBeDefined();
    expect(theme.dark.colors.primary).toBeDefined();
  });

  it("generates semantic tokens", () => {
    const theme = createTheme({
      colors: {
        primary: "#a865cc",
        accent: "#ffb703",
      },
      surfaces: {
        background: "#101010",
      },
    });

    const token = theme.light.colors.primary.semantic.solid.default;

    expect(theme.light.surfaces.background).toBe("#101010");
    expect(token.background).toMatch(/^#/);
    expect(token.text).toMatch(/^#/);
    expect(token.border).toMatch(/^#/);
  });

  it("generates surfaces from surface color", () => {
    const theme = createTheme({
      colors: {
        primary: "#a865cc",
      },

      surfaceColor: "#eeeeee",
    });

    expect(theme.light.surfaces.background).toMatch(/^#/);
    expect(theme.dark.surfaces.surface).toMatch(/^#/);
  });

  it("keeps custom surfaces", () => {
    const theme = createTheme({
      colors: {
        primary: "#a865cc",
      },
      surfaces: {
        background: "#ffffff",
        card: "#eeeeee",
        sidebar: "#101010",
      },
    });

    expect(theme.light.surfaces.card).toBe("#eeeeee");

    expect(theme.light.surfaces.sidebar).toBe("#101010");
  });
});
