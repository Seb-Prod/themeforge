import type { HexColor } from "./color";


/**
 * Une nuance générée automatiquement.
 *
 * Exemple :
 * primary-50
 * primary-100
 * primary-500
 * primary-900
 */
export interface ColorShade {
  name: string;
  value: HexColor;
  contrastRatio?: number;
}


/**
 * Une échelle complète de nuances.
 */
export type ColorScale = Record<string, ColorShade>;