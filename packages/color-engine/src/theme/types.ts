import type { ColorScale } from "@themeforge/shared";
import type { SemanticColorTokens } from "../semantic";


export interface ThemeColor {

  /**
   * Palette brute générée.
   */
  scale: ColorScale;


  /**
   * Tokens utilisables par les composants.
   */
  semantic: SemanticColorTokens;
}


export interface ThemeDefinition {

  primary: ThemeColor;

  accent: ThemeColor;
}