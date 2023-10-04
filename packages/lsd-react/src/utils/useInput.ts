import React, { useEffect, useState } from 'react'

export type InputValueType =
  | React.InputHTMLAttributes<HTMLInputElement>['value']
  | boolean

export type InputOnChangeType =
  React.InputHTMLAttributes<HTMLInputElement>['onChange']

export type InputProps<T extends InputValueType = InputValueType> = {
  value?: T
  defaultValue: T
  onChange?: InputOnChangeType
  ref?: React.RefObject<HTMLInputElement>
}

export const useInput = <T extends InputValueType = InputValueType>(
  props: InputProps<T>,
) => {
  const [value, setValue] = useState<T>(props.value ?? props.defaultValue)

  const uncontrolled = typeof props.value === 'undefined'
  const filled =
    typeof value === 'undefined'
      ? false
      : typeof value === 'string'
      ? value.length > 0
      : value.toString().length > 0

  const onChange: InputOnChangeType = (event) => {
    if (uncontrolled) {
      const type = event.target.type
      const value =
        event.target[
          type === 'checkbox' || type === 'radio' ? 'checked' : 'value'
        ]

      setValue(value as T)
    }

    props.onChange && props.onChange(event)
  }

  const setter = (value: InputValueType) => {
    if (!props.ref?.current) return

    const element = props.ref.current
    const event = new Event('input', { bubbles: true })

    Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value',
    )?.set?.call?.(element, value)

    element.dispatchEvent(event)
  }

  useEffect(() => {
    !uncontrolled && setValue(props.value as T)
  }, [uncontrolled, props.value])

  return {
    value,
    filled,
    onChange,
    setValue: setter,
  }
}
