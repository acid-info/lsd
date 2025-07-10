export declare const settle: <R, E = Error>(
  promise: Promise<R> | (() => Promise<R>),
) => Promise<[R, undefined] | [undefined, E]>
export declare const settleSync: <R, E = Error>(
  func: () => R,
) => [R, undefined] | [undefined, E]
