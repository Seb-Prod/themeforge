import type { DesignTokens } from "@themeforge/shared";

export function generateRadiusVariables(
  tokens: DesignTokens,
): Record<string, string> {
  const variables: Record<string, string> = {};

  Object.entries(tokens.radius).forEach(([name, value]) => {
    variables[`--radius-${name}`] = value;
  });

  return variables;
}