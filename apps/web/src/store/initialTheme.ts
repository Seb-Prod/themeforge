import { createTheme, type ThemeInput } from "@themeforge/color-engine";

/** The editable source of truth from which the preview theme is generated. */
export const initialThemeInput: ThemeInput = {
	colors: {
		primary: "#a865cc",
		accent: "#ffb703",
	},
	surfaceColor: "#ffffff",
};

export const initialTheme = createTheme(initialThemeInput);
