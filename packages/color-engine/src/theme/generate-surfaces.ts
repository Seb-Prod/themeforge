import type { HexColor } from "@themeforge/shared";
import {
  adjustOklch,
  convertToHex,
  convertToOklch,
} from "../color";

import type {
  ThemeMode,
  ThemeSurfaces,
} from "./types";


const DEFAULT_SURFACE_COLOR: HexColor = "#ffffff";


export function generateSurfaces(
  mode: ThemeMode,
  source: HexColor = DEFAULT_SURFACE_COLOR,
  overrides?: Partial<ThemeSurfaces>,
): ThemeSurfaces {

  const base = convertToOklch(source);


  const surfaces =
    mode === "light"
      ? {
          background: adjust(base, 1),
          surface: adjust(base, 0.97),
          surfaceSecondary: adjust(base, 0.94),
          surfaceTertiary: adjust(base, 0.88),
          surfaceElevated: adjust(base, 1),
        }
      : {
          background: adjust(base, 0.04),
          surface: adjust(base, 0.08),
          surfaceSecondary: adjust(base, 0.12),
          surfaceTertiary: adjust(base, 0.18),
          surfaceElevated: adjust(base, 0.22),
        };


  return {
    ...surfaces,
    ...overrides,
  };
}


function adjust(
  color: ReturnType<typeof convertToOklch>,
  lightness: number,
): HexColor {

  return convertToHex(
    adjustOklch(color,{
      lightness,
      chromaFactor:0,
    }),
  );
}