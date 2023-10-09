import { FirstDayOfWeek, useMonth } from '@datepicker-react/hooks'
import { useState } from 'react'
import { useCalendarContext } from './Calendar.context'
import { Days, MonthHeader, WeekdayHeader } from './MonthHelpers'
import { calendarClasses } from './Calendar.classes'

export type MonthProps = {
  year: number
  month: number
  firstDayOfWeek: FirstDayOfWeek
  size?: 'large' | 'medium' | 'small'
}

export const Month = ({
  size: _size = 'large',
  year,
  month,
  firstDayOfWeek,
}: MonthProps) => {
  const sizeContext = useCalendarContext()
  const size = sizeContext?.size ?? _size
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
  })

  return (
    <>
      <MonthHeader monthLabel={monthLabel} size={size} />
      <table className={calendarClasses.monthTable}>
        <thead>
          <WeekdayHeader weekdayLabels={weekdayLabels} />
        </thead>
        <tbody>
          <Days days={days} />
        </tbody>
      </table>
    </>
  )
}
