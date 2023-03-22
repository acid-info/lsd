export const safeConvertDateToString = (value: string) => {
  const date = new Date(value ?? undefined)
  const isValid = !Number.isNaN(+date)

  return {
    isValid,
    date: isValid ? date : new Date(),
  }
}

export const removeDateTimezoneOffset = (date: Date) =>
  new Date(+date - date.getTimezoneOffset() * 60 * 1000)

export const dateToISODateString = (date: Date) =>
  date.toISOString().split('T')[0]
