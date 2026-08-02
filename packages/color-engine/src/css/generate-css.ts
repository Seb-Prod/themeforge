import { SemanticColorTokens } from "../semantic";
import type { ThemeScheme, ThemeMode } from "../theme";
import { formatVariables } from "./format-variables";

/**
 * Génère les variables CSS de palette.
 */
export function generateCssVariables(
  scheme: ThemeScheme,
  mode: ThemeMode = "light",
): string {
  const variables: string[] = [];

  Object.entries(scheme).forEach(([name, color]) => {
    // Palette
    Object.entries(color.scale).forEach(([step, hex]) => {
      variables.push(`--palette-${name}-${step}: ${hex};`);
    });

    // Semantic
    variables.push(...generateSemanticVariables(name, color.semantic));
  });

  return formatVariables(variables, mode === "dark" ? ".dark" : ":root");
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
