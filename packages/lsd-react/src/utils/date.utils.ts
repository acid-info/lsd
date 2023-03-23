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

export const setHour = (date: Date) => date.setHours(0, 0, 0, 0)

export const checkDateRange = (date: Date, start: Date, end: Date) => {
  if (setHour(start) <= setHour(date) && setHour(end) >= setHour(date))
    return true
  else return false
}

export const checkStartDate = (date: Date, start: Date) => {
  if (setHour(date) === setHour(start)) return true
  else return false
}
