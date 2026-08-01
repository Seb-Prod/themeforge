declare module "culori" {
  export interface Oklch {
    mode: "oklch";
    l: number;
    c: number;
    h?: number;
    alpha?: number;
  }

  export function converter(
    mode: "oklch"
  ): (color: unknown) => Oklch;

  export function formatHex(
    color: Oklch
  ): string;

  export function parse(
    color: string
  ): unknown;
}