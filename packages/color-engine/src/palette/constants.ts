/**
 * Étapes standard d'une palette.
 */
export const SCALE_STEPS = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;

export type ScaleStep = (typeof SCALE_STEPS)[number];

export type LightnessMap = Record<ScaleStep, number | null>;

/**
 * Luminosité des nuances du thème clair.
 */
export const LIGHT_SCALE_LIGHTNESS: LightnessMap = {
  50: 0.98,
  100: 0.95,
  200: 0.9,
  300: 0.82,
  400: 0.72,
  500: null,
  600: 0.52,
  700: 0.42,
  800: 0.32,
  900: 0.22,
  950: 0.16,
} as const;

/**
 * Luminosité des nuances du thème sombre.
 */
export const DARK_SCALE_LIGHTNESS: LightnessMap = {
  50: 0.18,
  100: 0.22,
  200: 0.28,
  300: 0.36,
  400: 0.48,
  500: null,
  600: 0.7,
  700: 0.8,
  800: 0.88,
  900: 0.94,
  950: 0.97,
};
