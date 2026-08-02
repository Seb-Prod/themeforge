import { ColorScale, ColorScaleStep, HexColor } from "@themeforge/shared";
import { convertToHex, convertToOklch } from "../color";

import { SCALE_STEPS } from "./scale";
import { DARK_SCALE_LIGHTNESS, LIGHT_SCALE_LIGHTNESS, LightnessMap } from "./constants";
import { ThemeMode } from "../theme";

/**
 * Génère une échelle OKLCH depuis une couleur.
 */
export function generateScale(
  color: HexColor,
  mode: ThemeMode = "light",
): ColorScale {

  const lightnessMap =
    mode === "dark"
      ? DARK_SCALE_LIGHTNESS
      : LIGHT_SCALE_LIGHTNESS;

  return generateScaleFromLightness(
    color,
    lightnessMap,
  );
}

function generateScaleFromLightness(
  color: HexColor,
  lightnessMap: LightnessMap,
): ColorScale {
  const base = convertToOklch(color);

  const scale = {} as ColorScale;

  for (const step of SCALE_STEPS) {
    const lightness = lightnessMap[step];

    if (lightness === null) {
      scale[step] = color;
      continue;
    }

    scale[step] = convertToHex({
      mode: "oklch",
      l: lightness,
      c: adjustChroma(base.c, step),
      h: base.h,
    });
  }

  return scale;
}

function adjustChroma(c: number, step: ColorScaleStep): number {
  if (step <= 100 || step >= 900) {
    return c * 0.75;
  }

  return c;
}
