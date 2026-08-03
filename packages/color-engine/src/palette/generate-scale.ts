import type { ColorScale, HexColor } from "@themeforge/shared";
import { adjustOklch, convertToHex, convertToOklch, fitToGamut, isInGamut } from "../color";
import { SCALE_STEPS } from "./scale";
import type { ScaleStep } from "./scale";
import { DARK_SCALE_LIGHTNESS, LIGHT_SCALE_LIGHTNESS } from "./constants";
import type { ThemeMode } from "../theme";
import type { ScaleOptions } from "./types";

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

function getChromaFactor(step: ScaleStep): number {
  if (step <= 100 || step >= 900) {
    return 0.75;
  }

  return 1;
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

    const adjusted = adjustOklch(base, {
      lightness,
      chromaFactor: getChromaFactor(step),
    });

    scale[step] = convertToHex(fitToGamut(adjusted));
  }

  return scale;
}
