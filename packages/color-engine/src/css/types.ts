import type { ThemeMode } from "../theme";

/**
 * Une règle CSS générée par ThemeForge.
 */
export interface CssRule {
  /**
   * Sélecteur CSS.
   */
  selector: string;

  /**
   * Variables CSS associées.
   */
  declarations: Record<string, string>;
}

export type ThemeExportMode = ThemeMode | "all";

export interface ThemeExportOptions {
  mode?: ThemeExportMode;
}
