/**
 * Niveaux d'ombres disponibles.
 */
export type ShadowSize =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl";


/**
 * Tokens d'ombres.
 */
export type ShadowTokens =
  Record<
    ShadowSize,
    string
  >;