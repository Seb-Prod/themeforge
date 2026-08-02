import { getThemeScheme, type ThemeDefinition, type ThemeMode } from "../theme";
import { CssRule } from "../css";
import { entries } from "../utils";

/**
 * Génère les mappings CSS dynamiques
 * utilisés par les composants.
 */
export function generateComponentCss(
  theme: ThemeDefinition,
  mode: ThemeMode = "light",
): CssRule[] {
  const scheme = getThemeScheme(theme, mode);
  const rules: CssRule[] = [];

  entries(scheme).forEach(([color, value]) => {
    entries(value.semantic).forEach(([variant, states]) => {
      entries(states).forEach(([state]) => {
        rules.push({
          selector: `[data-color="${color}"][data-variant="${variant}"][data-state="${state}"]`,

          declarations: {
            "--variant-bg": `var(--color-${color}-${variant}-${state}-background)`,

            "--variant-text": `var(--color-${color}-${variant}-${state}-text)`,

            "--variant-border": `var(--color-${color}-${variant}-${state}-border)`,
          },
        });
      });
    });
  });

  return rules;
}
