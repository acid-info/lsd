import { FirstDayOfWeek, useMonth } from '@datepicker-react/hooks'
import clsx from 'clsx'
import { NavigateBeforeIcon, NavigateNextIcon } from '../Icons'
import { Typography } from '../Typography'
import { calendarClasses } from './Calendar.classes'
import { Day } from './Day'

export type MonthProps = {
  year: number
  month: number
  firstDayOfWeek: FirstDayOfWeek
  goToPreviousMonths: () => void
  goToNextMonths: () => void
}

export const Month = ({
  year,
  month,
  firstDayOfWeek,
  goToPreviousMonths,
  goToNextMonths,
}: MonthProps) => {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
  })

  const renderOtherDays = (idx: number, firstDate: Date) => {
    const date = new Date(firstDate)
    date.setDate(date.getDate() + idx)
    return date.getDate()
  }

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
        <Typography variant="label1">{monthLabel}</Typography>
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
            style={{ textAlign: 'center' }}
          >
            {dayLabel[0]}
          </Typography>
        ))}
      </div>
      <div className={clsx(calendarClasses.grid)}>
        {days.map((ele, idx) =>
          typeof ele !== 'number' ? (
            <Day date={ele.date} day={ele.dayLabel} key={ele.dayLabel} />
          ) : (
            <button
              disabled
              key={`prev-${idx}`}
              className={clsx(calendarClasses.day, calendarClasses.dayDisabled)}
            >
              <Typography variant="label2">
                {renderOtherDays(
                  idx - days.filter((day) => day === 0).length,
                  days[days.lastIndexOf(0) + 1].date,
                )}
              </Typography>
            </button>
          ),
        )}
        {days.length % 7 !== 0 &&
          new Array(7 - (days.length % 7)).fill(null).map((ele, idx) => (
            <button
              disabled
              key={`after-${ele}`}
              className={clsx(calendarClasses.day, calendarClasses.dayDisabled)}
            >
              <Typography variant="label2">
                {renderOtherDays(idx, days[days.lastIndexOf(0) + 1].date)}
              </Typography>
            </button>
          ))}
      </div>
    </div>
  )
}
