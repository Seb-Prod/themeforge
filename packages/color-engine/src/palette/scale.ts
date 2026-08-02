export const SCALE_STEPS = [
  50,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  950,
] as const;


export type ScaleStep = typeof SCALE_STEPS[number];

export const LIGHTNESS_MAP = {
  50: 0.96,
  100: 0.91,
  200: 0.84,
  300: 0.75,
  400: 0.65,
  500: null,
  600: 0.45,
  700: 0.35,
  800: 0.25,
  900: 0.17,
  950: 0.12,
} as const;