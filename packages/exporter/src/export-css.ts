import type { ThemeDefinition } from "@themeforge/color-engine";
import type { DesignTokens } from "@themeforge/shared";

import { CssRule, stringifyCss } from "./css";
import {
  generateThemeVariables,
  generateDesignTokenVariables,
  generateComponentSizeRules,
} from "./variables";
import { generateComponentMappings } from "./mappings";

export function exportCss(
  theme: ThemeDefinition,
  tokens: DesignTokens,
): string {
  const rules: CssRule[] = [
    {
      selector: ":root",
      declarations: {
        ...generateThemeVariables(theme.light),
        ...generateDesignTokenVariables(tokens),
      },
    },

    {
      selector: '[data-theme="dark"]',
      declarations: generateThemeVariables(theme.dark),
    },

    ...generateComponentSizeRules(tokens),

    ...generateComponentMappings(theme.light),
  ];

  return stringifyCss(rules);
}
