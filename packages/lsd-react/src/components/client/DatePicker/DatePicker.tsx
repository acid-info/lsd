import clsx from 'clsx'
import React, { useRef, useState } from 'react'
import { adjustedTimezoneISOString } from '../../../utils/date.utils'
import { useInput } from '../../../utils/useInput'
import { Calendar } from '../Calendar'
import { DateField } from '../DateField'
import { CalendarIcon } from '../Icons'
import { Portal } from '../PortalProvider/Portal'
import { wasElementClicked } from '../../../utils/dom.util'
import styles from './DatePicker.module.css'

import {
  CommonProps,
  omitCommonProps,
  pickCommonProps,
  useCommonProps,
} from '../../../utils/useCommonProps'

export type DatePickerProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'value'> &
  Pick<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    label?: React.ReactNode
    error?: boolean
    errorIcon?: boolean
    clearButton?: boolean
    disabled?: boolean
    withCalendar?: boolean
    supportingText?: string
    value?: string
    defaultValue?: string
    placeholder?: string
    size?: 'large' | 'medium' | 'small'
    variant?: 'outlined' | 'underlined'
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  }

function DatePicker({
  label,
  size = 'large',
  value: valueProp,
  onChange,
  withCalendar = true,
  variant = 'underlined',
  ...props
}: DatePickerProps) {
  const commonProps = useCommonProps(props)
  const ref = useRef<HTMLDivElement>(null)
  const calendarIconRef = useRef<HTMLSpanElement>(null)
  const [openCalendar, setOpenCalendar] = useState(false)
  const isControlled = typeof valueProp !== 'undefined'

  const input = useInput({
    value: valueProp,
    defaultValue: '',
    onChange,
    getInput: () =>
      ref.current?.querySelector(
        'input.lsd-date-field__input',
      ) as HTMLInputElement,
  })

  const handleDateChange = (date: Date) =>
    input.setValue(adjustedTimezoneISOString(date))

  const inputId = (props.id || 'date-picker') + '-input'

  return (
    <div
      id={inputId}
      ref={ref}
      className={clsx(
        { ...omitCommonProps(props) },
        props.className,
        commonProps.className,
        styles['root-datePicker'],
        styles[size],
      )}
    >
      <DateField
        label={label}
        size={size}
        variant={variant}
        icon={withCalendar && <CalendarIcon color="primary" />}
        onIconClick={() => setOpenCalendar((prev) => !prev)}
        value={isControlled || openCalendar ? input.value : undefined}
        onChange={input.onChange}
        calendarIconRef={calendarIconRef as React.RefObject<HTMLSpanElement>}
        {...props}
      >
        <Portal id="calendar">
          {withCalendar && (
            <Calendar
              {...pickCommonProps(props)}
              onStartDateChange={(date) => handleDateChange(date)}
              open={openCalendar}
              onCalendarClickaway={(event) => {
                if (wasElementClicked(event, calendarIconRef.current)) {
                  return
                }

                setOpenCalendar(false)
              }}
              handleRef={ref as React.RefObject<HTMLElement>}
              startDate={input.value}
              disabled={props.disabled}
              className={styles.calendar}
            />
          )}
        </Portal>
      </DateField>
    </div>
  )
}

export { DatePicker }
