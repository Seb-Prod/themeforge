import type {
  ThemeScheme,
} from "./types";


/**
 * Génère un thème sombre à partir
 * d'un thème clair.
 *
 * Version initiale :
 * conserve les tokens.
 *
 * La transformation OKLCH
 * sera ajoutée ensuite.
 */
export function generateDarkTheme(
  light: ThemeScheme,
): ThemeScheme {

  return {
    ...light,
  };

}