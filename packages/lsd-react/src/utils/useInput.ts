import React, { useEffect, useState } from 'react'

export type InputValueType =
  React.InputHTMLAttributes<HTMLInputElement>['value']

export type InputOnChangeType =
  React.InputHTMLAttributes<HTMLInputElement>['onChange']

export type InputProps = {
  value?: InputValueType
  defaultValue?: InputValueType
  onChange?: InputOnChangeType
  ref?: React.RefObject<HTMLInputElement>
}

export const useInput = (props: InputProps) => {
  const [value, setValue] = useState<InputValueType>(
    props.value ?? props.defaultValue ?? '',
  )

  const uncontrolled = typeof props.value === 'undefined'
  const filled =
    typeof value === 'undefined'
      ? false
      : typeof value === 'string'
      ? value.length > 0
      : value.toString().length > 0

  const onChange: InputOnChangeType = (event) => {
    if (uncontrolled) return setValue(event.target.value)
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
    !uncontrolled && setValue(props.value)
  }, [uncontrolled, props.value])

  return {
    value,
    filled,
    onChange,
    setValue: setter,
  }
}
