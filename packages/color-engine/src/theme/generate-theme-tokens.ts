import type { ThemeTokens, ThemeSurfaces } from "./types";
import { getReadableTextColor } from "../color";

export function generateThemeTokens(surfaces: ThemeSurfaces): ThemeTokens {
  return {
    background: surfaces.background,

    foreground: getReadableTextColor(surfaces.background),

    border: surfaces.surfaceTertiary,

    muted: surfaces.surfaceSecondary,
  };
}
