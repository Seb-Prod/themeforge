import type { ThemeDefinition } from "../theme";

import { generateComponentCss } from "./generate-component-css";

import { formatRules } from "./format-css";

import { generateCssVariables } from "./generate-css";

/**
 * Génère le fichier CSS complet du thème.
 */
export function exportThemeCss(theme: ThemeDefinition): string {
  const variables = generateCssVariables(theme);

  const rules = formatRules(generateComponentCss(theme));

  return [variables, "", rules].join("\n");
}
