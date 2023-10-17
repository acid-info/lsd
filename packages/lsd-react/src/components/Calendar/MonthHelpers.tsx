import clsx from 'clsx'
import { Day } from './Day'
import { FC } from 'react'
import { NavigateBeforeIcon, NavigateNextIcon } from '../Icons'
import { calendarClasses } from './Calendar.classes'
import { Typography } from '../Typography'
import { UseMonthResult } from '@datepicker-react/hooks'
import { generateFullMonthDays } from '../../utils/date.utils'
import { useCalendarContext } from './Calendar.context'
import { YearControl } from './YearControl'

type CalendarNavigationButtonProps = {
  direction: 'previous' | 'next'
  onClick: () => void
  className?: string
}

export const CalendarNavigationButton: FC<CalendarNavigationButtonProps> = ({
  direction,
  onClick,
  className,
}) => {
  const Icon = direction === 'previous' ? NavigateBeforeIcon : NavigateNextIcon
  return (
    <button
      className={clsx(calendarClasses.button, className)}
      type="button"
      onClick={onClick}
    >
      <Icon color="primary" />
    </button>
  )
}

type MonthHeaderProps = {
  monthLabel: string
  monthNumber: number
  size: 'large' | 'medium' | 'small'
}

export const MonthHeader: FC<MonthHeaderProps> = ({
  monthLabel,
  monthNumber,
  size,
}) => {
  const { goToPreviousMonths, goToNextMonths } = useCalendarContext()
  const [month, year] = monthLabel.split(' ')

  return (
    <div className={calendarClasses.header}>
      <CalendarNavigationButton
        direction="previous"
        onClick={goToPreviousMonths}
        className={calendarClasses.previousMonthButton}
      />
      <div className={calendarClasses.monthAndYear}>
        <Typography
          className={calendarClasses.month}
          component="span"
          variant={size === 'large' ? 'label1' : 'label2'}
        >
          {month}
        </Typography>

        <YearControl year={year} monthNumber={monthNumber} size={size} />
      </div>
      <CalendarNavigationButton
        direction="next"
        onClick={goToNextMonths}
        className={calendarClasses.nextMonthButton}
      />
    </div>
  )
}

type WeekdayHeaderProps = {
  weekdayLabels: string[]
}

export const WeekdayHeader: FC<WeekdayHeaderProps> = ({ weekdayLabels }) => {
  return (
    <tr>
      {weekdayLabels.map((dayLabel, idx) => (
        <th key={idx}>
          <div className={calendarClasses.weekDay}>
            <Typography variant="label2">{dayLabel[0]}</Typography>
          </div>
        </th>
      ))}
    </tr>
  )
}

type DaysProps = {
  days: UseMonthResult['days']
}

export const Days: FC<DaysProps> = ({ days }) => {
  const fullMonthDays = generateFullMonthDays(days)
  // Fetch the current month from day 15 of the array - this day is guaranteed to be in the current month
  const currentMonth = new Date(fullMonthDays[15]).getMonth()

  return (
    <>
      {Array.from({ length: 6 }).map((_, weekIdx) => (
        <tr key={`week-${weekIdx}`}>
          {Array.from({ length: 7 }).map((_, dayIdx) => {
            const index = weekIdx * 7 + dayIdx
            const date = fullMonthDays[index]

            return (
              <Day
                key={`day-${index}`}
                index={index}
                day={date.getDate().toString()}
                fullMonthDays={fullMonthDays}
                disabled={date.getMonth() !== currentMonth}
              />
            )
          })}
        </tr>
      ))}
    </>
  )
}
