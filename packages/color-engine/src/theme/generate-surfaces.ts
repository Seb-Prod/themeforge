import type { ThemeMode, ThemeSurfaces } from "./types";

const DEFAULT_SURFACES: Record<ThemeMode, ThemeSurfaces> = {
  light: {
    background: "#ffffff",
    surface: "#fafafa",
    surfaceSecondary: "#f4f4f5",
    surfaceTertiary: "#e4e4e7",
    surfaceElevated: "#ffffff",
  },

  dark: {
    background: "#09090b",
    surface: "#18181b",
    surfaceSecondary: "#27272a",
    surfaceTertiary: "#3f3f46",
    surfaceElevated: "#52525b",
  },
};

/**
 * Génère les surfaces du thème.
 *
 * Les valeurs fournies par l'utilisateur
 * remplacent les valeurs par défaut.
 */
export function generateSurfaces(
  mode: ThemeMode,
  overrides?: Partial<ThemeSurfaces>,
): ThemeSurfaces {
  return {
    ...DEFAULT_SURFACES[mode],
    ...overrides,
  };
}
