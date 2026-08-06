import { describe, expect, it } from "vitest";

import { createTheme } from "@themeforge/color-engine";
import { createDesignTokens } from "@themeforge/engine";

import { exportCss } from "../src";

describe("exportCss structure", () => {
  it("exports css sections in the expected order", () => {
    const css = exportCss(
      createTheme({
        colors: {
          primary: "#a865cc",
          accent: "#ffb703",
        },
        surfaces: {
          background: "#101010",
        },
      }),
      createDesignTokens(),
    );

    const paletteIndex = css.indexOf("--palette-primary-500");
    const semanticIndex = css.indexOf("--color-primary-solid");
    const surfaceIndex = css.indexOf("--surface-background");
    const componentIndex = css.indexOf("--component-height");
    const variantIndex = css.indexOf("--variant-background");

    expect(paletteIndex).toBeGreaterThan(-1);
    expect(semanticIndex).toBeGreaterThan(paletteIndex);
    expect(surfaceIndex).toBeGreaterThan(semanticIndex);
    expect(componentIndex).toBeGreaterThan(surfaceIndex);
    expect(variantIndex).toBeGreaterThan(componentIndex);
  });
});