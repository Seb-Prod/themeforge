import type { ThemeScheme } from "../theme";
import { generateSemanticVariables } from "./generate-semantic-variables";

/**
 * Génère les variables CSS du thème.
 */
export function generateCssVariables(
  scheme: ThemeScheme,
): string[] {

  const variables: string[] = [];

  Object.entries(scheme.colors).forEach(
    ([name, color]) => {

      Object.entries(color.scale).forEach(
        ([step, hex]) => {
          variables.push(
            `--palette-${name}-${step}: ${hex};`,
          );
        },
      );


      variables.push(
        ...generateSemanticVariables(
          name,
          color.semantic,
        ),
      );
    },
  );


  Object.entries(scheme.surfaces).forEach(
    ([name, hex]) => {
      variables.push(
        `--surface-${name}: ${hex};`,
      );
    },
  );


  return variables;
}