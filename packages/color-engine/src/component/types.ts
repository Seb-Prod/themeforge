import type {
  SemanticColorTokens,
} from "../semantic";


/**
 * Tokens disponibles pour une couleur
 * utilisable par les composants.
 */
export interface ComponentTokens {

  /**
   * Nom de la couleur.
   *
   * Exemple :
   * primary
   * accent
   */
  color: string;


  /**
   * Variantes sémantiques associées.
   */
  variants: SemanticColorTokens;
}