import {
  OnDatesChangeProps,
  START_DATE,
  useDatepicker,
} from '@datepicker-react/hooks'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { calendarClasses } from './Calendar.classes'
import { CalendarContext } from './Calendar.context'
import { Month } from './Month'

export type CalendarProps = Omit<
  React.HTMLAttributes<HTMLUListElement>,
  'label'
> & {
  open?: boolean
  value?: string
  handleDateFieldChange: (data: Date) => void
  handleRef: React.RefObject<HTMLElement>
}

export const Calendar: React.FC<CalendarProps> & {
  classes: typeof calendarClasses
} = ({
  open,
  handleRef,
  value = null,
  handleDateFieldChange,
  children,
  ...props
}) => {
  const [style, setStyle] = useState<React.CSSProperties>({})

  const handleDateChange = (data: OnDatesChangeProps) => {
    handleDateFieldChange(data.startDate ?? new Date())
    onDateFocus(data.startDate ?? new Date())
  }

  const {
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths,
  } = useDatepicker({
    startDate: value ? new Date(value) : null,
    endDate: null,
    focusedInput: START_DATE,
    onDatesChange: handleDateChange,
    numberOfMonths: 1,
  })

  const updateStyle = () => {
    const { width, height, top, left } =
      handleRef.current!.getBoundingClientRect()

    setStyle({
      left,
      width,
      top: top + height,
    })
  }

  useEffect(() => {
    updateStyle()
  }, [open])

  return (
    <CalendarContext.Provider
      value={{
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
      }}
    >
      <div
        className={clsx(
          props.className,
          calendarClasses.root,
          open && calendarClasses.open,
        )}
        style={{ ...style, ...(props.style ?? {}) }}
      >
        <div className={clsx(calendarClasses.container)}>
          {activeMonths.map((month) => (
            <Month
              key={`${month.year}-${month.month}`}
              year={month.year}
              month={month.month}
              firstDayOfWeek={0}
              goToPreviousMonths={goToPreviousMonths}
              goToNextMonths={goToNextMonths}
            />
          ))}
        </div>
      </div>
    </CalendarContext.Provider>
  )
}

Calendar.classes = calendarClasses
