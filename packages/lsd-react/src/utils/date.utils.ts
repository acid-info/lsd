import { OnDatesChangeProps, UseMonthResult } from '@datepicker-react/hooks'
import { CalendarType } from '../components/client/Calendar'
import { DateRangePickerProps } from '../components/client/DateRangePicker'
import styles from '../components/client/Calendar/Calendar.module.css'

type SafeConvertDateResult = {
  isValid: boolean
  date: Date | null
}

export const safeConvertDate = (
  value: string | undefined,
  minDate: Date,
  maxDate: Date,
): SafeConvertDateResult => {
  if (!value) return { isValid: false, date: null }
  // If we call new Date() without 'T00:00:00', the resulting Date object may be incorrect.
  // For example, in my timezone (GMT+1) if I do new Date('1900-01-01')
  // I'll get back 'Dec 31 1899 23:23:15'. But, doing new Date('1900-01-01T00:00:00') works.
  const date = new Date(value + 'T00:00:00')
  const isValid = !Number.isNaN(+date) && date >= minDate && date <= maxDate

  return {
    isValid,
    date,
  }
}

export const adjustedTimezoneISOString = (date: Date): string => {
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
  return localDate.toISOString().split('T')[0]
}

export const resetHours = (date: Date) => date.setHours(0, 0, 0, 0)

export const isDateWithinRange = (
  date: Date | undefined,
  start: Date | null,
  end: Date | null,
): boolean => {
  if (!date || !start || !end) return false

  return (
    resetHours(start) <= resetHours(date) && resetHours(end) >= resetHours(date)
  )
}

export const isSameDay = (
  firstDate: Date | null | undefined,
  secondDate: Date | null | undefined,
): boolean => {
  if (!firstDate || !secondDate) return false

  const isoStringFirstDate = adjustedTimezoneISOString(firstDate)
  const isoStringSecondDate = adjustedTimezoneISOString(secondDate)

  return isoStringFirstDate === isoStringSecondDate
}

type NewDates = {
  newStartDate: Date | null
  newEndDate: Date | null
}

export const getNewDates = (
  calendarType: CalendarType | null,
  startDateState: Date | null,
  endDateState: Date | null,
  dateChangeProps: OnDatesChangeProps,
): NewDates => {
  let newStartDate = startDateState
  let newEndDate = endDateState
  const selectedDate = dateChangeProps.startDate

  if (!selectedDate) {
    return {
      newStartDate,
      newEndDate,
    }
  }

  if (calendarType === 'startDate') {
    if (
      !newEndDate ||
      (newEndDate && selectedDate.getTime() <= newEndDate.getTime())
    ) {
      newStartDate = selectedDate
    }
  } else if (calendarType === 'endDate') {
    if (
      !newStartDate ||
      (newStartDate && selectedDate.getTime() >= newStartDate.getTime())
    ) {
      newEndDate = selectedDate
    }
  }

  return {
    newStartDate,
    newEndDate,
  }
}

// In the days array, days from the current month are represented as objects with a date property.
// Days from the previous month are represented as numbers.
// This function finds and returns the first object (i.e. a day from the current month).
const getStartDateOfMonth = (days: UseMonthResult['days']): Date => {
  // Find the first valid day
  const firstValidDay = days.find((day) => typeof day !== 'number')
  return firstValidDay ? new Date((firstValidDay as any).date) : new Date()
}

export const generateFullMonthDays = (days: UseMonthResult['days']): Date[] => {
  const startDateOfMonth = getStartDateOfMonth(days)

  // Determine the starting point.
  const startDay = new Date(startDateOfMonth)
  startDay.setDate(startDay.getDate() - startDateOfMonth.getDay())

  const fullMonthDays: Date[] = []

  // We'll be showing 42 days per month, because: 6 rows * 7 days = 42 days.
  for (let i = 0; i < 42; i++) {
    const currentDate = new Date(startDay)
    currentDate.setDate(currentDate.getDate() + i)
    fullMonthDays.push(currentDate)
  }

  return fullMonthDays
}

