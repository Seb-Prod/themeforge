import type { ThemeScheme } from "@themeforge/color-engine";
import type { CssRule } from "../css";

/**
 * Génère les variables CSS
 * d'un thème.
 */
export function generateThemeVariables(
  scheme: ThemeScheme,
): CssRule {

  const declarations: Record<string, string> = {};

  Object.entries(scheme.colors).forEach(([name, color]) => {

    Object.entries(color.scale).forEach(([step, value]) => {
      declarations[`--palette-${name}-${step}`] = value;
    });

    Object.entries(color.semantic).forEach(([variant, states]) => {
      Object.entries(states).forEach(([state, tokens]) => {

        Object.entries(tokens).forEach(([token, value]) => {
          declarations[
            `--color-${name}-${variant}-${state}-${token}`
          ] = value;
        });

      });
    });

  });

  Object.entries(scheme.surfaces).forEach(([name, value]) => {
    declarations[
      `--surface-${toKebabCase(name)}`
    ] = value;
  });

  return {
    selector: ":root",
    declarations,
  };
}

function toKebabCase(value: string) {
  return value.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}