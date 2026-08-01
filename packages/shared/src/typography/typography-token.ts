/**
 * Tailles typographiques disponibles.
 */
export type FontSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";


/**
 * Graisses disponibles.
 */
export type FontWeight =
  | "normal"
  | "medium"
  | "semibold"
  | "bold";


/**
 * Token typographique.
 */
export interface TypographyToken {

  /**
   * Taille de police.
   */
  size: string;

  /**
   * Hauteur de ligne.
   */
  lineHeight: string;

  /**
   * Graisse.
   */
  weight: FontWeight;
}


/**
 * Échelle typographique du thème.
 */
export type TypographyTokens =
  Record<
    FontSize,
    TypographyToken
  >;