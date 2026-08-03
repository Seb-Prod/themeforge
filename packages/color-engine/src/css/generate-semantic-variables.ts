import type { SemanticColorTokens } from "../semantic";

/**
 * Génère les variables CSS sémantiques
 */
export function generateSemanticVariables(
  name: string,
  semantic: SemanticColorTokens,
): Record<string, string> {
  const variables: Record<string, string> = {};

  Object.entries(semantic).forEach(([variant, states]) => {
    Object.entries(states).forEach(([state, token]) => {
      variables[`--color-${name}-${variant}-${state}-background`] =
        token.background;

      variables[`--color-${name}-${variant}-${state}-text`] = token.text;

      variables[`--color-${name}-${variant}-${state}-border`] = token.border;
    });
  });

  return variables;
}
