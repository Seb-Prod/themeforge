import type { HexColor } from "./color";


/**
 * Couleurs utilisées par l'interface,
 * indépendamment de la palette.
 */
export interface SemanticColors {
  background: HexColor;

  surface: HexColor;
  surfaceElevated: HexColor;

  text: HexColor;
  textMuted: HexColor;

  border: HexColor;
}