/**
 * Version typée de Object.entries().
 */
export function entries<T extends object>(
  value: T,
): [keyof T, T[keyof T]][] {
  return Object.entries(value) as [
    keyof T,
    T[keyof T],
  ][];
}