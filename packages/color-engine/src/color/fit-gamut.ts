import type { OklchColor } from "./types";
import { isInGamut } from "./gamut";

const MAX_ITERATIONS = 50;

/**
 * Réduit le chroma d'une couleur OKLCH
 * jusqu'à rentrer dans le gamut RGB.
 */
export function fitToGamut(
  color: OklchColor,
): OklchColor {

  if (isInGamut(color)) {
    return color;
  }


  let chroma = color.c;


  for (
    let i = 0;
    i < MAX_ITERATIONS;
    i++
  ) {

    chroma *= 0.95;


    const candidate = {
      ...color,
      c: chroma,
    };


    if (isInGamut(candidate)) {
      return candidate;
    }
  }


  return {
    ...color,
    c: 0,
  };
}