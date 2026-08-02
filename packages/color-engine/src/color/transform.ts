import type { OklchColor } from "./types";
import type { ScaleStep } from "../palette/constants";

export function adjustOklch(
  color: OklchColor,
  step: ScaleStep,
  lightness: number,
): OklchColor {
  return {
    mode: "oklch",

    l: lightness,

    c: adjustChroma(color.c, step),

    h: color.h,

    alpha: color.alpha,
  };
}

function adjustChroma(chroma: number, step: ScaleStep): number {
  if (step <= 100 || step >= 900) {
    return chroma * 0.75;
  }

  return chroma;
}
