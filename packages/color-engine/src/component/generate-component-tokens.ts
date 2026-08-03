import type { ThemeDefinition } from "../theme";
import type { ComponentTokens } from "./types";

/**
 * Transforme un thème en tokens consommables
 * par les composants.
 */
export function generateComponentTokens(
  theme: ThemeDefinition,
): ComponentTokens[] {
  return Object.entries(theme.light.colors).map(([color, value]) => ({
    color,
    semantic: value.semantic,
  }));
}
