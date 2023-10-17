import clsx from 'clsx'
import { Day } from './Day'
import { FC, useRef } from 'react'
import {
  ArrowDownIcon,
  ArrowUpIcon,
  NavigateBeforeIcon,
  NavigateNextIcon,
} from '../Icons'
import { calendarClasses } from './Calendar.classes'
import { Typography } from '../Typography'
import { IconButton } from '../IconButton'
import { UseMonthResult } from '@datepicker-react/hooks'
import { useClickAway } from 'react-use'
import { generateFullMonthDays } from '../../utils/date.utils'
import { useCalendarContext } from './Calendar.context'

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

type YearControlProps = {
  year: string
  monthNumber: number
  size: 'large' | 'medium' | 'small'
}

export const YearControl: FC<YearControlProps> = ({
  year,
  monthNumber,
  size,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { goToDate, changeYearMode, setChangeYearMode } = useCalendarContext()

  useClickAway(ref, () => {
    setChangeYearMode(false)
  })

  const handleYearClick = (selectedYear: number) => {
    const selectedDate = new Date(selectedYear, monthNumber, 1)
    goToDate(selectedDate)
    setChangeYearMode(false)
  }

  const yearsList = Array.from({ length: 101 }, (_, i) => 1950 + i)

  return (
    <div
      ref={ref}
      className={clsx(
        calendarClasses.changeYear,
        changeYearMode && calendarClasses.changeYearActive,
      )}
      onClick={() => {
        setChangeYearMode(!changeYearMode)
      }}
    >
      <div className={clsx(calendarClasses.year, calendarClasses.yearAndIcon)}>
        <Typography
          component="span"
          variant={size === 'large' ? 'label1' : 'label2'}
        >
          {year}
        </Typography>

        <div className={calendarClasses.changeYearIconContainer}>
          {changeYearMode ? (
            <ArrowUpIcon color="primary" />
          ) : (
            <ArrowDownIcon color="primary" />
          )}
        </div>
      </div>

      {changeYearMode && (
        <div className={calendarClasses.yearDropdown}>
          {yearsList.map((year) => (
            <div
              key={year}
              className={calendarClasses.year}
              onClick={() => handleYearClick(year)}
            >
              <Typography
                component="span"
                variant={size === 'large' ? 'label1' : 'label2'}
              >
                {year}
              </Typography>
            </div>
          ))}
        </div>
      )}
    </div>
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
