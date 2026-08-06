import type { DesignTokens } from "@themeforge/shared";
import type { CssRule } from "../css";

export function generateComponentSizeRules(tokens: DesignTokens): CssRule[] {
  const rules: CssRule[] = [];

  Object.entries(tokens.components).forEach(([componentName, component]) => {
    Object.entries(component.sizes).forEach(([size, values]) => {
      const declarations: Record<string, string> = {};

      Object.entries(values).forEach(([token, value]) => {
        declarations[`--component-${toKebabCase(token)}`] = value;
      });

      rules.push({
        selector: `[data-component="${componentName}"][data-size="${size}"]`,

        declarations,
      });
    });
  });

  return rules;
}

function toKebabCase(value: string): string {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}
