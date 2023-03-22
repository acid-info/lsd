import { FirstDayOfWeek, useMonth } from '@datepicker-react/hooks'
import clsx from 'clsx'
import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import {
  ArrowDownIcon,
  ArrowUpIcon,
  NavigateBeforeIcon,
  NavigateNextIcon,
} from '../Icons'
import { Typography } from '../Typography'
import { calendarClasses } from './Calendar.classes'
import { useCalendarContext } from './Calendar.context'
import { Day } from './Day'

export type MonthProps = {
  year: number
  month: number
  firstDayOfWeek: FirstDayOfWeek
  goToPreviousMonths: () => void
  goToNextMonths: () => void
  size?: 'large' | 'medium' | 'small'
}

export const Month = ({
  size: _size = 'large',
  year: _year,
  month,
  firstDayOfWeek,
  goToPreviousMonths,
  goToNextMonths,
}: MonthProps) => {
  const sizeContext = useCalendarContext()
  const size = sizeContext?.size ?? _size
  const [year, setYear] = useState(_year)
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
  })
  const [changeYear, setChangeYear] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const renderOtherDays = (idx: number, referenceDate: Date) => {
    const date = new Date(referenceDate)
    date.setDate(date.getDate() + idx)
    return date.getDate()
  }

  const getDay = (index: number) =>
    days[index] as {
      dayLabel: string
      date: Date
    }

  useClickAway(ref, (event) => {
    if (!changeYear) return

    setChangeYear(false)
  })

  return (
    <div>
      <div className={calendarClasses.header}>
        <button
          className={clsx(calendarClasses.button)}
          type="button"
          onClick={goToPreviousMonths}
        >
          <NavigateBeforeIcon color="primary" />
        </button>
        <div className={calendarClasses.row}>
          <Typography
            className={calendarClasses.month}
            variant={size === 'large' ? 'label1' : 'label2'}
          >
            {monthLabel.split(' ')[0]}
          </Typography>
          {changeYear ? (
            <div ref={ref} className={calendarClasses.changeYear}>
              <Typography
                variant={size === 'large' ? 'label1' : 'label2'}
                className={calendarClasses.year}
              >
                {monthLabel.split(' ')[1]}
              </Typography>
              <div className={calendarClasses.row}>
                <ArrowUpIcon
                  onClick={() => setYear(year + 1)}
                  className={calendarClasses.changeYearButton}
                  color="primary"
                />
                <ArrowDownIcon
                  onClick={() => setYear(year - 1)}
                  className={calendarClasses.changeYearButton}
                  color="primary"
                />
              </div>
            </div>
          ) : (
            <Typography
              onClick={() => setChangeYear(true)}
              variant={size === 'large' ? 'label1' : 'label2'}
              className={calendarClasses.year}
            >
              {monthLabel.split(' ')[1]}
            </Typography>
          )}
        </div>
        <button
          className={clsx(calendarClasses.button)}
          type="button"
          onClick={goToNextMonths}
        >
          <NavigateNextIcon color="primary" />
        </button>
      </div>
      <div className={clsx(calendarClasses.grid)}>
        {weekdayLabels.map((dayLabel, idx) => (
          <Typography
            key={idx}
            variant="label2"
            className={calendarClasses.weekDay}
          >
            {dayLabel[0]}
          </Typography>
        ))}
      </div>
      <div className={clsx(calendarClasses.grid)}>
        {days.length == 28 &&
          new Array(7)
            .fill(null)
            .map((_, idx) => (
              <Day
                date={new Date()}
                day={renderOtherDays(idx - 7, getDay(0).date).toString()}
                key={`prev-${idx}`}
                disabled={true}
              />
            ))}
        {days.map((ele, idx) =>
          typeof ele !== 'number' ? (
            <Day date={ele.date} day={ele.dayLabel} key={ele.dayLabel} />
          ) : (
            <Day
              date={getDay(idx + days.lastIndexOf(0) + 1).date}
              day={renderOtherDays(
                idx - days.filter((day) => day === 0).length,
                getDay(days.lastIndexOf(0) + 1).date,
              ).toString()}
              key={`current-${idx}`}
              disabled={true}
            />
          ),
        )}
        {new Array(
          days.length % 7 !== 0 && days.length <= 35
            ? 7 - (days.length % 7) + 7
            : 7 - (days.length % 7),
        )
          .fill(null)
          .map((ele, idx) => (
            <Day
              date={getDay(idx + days.lastIndexOf(0) + 1).date}
              day={renderOtherDays(
                idx,
                getDay(days.lastIndexOf(0) + 1).date,
              ).toString()}
              key={`after-${idx}`}
              disabled={true}
            />
          ))}
      </div>
    </div>
  )
}
