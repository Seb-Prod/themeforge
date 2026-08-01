import type { BaseColors } from "./color";
import type { SemanticColors } from "./tokens";

export interface ThemeDefinition {
  id?: string;
  name: string;
  colors: BaseColors;
  tokens?: SemanticColors;
}