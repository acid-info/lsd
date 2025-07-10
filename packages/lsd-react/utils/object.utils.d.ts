export declare const pairs: <K extends string = string, T = any>(
  obj: string[] | Object,
  map: (key: K, index: number) => T,
) => Record<K, T>
