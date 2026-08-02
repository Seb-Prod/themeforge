/**
 * Ajoute un en-tête et formate un bloc CSS.
 */
export function formatCss(
  variables: string[]
): string {

  return [
    "/**",
    " * ThemeForge generated theme",
    " * Do not edit manually",
    " */",
    "",
    ":root {",
    ...variables.map(
      (variable) => `  ${variable}`
    ),
    "}",
    "",
  ].join("\n");
}