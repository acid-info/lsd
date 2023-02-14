import { useEffect, useMemo, useState } from 'react'
import { pairs } from './object.utils'

export type SelectOption = {
  name: string
  value: string
}

export const useSelect = (
  options: SelectOption[],
  value: string | string[],
  {
    onDone,
    onChange,
    multi = false,
  }: {
    multi?: boolean
    onDone?: (value: string | string[]) => void
    onChange?: (value: string | string[]) => void
  } = {},
) => {
  const dict = useMemo(
    () => Object.fromEntries(options.map((opt) => [opt.value, opt])),
    [options],
  )

  const [val, setVal] = useState<string[]>(
    Array.isArray(value) ? value : value ? [value] : [],
  )

  const selection = useMemo(() => pairs(val, () => true), [val])
  const selected = useMemo(() => val.map((value) => dict[value]), [val, dict])

  useEffect(() => {
    if (onChange) setVal(Array.isArray(value) ? value : value ? [value] : [])
  }, [value, onChange])

  const getKey = (option: string | SelectOption) =>
    typeof option === 'string' ? option : option.value

  const isSelected = (option: string | SelectOption) =>
    !!selection[getKey(option)]

  const doSelect = (option: string | SelectOption) => {
    const key = getKey(option)
    const newVal = multi
      ? selection[key]
        ? val.filter((i) => i !== key)
        : [...val, key]
      : [key]
    onChange ? onChange(multi ? newVal : newVal[0]) : setVal(newVal)
    if (!multi && onDone) onDone(multi ? newVal : newVal[0])
  }

  return {
    selected,
    isSelected,
    select: doSelect,
  }
}
