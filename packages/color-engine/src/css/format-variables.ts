/**
 * Formate des variables CSS dans :root.
 */
export function formatVariables(
  variables: string[],
  selector = ":root",
): string {

  return [
    `${selector} {`,
    ...variables.map(
      (variable) => `  ${variable}`,
    ),
    "}",
    "",
  ].join("\n");
}