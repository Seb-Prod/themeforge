/**
 * Formate des variables CSS dans :root.
 */
export function formatVariables(
  variables: string[],
): string {

  return [
    "/**",
    " * ThemeForge generated theme",
    " * Do not edit manually",
    " */",
    "",
    ":root {",
    ...variables.map(
      (variable) => `  ${variable}`,
    ),
    "}",
    "",
  ].join("\n");
}