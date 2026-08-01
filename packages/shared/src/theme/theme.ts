import type { BaseColors } from "../color";
import { RadiusTokens } from "../radius";
import { ShadowTokens } from "../shadow";
import { SpacingTokens } from "../spacing";
import { SurfaceTokens } from "../surface";
import { TypographyTokens } from "../typography";
import type { ThemePalette } from "./palette";

/**
 * Définition complète d'un thème ThemeForge.
 */
export interface ThemeDefinition {
  name: string;

  base: BaseColors;

  palette?: ThemePalette;

  surfaces?: SurfaceTokens;

  typography?: TypographyTokens;

  radius?: RadiusTokens;

  spacing?: SpacingTokens;

  shadow?: ShadowTokens;
}
