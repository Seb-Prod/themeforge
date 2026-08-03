import { describe, expect, it } from "vitest";
import {
  createTheme,
  exportThemeCss,
} from "../src";

describe("css export", () => {
  it("generates css variables from theme", () => {
    const theme = createTheme({
      primary: "#a865cc",
      accent: "#ffb703",
    });

    const css = exportThemeCss(theme);

    expect(css).toContain("--");
    expect(css).toContain("#");
  });


  it("contains primary tokens", () => {
    const theme = createTheme({
      primary: "#a865cc",
      accent: "#ffb703",
    });

    const css = exportThemeCss(theme);

    expect(css).toContain("primary");
    expect(css).toContain("solid");
  });
});