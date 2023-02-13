export const createCounter = (start = 0) => {
  let i = start - 1

  return () => {
    i++

    return i
  }
}
