import { ColorScale, ColorRole, HexColor } from "../color";

/**
 * Une nuance d'une couleur.
 *
 * Exemple :
 * primary-500
 */
export interface ColorShade {
  value: HexColor;

  /**
   * Niveau Tailwind-like.
   */
  level: number;
}

/**
 * Palette complète du thème.
 */
export type ThemePalette = Partial<Record<ColorRole, ColorScale>>;
