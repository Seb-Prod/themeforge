import type { HexColor } from "@themeforge/shared";

/**
 * Variantes visuelles disponibles pour une couleur.
 */
export type SemanticVariant = "solid" | "soft" | "outline" | "ghost" | "link";

/**
 * États interactifs d'un composant.
 */
export type SemanticState =
  | "default"
  | "hover"
  | "active"
  | "focus"
  | "disabled";

export type CssColor = HexColor | "transparent";

/**
 * Tokens exposés par une variante.
 *
 * Exemple :
 *
 * solid.default.background
 * solid.hover.text
 */
export interface SemanticToken {
  background: CssColor;
  text: HexColor;
  border: CssColor;
}

/**
 * Ensemble des tokens sémantiques
 * pour une couleur.
 */
export type SemanticColorTokens = {
  [variant in SemanticVariant]: {
    [state in SemanticState]: SemanticToken;
  };
};
