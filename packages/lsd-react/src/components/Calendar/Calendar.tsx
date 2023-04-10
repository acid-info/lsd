import {
  OnDatesChangeProps,
  START_DATE,
  useDatepicker,
} from '@datepicker-react/hooks'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { safeConvertDateToString } from '../../utils/date.utils'
import { calendarClasses } from './Calendar.classes'
import { CalendarContext } from './Calendar.context'
import { Month } from './Month'

export type CalendarProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'label' | 'onChange'
> & {
  open?: boolean
  disabled?: boolean
  value?: string
  onChange: (data: Date) => void
  handleRef: React.RefObject<HTMLElement>
  size?: 'large' | 'medium' | 'small'
  onClose?: () => void
}

export const Calendar: React.FC<CalendarProps> & {
  classes: typeof calendarClasses
} = ({
  open,
  handleRef,
  value: valueProp,
  size = 'large',
  disabled = false,
  onChange,
  onClose,
  children,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})
  const [value, setValue] = useState<Date | null>(
    valueProp ? safeConvertDateToString(valueProp).date : null,
  )

  useClickAway(ref, (event) => {
    if (!open || event.composedPath().includes(handleRef.current!)) return

    onClose && onClose()
  })

  const handleDateChange = (data: OnDatesChangeProps) => {
    if (typeof valueProp !== 'undefined')
      return onChange?.(data.startDate ?? new Date())

    setValue(data.startDate)
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

  useEffect(() => {
    onDateFocus(value ? new Date(value) : new Date())
  }, [value])

  useEffect(() => {
    if (typeof valueProp === 'undefined') return

    const { date } = safeConvertDateToString(valueProp)
    setValue(date)
  }, [valueProp])

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
        size,
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
        {...props}
        className={clsx(
          props.className,
          calendarClasses.root,
          open && calendarClasses.open,
          disabled && calendarClasses.disabled,
        )}
        ref={ref}
        style={{ ...style, ...(props.style ?? {}) }}
      >
        <div className={clsx(calendarClasses.container)}>
          {activeMonths.map((month, idx) => (
            <Month
              key={`${month.year}-${month.month}-${idx}`}
              year={month.year}
              month={month.month}
              firstDayOfWeek={0}
              size={size}
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
