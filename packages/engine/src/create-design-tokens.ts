import type { DesignTokens } from "@themeforge/shared";

import { defaultRadius, defaultSpacing, defaultShadows } from "./tokens";

export function createDesignTokens(): DesignTokens {
  return {
    radius: defaultRadius,
    spacing: defaultSpacing,
    shadows: defaultShadows,
  };
}
