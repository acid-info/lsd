import { OnDatesChangeProps, UseMonthResult } from '@datepicker-react/hooks'
import { CalendarType } from '../components/client/Calendar'
import { DateRangePickerProps } from '../components/client/DateRangePicker'
type SafeConvertDateResult = {
  isValid: boolean
  date: Date | null
}
export declare const safeConvertDate: (
  value: string | undefined,
  minDate: Date,
  maxDate: Date,
) => SafeConvertDateResult
export declare const adjustedTimezoneISOString: (date: Date) => string
export declare const resetHours: (date: Date) => number
export declare const isDateWithinRange: (
  date: Date | undefined,
  start: Date | null,
  end: Date | null,
) => boolean
export declare const isSameDay: (
  firstDate: Date | null | undefined,
  secondDate: Date | null | undefined,
) => boolean
type NewDates = {
  newStartDate: Date | null
  newEndDate: Date | null
}
export declare const getNewDates: (
  calendarType: CalendarType | null,
  startDateState: Date | null,
  endDateState: Date | null,
  dateChangeProps: OnDatesChangeProps,
) => NewDates
export declare const generateFullMonthDays: (
  days: UseMonthResult['days'],
) => Date[]
export declare const getDayBorders: (
  index: number,
  fullMonthDays: Date[],
  isSelected: boolean,
  startDate: Date | null,
  endDate: Date | null,
) => string
export declare const switchCalendar: (
  currentCalendar: CalendarType,
  newCalendar: CalendarType,
) => CalendarType
export declare function isValidRange(
  startDateString: string,
  endDateString: string,
): boolean
export declare const getCalendarTooltipArrowOffset: (
  calendarType: CalendarType,
  size: DateRangePickerProps['size'],
) => number
export {}
