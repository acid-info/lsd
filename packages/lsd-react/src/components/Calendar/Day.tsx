import { useRef, useContext } from 'react'
import { useDay } from '@datepicker-react/hooks'
import { CalendarContext } from './Calendar.context'
import clsx from 'clsx'
import { calendarClasses } from './Calendar.classes'
import { Typography } from '../Typography'
import {
  checkDateRange,
  checkStartDate,
  selectStart,
  setHour,
} from '../../utils/date.utils'

export type DayProps = {
  day?: string
  date: Date
  disabled?: boolean
}

export const Day = ({ day, date, disabled = false }: DayProps) => {
  const { mode, start, end } = useContext(CalendarContext)

  const dayRef = useRef(null)
  const {
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover,
  } = useContext(CalendarContext)

  const { onClick, onKeyDown, onMouseEnter, tabIndex } = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef,
  })

  if (!day) {
    return null
  }

  return (
    <button
      onClick={(e) => !disabled && onClick()}
      onKeyDown={(e) => !disabled && onKeyDown(e)}
      onMouseEnter={(e) => !disabled && onMouseEnter()}
      tabIndex={tabIndex}
      type="button"
      ref={dayRef}
      className={clsx(
        calendarClasses.day,
        !disabled &&
          mode !== 'range' &&
          isDateFocused(date) &&
          calendarClasses.daySelected,
        !disabled &&
          mode === 'range' &&
          checkDateRange(date, start, end) &&
          calendarClasses.dayRange,
        !disabled &&
          mode === 'range' &&
          checkStartDate(date, start) &&
          calendarClasses.dayRange,
        disabled && calendarClasses.dayDisabled,
      )}
    >
      <Typography variant="label2">{parseInt(day, 10)}</Typography>
      {setHour(new Date(date)) === setHour(new Date()) && (
        <Typography variant="label2" className={calendarClasses.today}>
          ■
        </Typography>
      )}
    </button>
  )
}
