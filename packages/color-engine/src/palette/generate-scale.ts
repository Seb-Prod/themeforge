import { ColorScale, ColorScaleStep, HexColor } from "@themeforge/shared";
import { convertToHex, convertToOklch } from "../color";

import { SCALE_STEPS } from "./scale";
import {
  DARK_SCALE_LIGHTNESS,
  LIGHT_SCALE_LIGHTNESS,
  LightnessMap,
} from "./constants";
import { ThemeMode } from "../theme";
import { ScaleOptions } from "./types";

/**
 * Génère une échelle OKLCH depuis une couleur.
 */
export function generateScale(
  color: HexColor,
  mode: ThemeMode = "light",
): ColorScale {
  return generateScaleFromOptions(color, getScaleOptions(mode));
}

function getScaleOptions(mode: ThemeMode): ScaleOptions {
  return {
    lightness: mode === "dark" ? DARK_SCALE_LIGHTNESS : LIGHT_SCALE_LIGHTNESS,

    chromaMultiplier: adjustChroma,
  };
}

function generateScaleFromOptions(
  color: HexColor,
  options: ScaleOptions,
): ColorScale {
  const base = convertToOklch(color);

  const scale = {} as ColorScale;

  for (const step of SCALE_STEPS) {
    const lightness = options.lightness[step];

    if (lightness === null) {
      scale[step] = color;
      continue;
    }

    scale[step] = convertToHex({
      mode: "oklch",
      l: lightness,
      c: options.chromaMultiplier
        ? options.chromaMultiplier(step, base.c)
        : base.c,
      h: base.h,
    });
  }

  return scale;
}

function adjustChroma(
  step: ColorScaleStep,
  c: number,
): number {
  if (step <= 100 || step >= 900) {
    return c * 0.75;
  }

  return c;
}
