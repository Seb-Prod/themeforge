import type { DesignTokens } from "@themeforge/shared";

import { defaultRadius, defaultSpacing, defaultShadows } from "./tokens";
import { componentTokens } from "./components";

export function createDesignTokens(): DesignTokens {
  return {
    radius: defaultRadius,
    spacing: defaultSpacing,
    shadows: defaultShadows,
    components: componentTokens,
  };
}
