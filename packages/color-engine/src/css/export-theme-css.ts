import { getThemeScheme, type ThemeDefinition } from "../theme";
import { formatRules } from "./format-css";
import { generateCssVariables } from "./generate-css";
import type { ThemeExportOptions } from "./types";

export function exportThemeCss(
  theme: ThemeDefinition,
  options: ThemeExportOptions = {},
): string {
  const mode = options.mode ?? "all";

  const rules = [];

  if (mode === "light" || mode === "all") {
    const scheme = getThemeScheme(theme, "light");

    rules.push({
      selector: ":root",
      declarations: generateCssVariables(scheme),
    });
  }

  if (mode === "dark" || mode === "all") {
    const scheme = getThemeScheme(theme, "dark");

    rules.push({
      selector: '[data-theme="dark"]',
      declarations: generateCssVariables(scheme),
    });
  }

  return formatRules(rules);
}
