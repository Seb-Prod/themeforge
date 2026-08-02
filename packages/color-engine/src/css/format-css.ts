import { CssRule } from "./types";

/**
 * Ajoute un en-tête et formate un bloc CSS.
 */
export function formatRules(
  rules: CssRule[]
): string {

  const lines: string[] = [];

  rules.forEach((rule) => {

    lines.push(`${rule.selector} {`);

    Object.entries(rule.declarations)
      .forEach(([name, value]) => {

        lines.push(
          `  ${name}: ${value};`
        );

      });

    lines.push("}");
    lines.push("");

  });


  return lines.join("\n");
}