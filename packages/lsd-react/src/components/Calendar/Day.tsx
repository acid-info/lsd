import { useRef, useContext } from 'react'
import { useDay } from '@datepicker-react/hooks'
import { CalendarContext } from './Calendar.context'
import clsx from 'clsx'
import { calendarClasses } from './Calendar.classes'
import { Typography } from '../Typography'

export type DayProps = {
  day?: string
  date: Date
}

export const Day = ({ day, date }: DayProps) => {
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
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
      type="button"
      ref={dayRef}
      className={clsx(
        calendarClasses.day,
        isDateFocused(date) && calendarClasses.daySelected,
      )}
    >
      <Typography variant="label2">{parseInt(day, 10)}</Typography>
    </button>
  )
}
