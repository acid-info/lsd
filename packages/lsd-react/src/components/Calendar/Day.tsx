import { useCallback, useRef } from 'react'
import { useCalendarContext } from './Calendar.context'
import clsx from 'clsx'
import { Typography } from '../Typography'
import {
  getDayBorders,
  isDateWithinRange,
  isSameDay,
  resetHours,
} from '../../utils/date.utils'
import { calendarClasses } from './Calendar.classes'

export type DayProps = {
  day?: string
  index: number
  fullMonthDays: Date[]
  disabled?: boolean
}

export const Day = ({
  day,
  index,
  fullMonthDays,
  disabled = false,
}: DayProps) => {
  const date = fullMonthDays[index]
  const { mode, startDate, endDate, onDateSelect } = useCalendarContext()
  const dayRef = useRef(null)
  const isToday = resetHours(date) === resetHours(new Date())
  const isInDateRange =
    mode === 'range' && isDateWithinRange(date, startDate, endDate)

  const onClick = useCallback(() => onDateSelect(date), [date, onDateSelect])

  const isStartDate = isSameDay(date, startDate)
  const isEndDate = mode === 'range' && isSameDay(date, endDate)
  const isSelected = isStartDate || isEndDate || isInDateRange

  if (!day) {
    return null
  }

  const borderClasses = getDayBorders(
    index,
    fullMonthDays,
    isSelected,
    startDate,
    endDate,
  )

  return (
    <td
      onClick={onClick}
      ref={dayRef}
      className={clsx(
        calendarClasses.dayContainer,
        // The top and bottom borders are always shown for every selected day.
        // That's not the case for left and right borders (e.g. 2 adjacent days will not have the middle border).
        isSelected && calendarClasses.dayBorderTopAndBottom,
        disabled && calendarClasses.dayDisabled,
        isToday && calendarClasses.dayIsToday,
        borderClasses,
      )}
    >
      <div className={calendarClasses.day}>
        <Typography variant="label2">{parseInt(day, 10)}</Typography>
        {isToday && (
          <Typography
            variant="label2"
            className={calendarClasses.todayIndicator}
          >
            ▬
          </Typography>
        )}
      </div>
    </td>
  )
}
