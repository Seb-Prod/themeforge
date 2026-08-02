import type { HexColor } from "@themeforge/shared";
import { generateScale } from "../palette";
import { generateSemantic } from "../semantic";
import type { ThemeDefinition } from "./types";

interface ThemeInput {
  primary: HexColor;
  accent: HexColor;
}

function createThemeColor(color: HexColor) {
  const scale = generateScale(color);

  return {
    scale,
    semantic: generateSemantic(scale),
  };
}

/**
 * Génère un thème complet.
 */
export function createTheme(input: ThemeInput): ThemeDefinition {
  return {
    primary: createThemeColor(input.primary),
    accent: createThemeColor(input.accent),
  };
}
