import type { BaseColors } from "../color/base-colors";
import type { ThemePalette } from "./palette";


/**
 * Définition complète d'un thème ThemeForge.
 */
export interface ThemeDefinition {

  /**
   * Nom du thème.
   */
  name: string;


  /**
   * Couleurs choisies par l'utilisateur.
   */
  base: BaseColors;


  /**
   * Palette générée.
   */
  palette?: ThemePalette;

}