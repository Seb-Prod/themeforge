import { inGamut } from "culori";

import type { OklchColor } from "./types";

const isInRgbGamut = inGamut("rgb");

export function isInGamut(
  color: OklchColor,
): boolean {
  return isInRgbGamut(color);
}