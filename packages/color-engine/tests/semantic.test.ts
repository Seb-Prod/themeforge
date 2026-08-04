import { describe, expect, it } from "vitest";
import {
  generateScale,
  generateSemanticTokens,
} from "../src";
import { createSemanticToken } from "../src/semantic/create-token";
import { SEMANTIC_RULES } from "../src/semantic/rules";

describe("semantic tokens", () => {
  it("generates all semantic variants", () => {
    const scale = generateScale("#a865cc");

    const tokens = generateSemanticTokens(scale);

    expect(tokens).toHaveProperty("solid");
    expect(tokens).toHaveProperty("soft");
    expect(tokens).toHaveProperty("outline");
    expect(tokens).toHaveProperty("ghost");
    expect(tokens).toHaveProperty("link");
  });


  it("generates token colors", () => {
    const scale = generateScale("#a865cc");

    const tokens = generateSemanticTokens(scale);

    const token =
      tokens.solid.default;

    expect(token.background).toMatch(/^#/);
    expect(token.text).toMatch(/^#/);
    expect(token.border).toMatch(/^#/);
  });


  it("uses automatic readable text color", () => {
    const scale = generateScale("#a865cc");

    const tokens = generateSemanticTokens(scale);

    const token =
      tokens.solid.default;

    expect(token.text).toBeDefined();
  });

  it("keeps transparent colors", () => {
    const scale = generateScale("#a865cc", "light");
    
    const token = createSemanticToken(
      SEMANTIC_RULES.outline.default,
      scale,
    );

    expect(token.background).toBe("transparent");
  });
});