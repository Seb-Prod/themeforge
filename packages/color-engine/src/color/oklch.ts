import { converter, formatHex, parse, type Oklch } from "culori";
import type { OklchColor } from "./types";
import { HexColor } from "@themeforge/shared";
import { fitToGamut } from "./fit-gamut";

const toOklch = converter<Oklch>("oklch");
/**
 * Convertit une couleur en OKLCH normalisé.
 */
export function convertToOklch(color: string): OklchColor {
  const parsed = parse(color);

  if (!parsed) {
    throw new Error(`Invalid color: ${color}`);
  }

  const result = toOklch(parsed);

  if (result.h === undefined) {
    throw new Error(`Color has no hue: ${color}`);
  }

  return {
    mode: "oklch",
    l: result.l,
    c: result.c,
    h: result.h,
    alpha: result.alpha,
  };
}

function ensureHexColor(value: string): HexColor {
  if (!value.startsWith("#")) {
    throw new Error(`Invalid hex color: ${value}`);
  }

  return value as HexColor;
}

/**
 * Convertit une couleur OKLCH en HEX.
 */
export function convertToHex(
  color: OklchColor,
): HexColor {

  const fitted = fitToGamut(color);

  const hex = formatHex({
    mode: "oklch",
    l: fitted.l,
    c: fitted.c,
    h: fitted.h,
    alpha: fitted.alpha,
  } as Oklch);

  return ensureHexColor(hex);
}