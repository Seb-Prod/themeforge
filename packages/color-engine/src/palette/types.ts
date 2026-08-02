import type { ScaleStep, LightnessMap } from "./constants";

export interface ScaleOptions {
  lightness: LightnessMap;
  chromaMultiplier?: (
    step: ScaleStep,
    chroma: number,
  ) => number;
}