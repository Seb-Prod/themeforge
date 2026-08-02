import type {
  ColorScale,
} from "@themeforge/shared";

import type {
  SemanticColorTokens,
  SemanticToken,
} from "./types";


function createToken(
  background: keyof ColorScale,
  text: keyof ColorScale,
  border: keyof ColorScale,
  scale: ColorScale
): SemanticToken {

  return {
    background: scale[background],
    text: scale[text],
    border: scale[border],
  };
}


/**
 * Génère les tokens sémantiques
 * depuis une palette.
 */
export function generateSemantic(
  scale: ColorScale
): SemanticColorTokens {

  return {

    solid: {
      default: createToken(
        500,
        50,
        500,
        scale
      ),

      hover: createToken(
        600,
        50,
        600,
        scale
      ),

      active: createToken(
        700,
        50,
        700,
        scale
      ),

      disabled: createToken(
        300,
        500,
        300,
        scale
      ),
    },


    soft: {
      default: createToken(
        100,
        700,
        100,
        scale
      ),

      hover: createToken(
        200,
        800,
        200,
        scale
      ),

      active: createToken(
        300,
        900,
        300,
        scale
      ),

      disabled: createToken(
        100,
        400,
        100,
        scale
      ),
    },


    outline: {
      default: createToken(
        50,
        600,
        500,
        scale
      ),

      hover: createToken(
        100,
        700,
        600,
        scale
      ),

      active: createToken(
        200,
        800,
        700,
        scale
      ),

      disabled: createToken(
        50,
        400,
        200,
        scale
      ),
    },


    ghost: {
      default: createToken(
        50,
        600,
        50,
        scale
      ),

      hover: createToken(
        100,
        700,
        100,
        scale
      ),

      active: createToken(
        200,
        800,
        200,
        scale
      ),

      disabled: createToken(
        50,
        400,
        50,
        scale
      ),
    },


    link: {
      default: createToken(
        50,
        600,
        50,
        scale
      ),

      hover: createToken(
        50,
        700,
        50,
        scale
      ),

      active: createToken(
        50,
        800,
        50,
        scale
      ),

      disabled: createToken(
        50,
        400,
        50,
        scale
      ),
    },
  };
}