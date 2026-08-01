/**
 * Couleurs principales fournies par l'utilisateur
 */
export interface BaseColors {
  background: string;
  primary: string;
  secondary: string;
  accent?: string;
}

/**
 * Une nuance générée à partir d'une couleur source
 */
export interface ColorShade {
  value: string;
  lightness: number;
  contrast?: number;
}

/**
 * Palette complète générée automatiquement
 */
export interface GeneratedPalette {
  primary: Record<string, ColorShade>;
  secondary: Record<string, ColorShade>;

  surfaces: {
    background: string;
    surface: string;
    elevated: string;
  };

  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
}

/**
 * Un thème ThemeForge
 */
export interface ThemeDefinition {
  id?: string;

  name: string;

  colors: BaseColors;

  palette?: GeneratedPalette;
}