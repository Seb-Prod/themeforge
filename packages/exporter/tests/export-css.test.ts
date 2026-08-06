import { describe, expect, it } from "vitest";

import { createTheme } from "@themeforge/color-engine";
import { createDesignTokens } from "@themeforge/engine";

import { exportCss } from "../src";

describe("exportCss", () => {
  const theme = createTheme({
    colors: {
      primary: "#a865cc",
      accent: "#ffb703",
    },
    surfaces: {
      background: "#101010",
    },
  });

  const tokens = createDesignTokens();

  it("exports a complete css stylesheet", () => {
    const css = exportCss(theme, tokens);

    // Theme
    expect(css).toContain(":root");
    expect(css).toContain('[data-theme="dark"]');

    // Palette
    expect(css).toContain("--palette-primary-500");
    expect(css).toContain("--palette-accent-500");

    // Semantic colors
    expect(css).toContain("--color-primary-solid-default-background");
    expect(css).toContain("--color-accent-soft-hover-background");

    // Surfaces
    expect(css).toContain("--surface-background");
    expect(css).toContain("--surface-surface");

    // Design tokens
    expect(css).toContain("--radius-md");
    expect(css).toContain("--spacing-4");
    expect(css).toContain("--shadow-sm");

    // Component tokens
    expect(css).toContain("--button-sm-height");
    expect(css).toContain("--button-md-padding-x");
    expect(css).toContain("--button-lg-padding-x");

    // Component size mappings
    expect(css).toContain('[data-component="button"][data-size="sm"]');
    expect(css).toContain("--component-height: 32px");
    expect(css).toContain("--component-padding-x: 12px");
    expect(css).toContain("--component-padding-y: 6px");
    expect(css).toContain("--component-font-size: 14px");
    expect(css).toContain("--component-radius: 8px");

    expect(css).toContain('[data-component="button"][data-size="md"]');
    expect(css).toContain("--component-height: 40px");

    expect(css).toContain('[data-component="button"][data-size="lg"]');
    expect(css).toContain("--component-padding-x: 20px");

    // Variant mappings
    expect(css).toContain('[data-color="primary"][data-variant="solid"]');
    expect(css).toContain("--variant-background");
    expect(css).toContain("--variant-hover-background");
    expect(css).toContain("--variant-active-background");
    expect(css).toContain("--variant-focus-background");
    expect(css).toContain("--variant-disabled-background");

    expect(css).toContain('[data-color="accent"][data-variant="soft"]');
  });

  it("exports valid css custom properties", () => {
    const css = exportCss(theme, tokens);

    const invalidVariables = css.match(/--[^:]+:[^;]*:[^;]*/g);

    expect(invalidVariables).toBeNull();
  });
});
