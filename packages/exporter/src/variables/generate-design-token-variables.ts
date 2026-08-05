import type { DesignTokens } from "@themeforge/shared";

import {
  generateRadiusVariables,
  generateSpacingVariables,
  generateShadowVariables,
  generateComponentVariables,
} from ".";

/**
 * Génère toutes les variables CSS
 * issues des Design Tokens.
 */
export function generateDesignTokenVariables(
  tokens: DesignTokens,
): Record<string, string> {

  return {
    ...generateRadiusVariables(tokens),
    ...generateSpacingVariables(tokens),
    ...generateShadowVariables(tokens),
    ...generateComponentVariables(tokens),
  };
}