// Given an index in fullMonthDays, get the index of the previous and next day.
const getAdjacentDaysIndexes = (index: number, fullMonthDays: Date[]) => {
  const prevIndex = index - 1
  const nextIndex = index + 1

  return {
    prevIndex: prevIndex >= 0 ? prevIndex : null,
    nextIndex: nextIndex < fullMonthDays.length ? nextIndex : null,
  }
}

export const getDayBorders = (
  index: number,
  fullMonthDays: Date[],
  isSelected: boolean,
  startDate: Date | null,
  endDate: Date | null,
): string => {
  if (!isSelected) return ''

  if (!startDate || !endDate) return styles.dayBorderLeftAndRight

  const { prevIndex, nextIndex } = getAdjacentDaysIndexes(index, fullMonthDays)

  const prevIsInDateRange =
    prevIndex !== null &&
    isDateWithinRange(fullMonthDays[prevIndex], startDate, endDate)
  const nextIsInDateRange =
    nextIndex !== null &&
    isDateWithinRange(fullMonthDays[nextIndex], startDate, endDate)

  const prevIsSelected =
    (prevIndex !== null && isSameDay(fullMonthDays[prevIndex], startDate)) ||
    prevIsInDateRange
  const nextIsSelected =
    (nextIndex !== null && isSameDay(fullMonthDays[nextIndex], startDate)) ||
    nextIsInDateRange

  // CSS classes for borders
  let borderClasses = ''
  if (isSelected) {
    if (index % 7 === 0) {
      // Leftmost day of the week
      borderClasses = nextIsSelected
        ? styles.dayBorderLeft
        : styles.dayBorderLeftAndRight
    } else if (index % 7 === 6) {
      // Rightmost day of the week
      borderClasses = prevIsSelected
        ? styles.dayBorderRight
        : styles.dayBorderLeftAndRight
    } else {
      // Middle days
      if (prevIsSelected && nextIsSelected) {
        borderClasses = '' // No left/right border if surrounded by selected days
      } else if (prevIsSelected) {
        borderClasses = styles.dayBorderRight
      } else if (nextIsSelected) {
        borderClasses = styles.dayBorderLeft
      } else {
        borderClasses = styles.dayBorderLeftAndRight
      }
    }
  }

  return borderClasses
}

export const switchCalendar = (
  currentCalendar: CalendarType,
  newCalendar: CalendarType,
): CalendarType => {
  if (!currentCalendar) {
    return newCalendar
  }

  // If the currentCalendar === newCalendar - that means we are closing the calendar.
  if (currentCalendar === newCalendar) {
    return null
  }

  // If the currentCalendar !== newCalendar - that means we're switching the calendar type.
  if (currentCalendar !== newCalendar) {
    return newCalendar
  }

  // Default case - return newCalendar.
  return newCalendar
}

export function isValidRange(
  startDateString: string,
  endDateString: string,
): boolean {
  // Default - if no start or end date is provided, assume a valid range (even though there's no range)
  if (!startDateString || !endDateString) return true

  // Convert string to Date objects after removing timezone offset
  let startDate = new Date(adjustedTimezoneISOString(new Date(startDateString)))

  let endDate = new Date(adjustedTimezoneISOString(new Date(endDateString)))

  // Check if the end date is after the start date
  return endDate > startDate
}

export const getCalendarTooltipArrowOffset = (
  calendarType: CalendarType,
  size: DateRangePickerProps['size'],
): number => {
  if (size === 'large') {
    if (calendarType === 'startDate') {
      return 130
    } else {
      return 291
    }
  }

  if (size === 'medium') {
    if (calendarType === 'startDate') {
      return 120
    } else {
      return 267
    }
  }

  if (size === 'small') {
    if (calendarType === 'startDate') {
      return 107
    } else {
      return 239
    }
  }

  return 0
}
