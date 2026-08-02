/**
 * Interpolation linéaire.
 */
export function interpolate(
  from: number,
  to: number,
  factor: number
): number {
  return from + (to - from) * factor;
}