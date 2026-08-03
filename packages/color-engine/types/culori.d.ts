declare module "culori" {
  export interface Rgb {
    mode: "rgb";
    r: number;
    g: number;
    b: number;
    alpha?: number;
  }

  export interface Oklch {
    mode: "oklch";
    l: number;
    c: number;
    h?: number;
    alpha?: number;
  }

  export type Color =
    | Rgb
    | Oklch;

  export function inGamut(
    mode?: string,
  ): (color: unknown) => boolean;

  export function converter<T = unknown>(
    mode: string,
  ): (color: unknown) => T;

  export function formatHex(
    color: Oklch,
  ): string;

  export function parse(
    color: string,
  ): Color | undefined;
}