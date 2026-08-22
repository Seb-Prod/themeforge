import { createTheme, type ThemeInput } from "@themeforge/color-engine";

/** The editable source of truth from which the preview theme is generated. */
export const initialThemeInput: ThemeInput = {
  colors: {
    primary: "#a865cc",
    secondary: "#3E8E8A",
    accent: "#ffb703",
    success: "#4A9E43",
    warning: "#D4A00A",
    danger: "#C43318",
    info: "#3A6FA8",
    neutral: "#6b7280",
  },
   surfaces: {
    canvas: "#f9f5ea",     // fond global de la page (ex-"background")
    base: "#fdf9ef",       // surface neutre de référence (cartes plates, sections)
    raised: "#f8ecd1",     // surface légèrement élevée (ex-"card")
    overlay: "#fff",       // modales, popovers, dropdowns (ex-"modal")
    sunken: "#efe4c9",     // zones en retrait (inputs, wells, code blocks)
    border: "#e4d6b0",     // bordures/séparateurs cohérents avec le fond
  },
};

export const initialTheme = createTheme(initialThemeInput);
