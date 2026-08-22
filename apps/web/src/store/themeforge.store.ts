import {
  createTheme,
  type ThemeDefinition,
  type ThemeInput,
  type ThemeMode,
} from "@themeforge/color-engine";
import type { DesignTokens, HexColor } from "@themeforge/shared";
import { create } from "zustand";

import { initialTheme, initialThemeInput } from "./initialTheme";
import { initialTokens } from "./initialTokens";

type ThemeforgeState = {
  /** Editable input. The rendered theme is always derived from this value. */
  themeInput: ThemeInput;
  theme: ThemeDefinition;
  tokens: DesignTokens;
  mode: ThemeMode;

  /** Nom de la couleur actuellement affichée en aperçu dans le panneau central (null = aucun aperçu). */
  previewedColor: string | null;
  previewedSurface: string | null;

  setTheme(theme: ThemeDefinition): void;
  setThemeInput(input: ThemeInput): void;
  setTokens(tokens: DesignTokens): void;
  setMode(mode: ThemeMode): void;
  updateColor(name: string, value: HexColor): void;
  updateSurface(name: string, value: HexColor): void;
  setPreviewedColor(name: string | null): void;
  setPreviewedSurface(name: string | null): void;
};

export const useThemeforgeStore = create<ThemeforgeState>((set) => ({
  themeInput: initialThemeInput,
  theme: initialTheme,
  tokens: initialTokens,
  mode: "light",
  previewedColor: null,
  previewedSurface:null,

  setTheme: (theme) => set({ theme }),

  setThemeInput: (themeInput) =>
    set({
      themeInput,
      theme: createTheme(themeInput),
    }),

  setTokens: (tokens) => set({ tokens }),

  setMode: (mode) => set({ mode }),

  updateColor: (name, value) =>
    set((state) => {
      const themeInput: ThemeInput = {
        ...state.themeInput,
        colors: {
          ...state.themeInput.colors,
          [name]: value,
        },
      };

      return {
        themeInput,
        theme: createTheme(themeInput),
      };
    }),

  updateSurface: (name, value) =>
    set((state) => {
      const themeInput: ThemeInput = {
        ...state.themeInput,
        surfaces: {
          ...state.themeInput.surfaces,
          [name]: value,
        },
      };

      return {
        themeInput,
        theme: createTheme(themeInput),
      };
    }),

  setPreviewedColor: (name) => set({ previewedColor: name }),

  setPreviewedSurface: (name) => set({ previewedSurface: name }),
}));
