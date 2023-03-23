import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import {
  dateToISODateString,
  removeDateTimezoneOffset,
  safeConvertDateToString,
} from '../../utils/date.utils'
import { useInput } from '../../utils/useInput'
import { Calendar } from '../Calendar'
import { DateField } from '../DateField'
import { CalendarIcon } from '../Icons'
import { Portal } from '../PortalProvider/Portal'
import { rangePickerClasses } from './RangePicker.classes'

export type RangePickerProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onChange' | 'value'
> &
  Pick<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    error?: boolean
    errorIcon?: boolean
    clearButton?: boolean
    disabled?: boolean
    withCalendar?: boolean
    startValue?: string
    endValue?: string
    defaultValue?: string
    placeholder?: string
    size?: 'large' | 'medium'
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  }

export type mode = 'start' | 'end'

export const RangePicker: React.FC<RangePickerProps> & {
  classes: typeof rangePickerClasses
} = ({
  startValue: startValueProp,
  endValue: endValueProp,
  onChange,
  size,
  withCalendar = true,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [openCalendar, setOpenCalendar] = useState(false)
  const [mode, setMode] = useState<mode>('start')

  const startInput = useInput({
    value: startValueProp,
    defaultValue: '',
    onChange,
    getInput: () =>
      ref.current?.querySelectorAll(
        `input.${DateField.classes.input}`,
      )[0] as HTMLInputElement,
  })

  const endInput = useInput({
    value: endValueProp,
    defaultValue: '',
    onChange,
    getInput: () =>
      ref.current?.querySelectorAll(
        `input.${DateField.classes.input}`,
      )[1] as HTMLInputElement,
  })

  const handleDateChange = (
    date: Date,
    input: {
      value?: string
      filled?: boolean
      onChange?: React.ChangeEventHandler<HTMLInputElement>
      setValue: any
    },
  ) => input.setValue(dateToISODateString(removeDateTimezoneOffset(date)))

  const handleIconClick = (mode: mode) => {
    setMode((prev) => {
      if (prev === mode) {
        setOpenCalendar((prev) => !prev)
        return prev
      }
      return mode
    })
  }

  return (
    <div
      ref={ref}
      className={clsx(
        props.className,
        rangePickerClasses.root,
        withCalendar && rangePickerClasses.withCalendar,
        openCalendar && rangePickerClasses.open,
      )}
    >
      <DateField
        icon={withCalendar && <CalendarIcon color="primary" />}
        onIconClick={() => handleIconClick('start')}
        value={startInput.value}
        onChange={startInput.onChange}
        style={{ width: size === 'large' ? '152px' : '145px' }}
        {...props}
      />
      <DateField
        icon={withCalendar && <CalendarIcon color="primary" />}
        onIconClick={() => handleIconClick('end')}
        value={endInput.value}
        onChange={(e) => {
          if (new Date(e.target.value) >= new Date(startInput.value))
            endInput.onChange(e)
        }}
        style={{ width: size === 'large' ? '152px' : '145px' }}
        {...props}
      />
      <Portal id="calendar">
        {withCalendar && (
          <Calendar
            onChange={(date) =>
              handleDateChange(date, mode === 'start' ? startInput : endInput)
            }
            open={openCalendar}
            onClose={() => setOpenCalendar(false)}
            handleRef={ref}
            mode="range"
            value={mode === 'start' ? startInput.value : endInput.value}
            disabled={props.disabled}
            start={new Date(startInput.value)}
            end={new Date(endInput.value)}
          />
        )}
      </Portal>
    </div>
  )
}

RangePicker.classes = rangePickerClasses
