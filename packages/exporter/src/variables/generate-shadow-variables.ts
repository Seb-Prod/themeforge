import type { DesignTokens } from "@themeforge/shared";

export function generateShadowVariables(
  tokens: DesignTokens,
): Record<string, string> {
  const variables: Record<string, string> = {};

  Object.entries(tokens.shadows).forEach(([name, value]) => {
    variables[`--shadow-${name}`] = value;
  });

  return variables;
}