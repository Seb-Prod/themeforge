import { HexColor } from "./hex-color";

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