import type { HexColor } from "../color/hex-color";

/**
 * Couleurs utilisées pour les surfaces d'une interface.
 */
export interface SurfaceTokens {
  /**
   * Fond global de l'application.
   */
  background: HexColor;

  /**
   * Surface principale des cartes et panneaux.
   */
  surface: HexColor;

  /**
   * Surface secondaire.
   */
  surfaceSecondary: HexColor;

  /**
   * Surface tertiaire.
   */
  surfaceTertiary: HexColor;

  /**
   * Surface élevée (modales, popovers).
   */
  surfaceElevated: HexColor;
}