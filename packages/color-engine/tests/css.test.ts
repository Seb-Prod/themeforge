import { describe, expect, it } from "vitest";
import { createTheme, exportThemeCss } from "../src";

describe("css export", () => {
  const theme = createTheme({
    colors: {
      primary: "#a865cc",
      accent: "#ffb703",
    },
    surfaces: {
      background: "#101010",
    },
  });

  it("generates css variables from theme", () => {
    const css = exportThemeCss(theme);

    expect(css).toContain(":root");
    expect(css).toContain('[data-theme="dark"]');

    expect(css).toContain("--palette-primary-");
    expect(css).toContain("--surface-background");
  });

  it("contains primary semantic tokens", () => {
    const css = exportThemeCss(theme);

    expect(css).toContain("--color-primary");
    expect(css).toContain("solid");
    expect(css).toContain("background");
    expect(css).toContain("text");
    expect(css).toContain("border");
  });

  it("can export only one theme mode", () => {
    const css = exportThemeCss(theme, {
      mode: "light",
    });

    expect(css).toContain(":root");
    expect(css).not.toContain('[data-theme="dark"]');
  });

  it("generates component mappings", () => {
    const theme = createTheme({
      colors: {
        primary: "#a865cc",
      },
    });

    const css = exportThemeCss(theme);

    expect(css).toContain('[data-color="primary"][data-variant="solid"]');

    expect(css).toContain("--variant-background");
    expect(css).toContain("--variant-hover-background");
    expect(css).toContain("--variant-active-background");
    expect(css).toContain("--variant-focus-background");
    expect(css).toContain("--variant-disabled-background");

    expect(css).not.toContain("data-state");
    expect(css).not.toContain("--variant-bg");
  });

  it("generates transparent backgrounds for outline and ghost variants", () => {
    const theme = createTheme({
      colors: {
        primary: "#a865cc",
      },
    });

    const css = exportThemeCss(theme);

    expect(css).toContain(
      "--color-primary-outline-default-background: transparent",
    );

    expect(css).toContain(
      "--color-primary-ghost-default-background: transparent",
    );
  });
});
