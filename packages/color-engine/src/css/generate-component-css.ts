import type { ThemeDefinition } from "../theme";
import type { SemanticColorTokens } from "../semantic";
import { CssRule } from "../css";

function entries<T extends object>(value: T): [keyof T, T[keyof T]][] {
  return Object.entries(value) as [keyof T, T[keyof T]][];
}

/**
 * Génère les mappings CSS dynamiques
 * utilisés par les composants.
 */
export function generateComponentCss(theme: ThemeDefinition): CssRule[] {
  const rules: CssRule[] = [];

  entries(theme).forEach(([color, value]) => {
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
