import type { ThemeMode, ThemeSurfaces } from "./types";

export function generateSurfaces(
  mode: ThemeMode,
): ThemeSurfaces {
  if (mode === "dark") {
    return {
      background: "#09090b",
      surface: "#18181b",
      surfaceSecondary: "#27272a",
      surfaceTertiary: "#3f3f46",
      surfaceElevated: "#52525b",
    };
  }

  return {
    background: "#ffffff",
    surface: "#fafafa",
    surfaceSecondary: "#f4f4f5",
    surfaceTertiary: "#e4e4e7",
    surfaceElevated: "#ffffff",
  };
}