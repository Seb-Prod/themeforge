/**
 * Couleurs de base supportées par ThemeForge.
 */
export const THEME_COLOR_NAMES = [
  "primary",
  "accent",
  "success",
  "warning",
  "danger",
  "info",
  "neutral",
] as const;

export type ThemeColorName =
  typeof THEME_COLOR_NAMES[number];