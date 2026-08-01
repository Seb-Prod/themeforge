import {
  convertToHex,
  convertToOklch,
} from "../color";

import {
  SCALE_STEPS,
  type ScaleStep,
} from "./scale";


type ColorScale = Record<
  ScaleStep,
  string
>;


/**
 * Génère une échelle OKLCH depuis une couleur.
 */
export function generateScale(
  color: string
): ColorScale {

  const base = convertToOklch(color);

  const scale = {} as ColorScale;


  for (const step of SCALE_STEPS) {

    const lightness = calculateLightness(step);

    scale[step] = convertToHex({
      mode: "oklch",
      l: lightness,
      c: base.c,
      h: base.h,
    });
  }


  return scale;
}


/**
 * Calcule la luminosité OKLCH.
 */
function calculateLightness(
  step: ScaleStep
): number {

  const values: Record<ScaleStep, number> = {
    50: 0.97,
    100: 0.92,
    200: 0.85,
    300: 0.75,
    400: 0.65,
    500: 0.55,
    600: 0.45,
    700: 0.35,
    800: 0.25,
    900: 0.18,
    950: 0.12,
  };


  return values[step];
}