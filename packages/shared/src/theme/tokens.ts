/**
 * Tokens de design indépendants du thème.
 *
 * Ils représentent les valeurs utilisées
 * directement par les composants.
 */
export interface DesignTokens {
  /**
   * Rayons des bordures.
   */
  radius: {
    [key: string]: string;
  };

  /**
   * Échelle d'espacement.
   */
  spacing: {
    [key: string]: string;
  };

  /**
   * Ombres.
   */
  shadows: {
    [key: string]: string;
  };
}
