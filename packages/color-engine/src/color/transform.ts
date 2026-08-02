import type { OklchColor } from "./types";

export interface OklchTransformOptions {
  lightness: number;
  chromaFactor?: number;
}

export function adjustOklch(
  color: OklchColor,
  options: OklchTransformOptions,
): OklchColor {
  return {
    mode: "oklch",

    l: options.lightness,

    c: options.chromaFactor ? color.c * options.chromaFactor : color.c,

    h: color.h,

    alpha: color.alpha,
  };
}
