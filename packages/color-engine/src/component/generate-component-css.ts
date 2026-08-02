import type { ThemeDefinition } from "../theme";
import type { SemanticColorTokens } from "../semantic";

function entries<T extends object>(
  value: T
): [keyof T, T[keyof T]][] {

  return Object.entries(value) as [
    keyof T,
    T[keyof T]
  ][];
}

/**
 * Génère les mappings CSS dynamiques
 * utilisés par les composants.
 */
export function generateComponentCss(theme: ThemeDefinition): string[] {
  const lines: string[] = [];

  entries(theme).forEach(([color, value]) => {
    entries(value.semantic).forEach(([variant, states]) => {
      entries(states).forEach(([state]) => {
        lines.push(
          `[data-color="${color}"][data-variant="${variant}"][data-state="${state}"] {`,
        );

        lines.push(
          `  --variant-bg: var(--color-${color}-${variant}-${state}-background);`,
        );

        lines.push(
          `  --variant-text: var(--color-${color}-${variant}-${state}-text);`,
        );

        lines.push(
          `  --variant-border: var(--color-${color}-${variant}-${state}-border);`,
        );

        lines.push("}");
      });
    });
  });

  return lines;
}
