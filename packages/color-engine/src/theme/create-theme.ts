import type { HexColor } from "@themeforge/shared";
import { generateSemanticTokens } from "../semantic";
import type {
  ThemeColor,
  ThemeDefinition,
  ThemeInput,
  ThemeMode,
} from "./types";
import { generateScale } from "../palette";
import { generateSurfaces } from "./generate-surfaces";

function createThemeColor(color: HexColor, mode: ThemeMode): ThemeColor {
  const scale = generateScale(color, mode);

  return {
    source: color,
    scale,
    semantic: generateSemanticTokens(scale),
  };
}

/**
 * Génère un thème complet.
 */
export function createTheme(input: ThemeInput): ThemeDefinition {
  const lightColors: Record<string, ThemeColor> = {};
  const darkColors: Record<string, ThemeColor> = {};

  Object.entries(input).forEach(([name, color]) => {
    lightColors[name] = createThemeColor(color, "light");
    darkColors[name] = createThemeColor(color, "dark");
  });

  return {
    light: {
      colors: lightColors,
      surfaces: generateSurfaces("light"),
    },
    dark: {
      colors: darkColors,
      surfaces: generateSurfaces("dark"),
    },
  };
}
