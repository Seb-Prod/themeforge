import { HexColor } from "./color";

/**
 * Intensité d'une couleur.
 */
export type SemanticLevel =
  | "subtle"
  | "soft"
  | "default"
  | "strong"
  | "emphasis";

export interface SemanticColorToken {
  background: HexColor;
  foreground: HexColor;
  border: HexColor;
}
