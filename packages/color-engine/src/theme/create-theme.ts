import type { HexColor } from "@themeforge/shared";
import { generateSemanticTokens } from "../semantic";
import type { ThemeColor, ThemeDefinition, ThemeInput, ThemeMode } from "./types";
import { generateScale } from "../palette";

function createThemeColor(color: HexColor, mode: ThemeMode): ThemeColor {
  const scale = generateScale(color, mode);

  return {
    scale,
    semantic: generateSemanticTokens(scale),
  };
}

/**
 * Génère un thème complet.
 */
export function createTheme(input: ThemeInput): ThemeDefinition {
  const light = {} as ThemeDefinition["light"];
  const dark = {} as ThemeDefinition["dark"];

  Object.entries(input).forEach(([name, color]) => {
    light[name] = createThemeColor(color, "light");

    dark[name] = createThemeColor(color, "dark");
  });

  return {
    light,
    dark,
  };
}
