import type { BaseColors } from "../color/base-colors";
import { SurfaceTokens } from "../surface";
import type { ThemePalette } from "./palette";


/**
 * Définition complète d'un thème ThemeForge.
 */
export interface ThemeDefinition {
  name: string;

  base: BaseColors;

  palette?: ThemePalette;

  surfaces?: SurfaceTokens;

}