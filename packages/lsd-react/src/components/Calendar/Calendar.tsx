import {
  OnDatesChangeProps,
  START_DATE,
  useDatepicker,
} from '@datepicker-react/hooks'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { calendarClasses } from './Calendar.classes'
import { CalendarContext } from './Calendar.context'
import { Month } from './Month'
import { getNewDates, isSameDay, safeConvertDate } from '../../utils/date.utils'
import {
  CommonProps,
  useCommonProps,
  omitCommonProps,
} from '../../utils/useCommonProps'
import { TooltipBase } from '../TooltipBase'

export type CalendarType = null | 'endDate' | 'startDate'

export type CalendarProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label' | 'onChange'> & {
    open?: boolean
    disabled?: boolean
    calendarType?: CalendarType
    onStartDateChange?: (startDate: Date) => void
    onEndDateChange?: (endDate: Date) => void
    handleRef: React.RefObject<HTMLElement>
    size?: 'large' | 'medium' | 'small'
    mode?: 'date' | 'range'
    onClose?: () => void
    onCalendarClickaway?: (event: Event) => void
    startDate: string
    endDate?: string
    minDate?: Date
    maxDate?: Date
    tooltipArrowOffset?: number
  }

export const Calendar: React.FC<CalendarProps> & {
  classes: typeof calendarClasses
} = ({
  open,
  handleRef,
  size = 'large',
  mode = 'date',
  disabled = false,
  onStartDateChange,
  onEndDateChange,
  onClose,
  onCalendarClickaway,
  startDate: startDateProp,
  endDate: endDateProp,
  calendarType = 'startDate',
  // minDate and maxDate are necessary because onDateFocus freaks out with small/large date values.
  minDate = new Date(1950, 0, 1),
  maxDate = new Date(2100, 0, 1),
  tooltipArrowOffset,
  ...props
}) => {
  const commonProps = useCommonProps(props)
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})
  const [startDate, setStartDate] = useState<Date | null>(
    startDateProp
      ? safeConvertDate(startDateProp, minDate, maxDate).date
      : null,
  )
  const [endDate, setEndDate] = useState<Date | null>(
    endDateProp ? safeConvertDate(endDateProp, minDate, maxDate).date : null,
  )
  const [changeYearMode, setChangeYearMode] = useState(false)

  useClickAway(ref, (event) => {
    if (!open) return

    onCalendarClickaway && onCalendarClickaway(event)
    if (typeof open === 'undefined') {
      onClose && onClose()
    }
  })

  const handleDateChange = (data: OnDatesChangeProps) => {
    const newDates = getNewDates(calendarType, startDate, endDate, data)
    const { newStartDate, newEndDate } = newDates

    if (newStartDate !== startDate) {
      onStartDateChange?.(newStartDate ?? new Date())
      setStartDate(newStartDate)
    }

    if (newEndDate !== endDate && mode === 'range') {
      onEndDateChange?.(newEndDate ?? new Date())
      setEndDate(newEndDate)
    }
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
    goToDate,
  } = useDatepicker({
    startDate,
    endDate,
    // focusedInput is meant to define which <input> is currently selected. However,
    // that's not why we're setting it here. We're setting it here just because it's a required arg.
    focusedInput: START_DATE,
    onDatesChange: handleDateChange,
    numberOfMonths: 1,
  })

  // Handle startDateProp and endDateProp changes. Only updates them if they differ from current state.
  useEffect(() => {
    const newStart = safeConvertDate(startDateProp, minDate, maxDate)

    if (!isSameDay(newStart.date, startDate)) {
      setStartDate(newStart.isValid ? newStart.date : null)
    }

    if (mode === 'range') {
      const newEnd = safeConvertDate(endDateProp, minDate, maxDate)

      if (!isSameDay(newEnd.date, endDate)) {
        setEndDate(newEnd.isValid ? newEnd.date : null)
      }
    }
  }, [startDateProp, endDateProp, mode, minDate, maxDate, startDate, endDate])

  useEffect(() => {
    // When the startDate state changes, focus the calendar on that date.
    if (startDate) {
      onDateFocus(startDate)
    }
  }, [startDate])

  useEffect(() => {
    // When the endDate state changes, focus the calendar on that date.
    if (endDate) {
      onDateFocus(endDate)
    }
  }, [endDate])

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
        mode,
        startDate,
        endDate,
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
        goToPreviousMonths,
        goToNextMonths,
        goToDate,
        changeYearMode,
        setChangeYearMode,
      }}
    >
      <TooltipBase
        {...props}
        className={clsx(
          { ...omitCommonProps(props) },
          commonProps.className,
          props.className,
          calendarClasses.root,
          open && calendarClasses.open,
          disabled && calendarClasses.disabled,
        )}
        rootRef={ref}
        style={{ ...style, ...(props.style ?? {}) }}
        arrowOffset={tooltipArrowOffset}
      >
        <div className={clsx(calendarClasses.container)}>
          {activeMonths.map((month, idx) => (
            <Month
              key={`${month.year}-${month.month}-${idx}`}
              year={month.year}
              month={month.month}
              firstDayOfWeek={0}
              size={size}
            />
          ))}
        </div>
      </TooltipBase>
    </CalendarContext.Provider>
  )
}

Calendar.classes = calendarClasses
