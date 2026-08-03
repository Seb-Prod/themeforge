import type { ColorScale, HexColor } from "@themeforge/shared";
import type { SemanticColorTokens } from "../semantic";

export interface ThemeColor {
  /**
   * Couleur d'origine fournie par l'utilisateur.
   */
  source: HexColor;

  /**
   * Palette brute générée.
   */
  scale: ColorScale;

  /**
   * Tokens utilisables par les composants.
   */
  semantic: SemanticColorTokens;
}

export type ThemeScheme<T extends string = string> = Record<T, ThemeColor>;

export type ThemeInput = Record<string, HexColor>;

export interface ThemeDefinition<T extends string = string> {
  light: ThemeScheme<T>;
  dark: ThemeScheme<T>;
}

export type ThemeMode = "light" | "dark";
