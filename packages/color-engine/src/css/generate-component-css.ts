import type { ThemeScheme } from "../theme";
import { CssRule } from "../css";
import { entries } from "../utils";

/**
 * Génère les variables CSS de variantes consommées
 * par les composants.
 *
 * Les états ne sont pas appliqués ici.
 * Le composant gère les pseudo-classes CSS :
 * :hover, :active, :focus-visible, :disabled
 */
export function generateComponentCss(
  scheme: ThemeScheme,
): CssRule[] {
  const rules: CssRule[] = [];

  entries(scheme.colors).forEach(([color, value]) => {
    entries(value.semantic).forEach(([variant, states]) => {

      const declarations: Record<string, string> = {};

      entries(states).forEach(([state]) => {
        const prefix =
          state === "default"
            ? "variant"
            : `variant-${state}`;

        declarations[
          `--${prefix}-background`
        ] =
          `var(--color-${color}-${variant}-${state}-background)`;

        declarations[
          `--${prefix}-text`
        ] =
          `var(--color-${color}-${variant}-${state}-text)`;

        declarations[
          `--${prefix}-border`
        ] =
          `var(--color-${color}-${variant}-${state}-border)`;
      });


      rules.push({
        selector: `[data-color="${color}"][data-variant="${variant}"]`,
        declarations,
      });

    });
  });

  return rules;
}