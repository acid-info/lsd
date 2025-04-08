import clsx from 'clsx'
import { FC, useEffect, useRef, useState } from 'react'
import { calendarClasses } from './Calendar.classes'
import { Typography } from '../Typography'
import { useClickAway, useScroll } from 'react-use'
import { useCalendarContext } from './Calendar.context'
import { CALENDAR_MAX_YEAR, CALENDAR_MIN_YEAR } from '.'
import { ChevronDownIcon, ChevronUpIcon } from '../Icons'

type YearControlProps = {
  year: string
  monthNumber: number
  size: 'large' | 'medium' | 'small'
  yearStep?: number
}

export const YearControl: FC<YearControlProps> = ({
  year,
  monthNumber,
  size,
  yearStep = 10,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const currentYearRef = useRef<HTMLDivElement>(null)
  const { goToDate, changeYearMode, setChangeYearMode } = useCalendarContext()
  const scrollRef = useRef<HTMLDivElement>(null)
  const { y } = useScroll(scrollRef as React.RefObject<HTMLElement>)

  const [minYear, setMinYear] = useState(() => parseInt(year) - yearStep)
  const [maxYear, setMaxYear] = useState(() => parseInt(year) + yearStep)

  const yearsList = Array.from(
    { length: maxYear - minYear + 1 },
    (_, i) => minYear + i,
  )

  useClickAway(ref, () => {
    setChangeYearMode(false)
  })

  const handleYearClick = (selectedYear: number) => {
    const selectedDate = new Date(selectedYear, monthNumber, 1)
    goToDate(selectedDate)
    setChangeYearMode(false)
  }

  // The following useEffect scrolls to the current year when the year dropdown is opened.
  useEffect(() => {
    if (changeYearMode && currentYearRef.current && scrollRef.current) {
      const yearElementTop = currentYearRef.current.offsetTop
      const yearElementHeight = currentYearRef.current.offsetHeight
      const containerHeight = scrollRef.current.clientHeight

      const scrollToPosition =
        yearElementTop - containerHeight / 2 + yearElementHeight / 2

      scrollRef.current.scrollTop = scrollToPosition
    }
  }, [changeYearMode])

  // The following useEffect adds more years to the dropdown when
  // users scroll to the top or bottom.
  useEffect(() => {
    const scrollHeight = scrollRef?.current?.scrollHeight
    const clientHeight = scrollRef?.current?.clientHeight

    if (!scrollHeight || !clientHeight) return

    const scrollPercentage = (y / (scrollHeight - clientHeight)) * 100

    if (scrollPercentage > 90) {
      setMaxYear((prevMaxYear) =>
        Math.min(prevMaxYear + yearStep, CALENDAR_MAX_YEAR),
      )
    }

    if (scrollPercentage < 10) {
      setMinYear((prevMinYear) =>
        Math.max(prevMinYear - yearStep, CALENDAR_MIN_YEAR),
      )
    }
  }, [y, yearStep])

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
            <ChevronUpIcon color="primary" />
          ) : (
            <ChevronDownIcon color="primary" />
          )}
        </div>
      </div>

      <div
        className={clsx(
          calendarClasses.yearDropdown,
          !changeYearMode && calendarClasses.yearDropdownHidden,
        )}
        ref={scrollRef}
      >
        {yearsList.map((yearValue) => (
          <div
            key={yearValue}
            className={calendarClasses.year}
            onClick={() => handleYearClick(yearValue)}
            ref={yearValue === parseInt(year) ? currentYearRef : null}
          >
            <Typography
              component="span"
              variant={size === 'large' ? 'label1' : 'label2'}
            >
              {yearValue}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  )
}
