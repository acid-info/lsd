export const pairs = <K extends string = string, T = any>(
  obj: string[] | Object,
  map: (key: K, index: number) => T,
): Record<K, T> =>
  Object.fromEntries(
    (Array.isArray(obj) ? obj : Object.keys(obj)).map((key, index) => [
      key,
      map(key, index),
    ]),
  )
