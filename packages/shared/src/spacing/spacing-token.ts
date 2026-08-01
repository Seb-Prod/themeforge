/**
 * Tailles d'espacement disponibles.
 */
export type SpacingSize =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";


/**
 * Tokens d'espacement.
 */
export type SpacingTokens =
  Record<
    SpacingSize,
    string
  >;