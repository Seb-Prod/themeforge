/**
 * Une couleur hexadécimale.
 */
export type HexColor = `#${string}`;


/**
 * Couleurs fournies comme point de départ
 * par le designer.
 */
export interface BaseColors {
  background: HexColor;
  primary: HexColor;
  secondary: HexColor;
  accent?: HexColor;
}