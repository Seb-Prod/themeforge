import { ColorScale } from "@themeforge/shared";
import type { SemanticVariant, SemanticState } from "./types";

export type SemanticRule = {
  background: keyof ColorScale;
  text: keyof ColorScale | "auto";
  border: keyof ColorScale;
};

export type SemanticVariantRules = {
  [variant in SemanticVariant]: {
    [state in SemanticState]: SemanticRule;
  };
};

export const SEMANTIC_RULES: SemanticVariantRules = {
  solid: {
    default: {
      background: 500,
      text: "auto",
      border: 500,
    },

    hover: {
      background: 600,
      text: "auto",
      border: 600,
    },

    active: {
      background: 700,
      text: "auto",
      border: 700,
    },

    focus: {
      background: 600,
      text: "auto",
      border: 600,
    },

    disabled: {
      background: 300,
      text: "auto",
      border: 300,
    },
  },
  soft: {
    default: {
      background: 100,
      text: "auto",
      border: 100,
    },

    hover: {
      background: 200,
      text: "auto",
      border: 200,
    },

    active: {
      background: 300,
      text: "auto",
      border: 300,
    },

    focus: {
      background: 200,
      text: "auto",
      border: 200,
    },

    disabled: {
      background: 100,
      text: "auto",
      border: 100,
    },
  },
  outline: {
    default: {
      background: 50,
      text: "auto",
      border: 500,
    },

    hover: {
      background: 100,
      text: "auto",
      border: 600,
    },

    active: {
      background: 200,
      text: "auto",
      border: 700,
    },

    focus: {
      background: 100,
      text: "auto",
      border: 600,
    },

    disabled: {
      background: 50,
      text: "auto",
      border: 200,
    },
  },
  ghost: {
    default: {
      background: 50,
      text: "auto",
      border: 50,
    },

    hover: {
      background: 100,
      text: "auto",
      border: 100,
    },

    active: {
      background: 200,
      text: "auto",
      border: 200,
    },

    focus: {
      background: 100,
      text: "auto",
      border: 100,
    },

    disabled: {
      background: 50,
      text: "auto",
      border: 50,
    },
  },
  link: {
    default: {
      background: 50,
      text: "auto",
      border: 50,
    },

    hover: {
      background: 50,
      text: "auto",
      border: 50,
    },

    active: {
      background: 50,
      text: "auto",
      border: 50,
    },

    focus: {
      background: 50,
      text: "auto",
      border: 50,
    },

    disabled: {
      background: 50,
      text: "auto",
      border: 50,
    },
  },
};
