import { useRef, useContext } from 'react'
import { useDay } from '@datepicker-react/hooks'
import { CalendarContext } from './Calendar.context'
import clsx from 'clsx'
import { calendarClasses } from './Calendar.classes'
import { Typography } from '../Typography'

export type DayProps = {
  day?: string
  date: Date
  disabled?: boolean
}

export const Day = ({ day, date, disabled = false }: DayProps) => {
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
        !disabled && isDateFocused(date) && calendarClasses.daySelected,
        disabled && calendarClasses.dayDisabled,
      )}
    >
      <Typography variant="label2">{parseInt(day, 10)}</Typography>
      {new Date(date).setHours(0, 0, 0, 0) ===
        new Date().setHours(0, 0, 0, 0) && (
        <Typography variant="label2" className={calendarClasses.todayIndicator}>
          ■
        </Typography>
      )}
    </button>
  )
}
