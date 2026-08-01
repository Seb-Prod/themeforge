/**
 * Rayons disponibles.
 */
export type RadiusSize =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full";


/**
 * Tokens de rayon.
 */
export type RadiusTokens =
  Record<
    RadiusSize,
    string
  >;