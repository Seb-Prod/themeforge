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

export interface ThemeSurfaces {
  background: HexColor;
  surface: HexColor;
  surfaceSecondary: HexColor;
  surfaceTertiary: HexColor;
  surfaceElevated: HexColor;
}

// export type ThemeScheme<T extends string = string> = Record<T, ThemeColor>;

export interface ThemeScheme<T extends string= string> {
  colors: Record<T, ThemeColor>;
  surfaces: ThemeSurfaces;
}

export type ThemeInput = Record<string, HexColor>;

export interface ThemeDefinition<T extends string = string> {
  light: ThemeScheme<T>;
  dark: ThemeScheme<T>;
}

export type ThemeMode = "light" | "dark";
