import type { ColorScale, HexColor } from "@themeforge/shared";
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

export type ThemeScheme = Record<string, ThemeColor>;

export type ThemeInput = Record<string, HexColor>;

export interface ThemeDefinition {
  light: ThemeScheme;
  dark: ThemeScheme;
}

export type ThemeMode = "light" | "dark";
