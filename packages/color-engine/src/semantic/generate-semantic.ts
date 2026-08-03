import type { ColorScale } from "@themeforge/shared";

import type { SemanticColorTokens } from "./types";
import { SEMANTIC_RULES } from "./rules";
import { createSemanticToken } from "./create-token";
import { entries } from "../utils";

/**
 * Génère les tokens sémantiques
 * depuis une palette.
 */
export function generateSemanticTokens(scale: ColorScale): SemanticColorTokens {
  const tokens = {} as SemanticColorTokens;

  entries(SEMANTIC_RULES).forEach(([variant, states]) => {
    if (!states) {
      return;
    }

    tokens[variant] = {} as SemanticColorTokens[typeof variant];

    entries(states).forEach(([state, rule]) => {
      tokens[variant][state] = createSemanticToken(rule, scale);
    });
  });

  return tokens;
}
