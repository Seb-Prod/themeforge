import type { ColorScale } from "@themeforge/shared";
import type { SemanticToken } from "./types";
import type { SemanticRule } from "./rules";
import { getReadableTextColor } from "../color";

export function createSemanticToken(
  rule: SemanticRule,
  scale: ColorScale,
): SemanticToken {
  const background = resolveColor(rule.background, scale);

  return {
    background,

    text:
      rule.text === "auto"
        ? getReadableTextColor(background === "transparent" ? scale[500] : background)
        : scale[rule.text],

    border: resolveColor(rule.border, scale),
  };
}

function resolveColor(
  value: keyof ColorScale | "transparent",
  scale: ColorScale,
) {
  return value === "transparent" ? "transparent" : scale[value];
}
