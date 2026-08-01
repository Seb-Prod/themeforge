import type { HexColor } from "./hex-color";


/**
 * Niveaux d'une échelle de couleur.
 */
export type ColorScaleStep =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;


/**
 * Échelle complète d'une couleur.
 *
 * Exemple :
 *
 * {
 *   50: "#fdf...",
 *   500: "#a865cc",
 *   950: "#..."
 * }
 */
export type ColorScale =
  Record<
    ColorScaleStep,
    HexColor
  >;