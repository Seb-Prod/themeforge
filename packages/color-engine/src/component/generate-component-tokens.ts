import type { ThemeDefinition } from "../theme";

import type { ComponentTokens } from "./types";

/**
 * Transforme un thème en tokens consommables
 * par les composants.
 */
export function generateComponentTokens(
  theme: ThemeDefinition,
): ComponentTokens[] {
  return Object.entries(theme).map(([color, value]) => ({
    color,
    variants: value.semantic,
  }));
}
