import type { DesignTokens } from "@themeforge/shared";

export function generateComponentVariables(
  tokens: DesignTokens,
): Record<string, string> {
  const variables: Record<string, string> = {};

  Object.entries(tokens.components).forEach(([component, definition]) => {
    Object.entries(definition.sizes).forEach(([size, values]) => {
      Object.entries(values).forEach(([property, value]) => {
        variables[`--${component}-${size}-${toKebabCase(property)}`] = value;
      });
    });
  });

  return variables;
}

function toKebabCase(value: string): string {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}
