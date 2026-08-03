import type { SemanticColorTokens } from "../semantic";

/**
 * Génère les variables CSS sémantiques
 */
export function generateSemanticVariables(
  name: string,
  semantic: SemanticColorTokens,
): string[] {
  const variables: string[] = [];

  Object.entries(semantic).forEach(([variant, states]) => {
    Object.entries(states).forEach(([state, token]) => {
      variables.push(
        `--color-${name}-${variant}-${state}-background: ${token.background};`,
      );

      variables.push(
        `--color-${name}-${variant}-${state}-text: ${token.text};`,
      );

      variables.push(
        `--color-${name}-${variant}-${state}-border: ${token.border};`,
      );
    });
  });

  return variables;
}
