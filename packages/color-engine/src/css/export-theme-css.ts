import { getThemeScheme, type ThemeDefinition } from "../theme";

import { generateComponentCss } from "./generate-component-css";

import { formatRules } from "./format-css";

import { generateCssVariables } from "./generate-css";
import type { ThemeExportOptions } from "./types";

/**
 * Génère le fichier CSS complet du thème.
 */
export function exportThemeCss(
  theme: ThemeDefinition,
  options: ThemeExportOptions = {},
): string {
  const mode = options.mode ?? "light";

  const scheme = getThemeScheme(theme, mode);

  const variables = generateCssVariables(scheme, mode);

  const rules = formatRules(generateComponentCss(scheme));

  return [variables, "", rules].join("\n");
}
