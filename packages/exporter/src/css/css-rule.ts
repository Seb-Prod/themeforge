/**
 * Représente une règle CSS.
 */
export interface CssRule {
  /**
   * Sélecteur CSS.
   */
  selector: string;

  /**
   * Déclarations CSS.
   */
  declarations: Record<string, string>;
}
