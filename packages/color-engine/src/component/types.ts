import type { SemanticColorTokens } from "../semantic";

/**
 * Tokens disponibles pour une couleur
 * utilisable par les composants.
 */
export interface ComponentTokens {
  /**
   * Nom de la couleur utilisée par le composant.
   */
  color: string;

  /**
   * Tokens sémantiques disponibles.
   */
  semantic: SemanticColorTokens;
}
