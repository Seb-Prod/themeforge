import type {
  ThemeDefinition,
  ThemeMode,
  ThemeScheme,
} from "./types";


/**
 * Retourne le schéma de couleur actif.
 */
export function getThemeScheme(
  theme: ThemeDefinition,
  mode: ThemeMode = "light",
): ThemeScheme {

  return theme[mode];
}