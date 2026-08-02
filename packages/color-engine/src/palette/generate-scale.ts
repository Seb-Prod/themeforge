import { ColorScale, ColorScaleStep, HexColor } from "@themeforge/shared";
import { adjustOklch, convertToHex, convertToOklch } from "../color";

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

    scale[step] = convertToHex(adjustOklch(base, step, lightness));
  }

  return scale;
}
