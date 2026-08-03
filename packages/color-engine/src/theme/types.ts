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

export type ThemeSurfaces = Record<string, HexColor>;

export interface ThemeScheme<T extends string = string> {
  colors: Record<T, ThemeColor>;
  surfaces: ThemeSurfaces;
}

export interface ThemeInput {
  /**
   * Couleurs principales du thème.
   */
  colors: Record<string, HexColor>;

  /**
   * Couleur de référence des surfaces.
   */
  surfaceColor?: HexColor;

  /**
   * Surfaces personnalisées.
   */
  surfaces?: Partial<ThemeSurfaces>;
}

export interface ThemeDefinition<T extends string = string> {
  light: ThemeScheme<T>;
  dark: ThemeScheme<T>;
}

export type ThemeMode = "light" | "dark";
