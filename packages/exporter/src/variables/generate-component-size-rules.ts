import type { DesignTokens } from "@themeforge/shared";
import type { CssRule } from "../css";

export function generateComponentSizeRules(tokens: DesignTokens): CssRule[] {
  return Object.entries(tokens.components).flatMap(
    ([component, definition]) => {
      if (!definition.sizes) return [];

      return Object.entries(definition.sizes).map(([size, values]) => ({
        selector: `[data-component="${component}"][data-size="${size}"]`,
        declarations: Object.fromEntries(
          Object.entries(values).map(([key, value]) => [
            `--component-${toCssVariableName(key)}`,
            value,
          ]),
        ),
      }));
    },
  );
}

function toCssVariableName(value: string) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase();
}