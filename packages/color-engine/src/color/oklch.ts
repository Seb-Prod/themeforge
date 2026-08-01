import {
  converter,
  formatHex,
  parse,
  type Oklch,
} from "culori";

import type { OklchColor } from "./types";


const toOklch = converter("oklch");


/**
 * Convertit une couleur en OKLCH normalisé.
 */
export function convertToOklch(
  color: string
): OklchColor {

  const parsed = parse(color);

  if (!parsed) {
    throw new Error(
      `Invalid color: ${color}`
    );
  }

  const result = toOklch(parsed);

  if (result.h === undefined) {
    throw new Error(
      `Color has no hue: ${color}`
    );
  }

  return {
    mode: "oklch",
    l: result.l,
    c: result.c,
    h: result.h,
    alpha: result.alpha,
  };
}


/**
 * Convertit une couleur OKLCH en HEX.
 */
export function convertToHex(
  color: OklchColor
): string {

  return formatHex({
    mode: "oklch",
    l: color.l,
    c: color.c,
    h: color.h,
    alpha: color.alpha,
  } as Oklch);
}