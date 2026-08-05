/**
 * Tokens dimensionnels d'un composant.
 *
 * Exemple :
 * - hauteur
 * - padding
 * - taille de police
 * - rayon
 */
export interface ComponentSizeToken {
  height?: string;

  paddingX?: string;

  paddingY?: string;

  fontSize?: string;

  radius?: string;
}


/**
 * Tokens de taille d'un composant.
 */
export type ComponentSizeScale = Record<
  string,
  ComponentSizeToken
>;