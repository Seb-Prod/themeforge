import type { DesignTokens } from "@themeforge/shared";

export function generateSpacingVariables(
  tokens: DesignTokens,
): Record<string, string> {
  const variables: Record<string, string> = {};

  Object.entries(tokens.spacing).forEach(([name, value]) => {
    variables[`--spacing-${name}`] = value;
  });

  return variables;
}