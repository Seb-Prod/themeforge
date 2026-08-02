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

export interface ThemeScheme {
  primary: ThemeColor;
  accent: ThemeColor;
}

export interface ThemeDefinition {
  light: ThemeScheme;
  dark: ThemeScheme;
}

export type ThemeMode = "light" | "dark";
