import { FirstDayOfWeek, useMonth } from '@datepicker-react/hooks'
import { useCalendarContext } from './Calendar.context'
import { Days, MonthHeader, WeekdayHeader } from './MonthHelpers'
import styles from './Calendar.module.css'

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
  const calendarContext = useCalendarContext()
  const size = calendarContext?.size ?? _size

  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
  })

  return (
    <>
      <MonthHeader monthLabel={monthLabel} monthNumber={month} size={size} />
      <table className={styles.monthTable}>
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
