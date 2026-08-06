import type { ThemeScheme } from "@themeforge/color-engine";
import type { CssRule } from "../css";

export function generateComponentMappings(
  scheme: ThemeScheme,
): CssRule[] {

  const rules: CssRule[] = [];

  Object.entries(scheme.colors).forEach(([color, value]) => {

    Object.entries(value.semantic).forEach(([variant, states]) => {

      const declarations: Record<string, string> = {};

      Object.keys(states).forEach((state) => {

        declarations[`--variant-${state}-background`] =
          `var(--color-${color}-${variant}-${state}-background)`;

        declarations[`--variant-${state}-text`] =
          `var(--color-${color}-${variant}-${state}-text)`;

        declarations[`--variant-${state}-border`] =
          `var(--color-${color}-${variant}-${state}-border)`;
      });

      declarations["--variant-background"] =
        `var(--color-${color}-${variant}-default-background)`;

      declarations["--variant-text"] =
        `var(--color-${color}-${variant}-default-text)`;

      declarations["--variant-border"] =
        `var(--color-${color}-${variant}-default-border)`;

      rules.push({
        selector:
          `[data-color="${color}"][data-variant="${variant}"]`,
        declarations,
      });

    });

  });

  return rules;
}