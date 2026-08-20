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
  surfaceColor: "#ffffff",
};

export const initialTheme = createTheme(initialThemeInput);
