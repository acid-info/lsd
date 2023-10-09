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
}

export const CalendarNavigationButton: FC<CalendarNavigationButtonProps> = ({
  direction,
  onClick,
}) => {
  const Icon = direction === 'previous' ? NavigateBeforeIcon : NavigateNextIcon
  return (
    <button
      className={clsx(calendarClasses.button)}
      type="button"
      onClick={onClick}
    >
      <Icon color="primary" />
    </button>
  )
}

type YearControlProps = {
  year: string
  size: 'large' | 'medium' | 'small'
  onClickAway: () => void
}

export const YearControl: FC<YearControlProps> = ({
  year,
  size,
  onClickAway,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { goToNextYear, goToPreviousYear } = useCalendarContext()

  useClickAway(ref, () => {
    onClickAway()
  })

  return (
    <div ref={ref} className={calendarClasses.changeYear}>
      <Typography
        component="span"
        className={calendarClasses.year}
        variant={size === 'large' ? 'label1' : 'label2'}
      >
        {year}
      </Typography>
      <div className={calendarClasses.row}>
        <IconButton
          onClick={() => {
            goToNextYear()
          }}
          className={calendarClasses.changeYearButton}
        >
          <ArrowUpIcon color="primary" />
        </IconButton>
        <IconButton
          onClick={() => {
            goToPreviousYear()
          }}
          className={calendarClasses.changeYearButton}
        >
          <ArrowDownIcon color="primary" />
        </IconButton>
      </div>
    </div>
  )
}

type MonthHeaderProps = {
  monthLabel: string
  size: 'large' | 'medium' | 'small'
}

export const MonthHeader: FC<MonthHeaderProps> = ({ monthLabel, size }) => {
  const {
    goToPreviousMonths,
    goToNextMonths,
    changeYearMode,
    setChangeYearMode,
  } = useCalendarContext()
  const [month, year] = monthLabel.split(' ')

  return (
    <div className={calendarClasses.header}>
      <CalendarNavigationButton
        direction="previous"
        onClick={goToPreviousMonths}
      />
      <div className={calendarClasses.row}>
        <Typography
          className={calendarClasses.month}
          component="span"
          variant={size === 'large' ? 'label1' : 'label2'}
        >
          {month}
        </Typography>
        {changeYearMode ? (
          <YearControl
            year={year}
            size={size}
            onClickAway={() => {
              setChangeYearMode(false)
            }}
          />
        ) : (
          <Typography
            onClick={() => setChangeYearMode(true)}
            variant={size === 'large' ? 'label1' : 'label2'}
            className={calendarClasses.year}
          >
            {year}
          </Typography>
        )}
      </div>
      <CalendarNavigationButton direction="next" onClick={goToNextMonths} />
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
