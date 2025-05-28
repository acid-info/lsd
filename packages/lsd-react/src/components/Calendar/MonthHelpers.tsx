import clsx from 'clsx'
import { Day } from './Day'
import { FC } from 'react'
import { Typography } from '../Typography'
import { UseMonthResult } from '@datepicker-react/hooks'
import { generateFullMonthDays } from '../../utils/date.utils'
import { useCalendarContext } from './Calendar.context'
import { YearControl } from './YearControl'
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons'
import styles from './Calendar.module.css'

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
  const Icon = direction === 'previous' ? ChevronLeftIcon : ChevronRightIcon
  return (
    <button
      className={clsx(styles.button, className)}
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
    <div className={styles.header}>
      <CalendarNavigationButton
        direction="previous"
        onClick={goToPreviousMonths}
        className={styles.previousMonthButton}
      />
      <div className={styles.monthAndYear}>
        <Typography
          className={styles.month}
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
        className={styles.nextMonthButton}
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
          <div className={styles.weekDay}>
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
