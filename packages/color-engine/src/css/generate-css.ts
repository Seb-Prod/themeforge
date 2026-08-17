import type { ThemeScheme } from "../theme";
import { generateSemanticVariables } from "./generate-semantic-variables";

export function generateCssVariables(
  scheme: ThemeScheme,
): Record<string, string> {
  const variables: Record<string, string> = {};

  Object.entries(scheme.colors).forEach(([name, color]) => {
    Object.entries(color.scale).forEach(([step, hex]) => {
      variables[`--palette-${name}-${step}`] = hex;
    });

    Object.assign(variables, generateSemanticVariables(name, color.semantic));
  });

  Object.entries(scheme.surfaces).forEach(([name, hex]) => {
    variables[`--surface-${toKebabCase(name)}`] = hex;
  });

  const { text, ...themeTokens } = scheme.tokens;

  Object.entries(themeTokens).forEach(([name, hex]) => {
    variables[`--theme-${toKebabCase(name)}`] = hex;
  });

  Object.entries(text).forEach(([surface, hex]) => {
    variables[`--theme-text-${toKebabCase(surface)}`] = hex;
  });

  return variables;
}

function toKebabCase(value: string): string {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}