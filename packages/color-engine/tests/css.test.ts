import { describe, expect, it } from "vitest";
import {
  createTheme,
  exportThemeCss,
} from "../src";

describe("css export", () => {
  const theme = createTheme({
    primary: "#a865cc",
    accent: "#ffb703",
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
});