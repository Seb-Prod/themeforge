import { SemanticColorTokens } from "../semantic";
import type { ThemeDefinition } from "../theme";

/**
 * Génère les variables CSS de palette.
 */
export function generateCssVariables(theme: ThemeDefinition): string {
  const variables: string[] = [];

  Object.entries(theme).forEach(([name, color]) => {
    // Palette
    Object.entries(color.scale).forEach(([step, hex]) => {
      variables.push(`--palette-${name}-${step}: ${hex};`);
    });

    // Semantic
    variables.push(...generateSemanticVariables(name, color.semantic));
  });

  return `:root {\n${variables.map((line) => `  ${line}`).join("\n")}\n}`;
}

/**
 * Génère les variables CSS sémantiques
 */
function generateSemanticVariables(
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
