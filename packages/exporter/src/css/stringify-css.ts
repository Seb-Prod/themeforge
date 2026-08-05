import type { CssRule } from "./css-rule";

/**
 * Convertit une liste de règles CSS
 * en une feuille de style.
 */
export function stringifyCss(
  rules: CssRule[],
): string {
  return rules
    .map(({ selector, declarations }) => {
      const body = Object.entries(declarations)
        .map(
          ([property, value]) => `  ${property}: ${value};`,
        )
        .join("\n");

      return `${selector} {\n${body}\n}`;
    })
    .join("\n\n");
}