import type { HexColor } from "@themeforge/shared";
import { parse } from "culori";

const LIGHT_TEXT: HexColor = "#ffffff";
const DARK_TEXT: HexColor = "#000000";

/**
 * Calcule la luminance relative WCAG d'une couleur RGB.
 */
function getRelativeLuminance(color: HexColor): number {
  const parsed = parse(color);

  if (!parsed || parsed.mode !== "rgb") {
    throw new Error(`Invalid RGB color: ${color}`);
  }

  const channels = [parsed.r, parsed.g, parsed.b].map((channel) => {
    return channel <= 0.03928
      ? channel / 12.92
      : Math.pow((channel + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

/**
 * Calcule le ratio de contraste WCAG.
 */
export function getContrastRatio(
  foreground: HexColor,
  background: HexColor,
): number {
  const l1 = getRelativeLuminance(foreground);
  const l2 = getRelativeLuminance(background);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Retourne la couleur de texte avec le meilleur contraste.
 */
export function getReadableTextColor(background: HexColor): HexColor {
  const lightContrast = getContrastRatio(LIGHT_TEXT, background);

  const darkContrast = getContrastRatio(DARK_TEXT, background);

  return lightContrast >= darkContrast ? LIGHT_TEXT : DARK_TEXT;
}
