import type { HexColor } from "@themeforge/shared";
import { generateSemanticTokens } from "../semantic";
import type { ThemeDefinition, ThemeMode } from "./types";
import { generateScale } from "../palette";

interface ThemeInput {
  primary: HexColor;
  accent: HexColor;
}

function createThemeColor(color: HexColor, mode: ThemeMode) {
  const scale = generateScale(
    color,
    mode,
  );

  return {
    scale,
    semantic: generateSemanticTokens(scale),
  };
}

/**
 * Génère un thème complet.
 */
export function createTheme(input: ThemeInput): ThemeDefinition {
  const light = {
    primary: createThemeColor(input.primary, "light"),
    accent: createThemeColor(input.accent, "light"),
  };

  const dark = {
    primary: createThemeColor(input.primary, "dark"),
    accent: createThemeColor(input.accent, "dark"),
  };

  return {
    light,
    dark,
  };
}
