/**
 * Tokens dimensionnels d'un composant.
 *
 * Les propriétés sont libres afin de permettre
 * à chaque composant de définir ses propres tokens.
 *
 * Exemples :
 * - height
 * - padding
 * - gap
 * - fontSize
 * - radius
 * - iconSize
 */
export type ComponentSizeToken = Record<string, string>;

/**
 * Tokens de taille d'un composant.
 */
export type ComponentSizeScale = Record<string, ComponentSizeToken>;
