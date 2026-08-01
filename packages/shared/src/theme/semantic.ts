import type { HexColor } from "../color/hex-color";
import type { SemanticLevel } from "../component/semantic-level";
import type { Variant } from "../component/variant";
import type { State } from "../component/state";

/**
 * Token couleur utilisé par un composant.
 */
export interface ColorToken {
  background: HexColor;

  foreground: HexColor;

  border: HexColor;
}

/**
 * Ensemble des tokens pour une variante.
 */
export type VariantTokens = Record<State, ColorToken>;

/**
 * Tokens sémantiques d'une intensité.
 */
export type SemanticTokens = Record<Variant, VariantTokens>;

/**
 * Tokens d'une couleur.
 */
export type ThemeColorTokens = Record<SemanticLevel, SemanticTokens>;
