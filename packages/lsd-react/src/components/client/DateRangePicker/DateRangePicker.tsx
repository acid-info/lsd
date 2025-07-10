import clsx from 'clsx'
import React, { ChangeEvent, useRef, useState } from 'react'
import {
  adjustedTimezoneISOString,
  getCalendarTooltipArrowOffset,
  isValidRange,
  switchCalendar,
} from '../../../utils/date.utils'
import { useInput } from '../../../utils/useInput'
import { Calendar, CalendarType } from '../Calendar'
import { DateField, DateFieldProps } from '../DateField'
import { CalendarIcon } from '../Icons'
import { Portal } from '../PortalProvider/Portal'
import { wasElementClicked } from '../../../utils/dom.util'
import { DatePickerProps } from '../DatePicker'
import { Typography } from '../Typography'
import {
  CommonProps,
  useCommonProps,
  omitCommonProps,
  pickCommonProps,
} from '../../../utils/useCommonProps'
import styles from './DateRangePicker.module.css'

export type DateRangePickerProps = CommonProps &
  Omit<DatePickerProps, 'value' | 'clearButton' | 'onChange'> & {
    startValue?: string
    endValue?: string
    onStartDateChange: DatePickerProps['onChange']
    onEndDateChange: DatePickerProps['onChange']
  }

function DateRangePicker({
  startValue: startValueProp,
  endValue: endValueProp,
  onStartDateChange,
  onEndDateChange,
  size = 'large',
  variant = 'underlined',
  withCalendar = true,
  label,
  supportingText,
  disabled,
  ...props
}: DateRangePickerProps) {
  const commonProps = useCommonProps(props)
  const ref = useRef<HTMLDivElement>(null)
  const endCalendarIconRef = useRef<HTMLSpanElement>(null)
  const startCalendarIconRef = useRef<HTMLSpanElement>(null)
  const [calendarType, setCalendarType] = useState<CalendarType>(null)
  const isStartValueControlled = typeof startValueProp !== 'undefined'
  const isEndValueControlled = typeof endValueProp !== 'undefined'

  const startInput = useInput({
    value: startValueProp,
    defaultValue: '',
    onChange: onStartDateChange,
    getInput: () =>
      ref.current?.querySelectorAll(
        'input.lsd-date-field__input',
      )[0] as HTMLInputElement,
  })

  const endInput = useInput({
    value: endValueProp,
    defaultValue: '',
    onChange: onEndDateChange,
    getInput: () =>
      ref.current?.querySelectorAll(
        'input.lsd-date-field__input',
      )[1] as HTMLInputElement,
  })

  const onStartInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!endInput.value || isValidRange(e.target.value, endInput.value)) {
      startInput.onChange(e)
    }
  }

  const onEndInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!startInput.value || isValidRange(startInput.value, e.target.value)) {
      endInput.onChange(e)
    }
  }

  const calendarStartDateChange = (date: Date) => {
    startInput.setValue(adjustedTimezoneISOString(date))

    // Switch to endDate calendar when the startDate is set.
    setCalendarType('endDate')
  }

  const calendarEndDateChange = (date: Date) =>
    endInput.setValue(adjustedTimezoneISOString(date))

  const dateFieldProps: DateFieldProps = {
    ...props,
    size,
    label: undefined,
    supportingText: undefined,
  }

  const isStartDateCalendar = calendarType === 'startDate'
  const isEndDateCalendar = calendarType === 'endDate'
  const isCalendarOpen = isStartDateCalendar || isEndDateCalendar

  return (
    <div
      ref={ref}
      className={clsx(
        { ...omitCommonProps(props) },
        commonProps.className,
        props.className,
        styles['root-dateRangePicker'],
        styles[size],
        withCalendar && styles.withCalendar,
        isCalendarOpen && styles.openCalendar,
        disabled && styles.disabled,
      )}
    >
      {label && (
        <Typography className={styles.label} variant="label2" component="label">
          {label}
        </Typography>
      )}

      <div
        className={clsx(
          props.className,
          styles.inputContainer,
          variant === 'outlined' && styles.outlined,
        )}
      >
        <DateField
          variant={variant}
          calendarIconRef={
            startCalendarIconRef as React.RefObject<HTMLSpanElement>
          }
          icon={withCalendar && <CalendarIcon color="primary" />}
          value={
            isStartValueControlled || isCalendarOpen
              ? startInput.value
              : undefined
          }
          onIconClick={() =>
            setCalendarType((currentCalendarType) =>
              switchCalendar(currentCalendarType, 'startDate'),
            )
          }
          onChange={onStartInputChange}
          {...dateFieldProps}
        />

        <div className={styles.separator} />

        <DateField
          variant={variant}
          calendarIconRef={
            endCalendarIconRef as React.RefObject<HTMLSpanElement>
          }
          icon={withCalendar && <CalendarIcon color="primary" />}
          value={
            isEndValueControlled || isCalendarOpen ? endInput.value : undefined
          }
          onIconClick={() =>
            setCalendarType((currentCalendarType) =>
              switchCalendar(currentCalendarType, 'endDate'),
            )
          }
          onChange={onEndInputChange}
          {...dateFieldProps}
        />
      </div>

      {supportingText && (
        <div className={clsx(styles.supportingText)}>
          <Typography variant={'label2'} component="p">
            {supportingText}
          </Typography>
        </div>
      )}

      {withCalendar && (
        <Portal id="calendar">
          <Calendar
            {...pickCommonProps(props)}
            onStartDateChange={calendarStartDateChange}
            onEndDateChange={calendarEndDateChange}
            onCalendarClickaway={(event) => {
              if (
                wasElementClicked(event, endCalendarIconRef.current) ||
                wasElementClicked(event, startCalendarIconRef.current)
              ) {
                return
              }

              setCalendarType(null)
            }}
            calendarType={calendarType}
            open={isCalendarOpen}
            onClose={() => setCalendarType(null)}
            handleRef={ref as React.RefObject<HTMLElement>}
            mode="range"
            disabled={disabled}
            startDate={startInput.value}
            endDate={endInput.value}
            className={styles.calendar}
            tooltipArrowOffset={getCalendarTooltipArrowOffset(
              calendarType,
              size,
            )}
            size={size}
          />
        </Portal>
      )}
    </div>
  )
}

export { DateRangePicker }
