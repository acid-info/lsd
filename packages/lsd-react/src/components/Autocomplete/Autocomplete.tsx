import clsx from 'clsx'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useInput } from '../../utils/useInput'
import { DropdownItem } from '../DropdownItem'
import { CloseIcon, SearchIcon } from '../Icons'
import { ListBox } from '../ListBox'
import { Portal } from '../PortalProvider/Portal'
import { autocompleteClasses } from './Autocomplete.classes'

export type AutocompleteProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onChange' | 'value'
> &
  Pick<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    size?: 'large' | 'medium'
    withIcon?: boolean
    error?: boolean
    disabled?: boolean
    placeholder?: string
    value?: string
    defaultValue?: string
    options?: string[]
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
    variant?: 'outlined' | 'outlined-bottom'
  }

export const Autocomplete: React.FC<AutocompleteProps> & {
  classes: typeof autocompleteClasses
} = ({
  size = 'large',
  withIcon = false,
  error = false,
  disabled = false,
  children,
  value,
  defaultValue,
  placeholder,
  onChange,
  options = [],
  inputProps = {},
  variant = 'outlined',
  ...props
}) => {
  const ref = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const input = useInput({ defaultValue, value, onChange, ref })
  const inputValue = input.value as string

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string>()

  const onCancel = () => input.setValue('')

  const handleDropdownClick = (value: string) => {
    setOpen(false)
    setSelected(value)
    input.setValue(value)
  }

  const suggestions = useMemo(
    () =>
      input.filled
        ? options
            .filter((option) =>
              new RegExp(`^${input.value}.+`, 'i').test(option),
            )
            .map((option) => [
              option,
              option.slice(0, inputValue.length),
              option.slice(inputValue.length),
            ])
        : options,
    [input.value, options],
  )

  useEffect(() => {
    !selected && input.filled && !open && setOpen(true)
  }, [input.value, selected, open])

  const isOpen = !disabled && open && suggestions.length > 0 && input.filled

  return (
    <div
      ref={containerRef}
      className={clsx(
        props.className,
        autocompleteClasses.root,
        autocompleteClasses[size],
        disabled && autocompleteClasses.disabled,
        withIcon && autocompleteClasses.withIcon,
        variant === 'outlined'
          ? autocompleteClasses.outlined
          : autocompleteClasses.outlinedBottom,
      )}
      {...props}
    >
      <div>
        <input
          {...inputProps}
          ref={ref}
          value={input.value}
          placeholder={placeholder}
          onChange={input.onChange}
          disabled={disabled}
          onFocus={() => setOpen(true)}
          className={clsx(
            inputProps.className,
            autocompleteClasses.input,
            error && autocompleteClasses.error,
          )}
        />
        {withIcon && input.value ? (
          <span className={autocompleteClasses.icon} onClick={onCancel}>
            <CloseIcon color="primary" />
          </span>
        ) : withIcon && !input.value ? (
          <span className={autocompleteClasses.icon}>
            <SearchIcon color="primary" />
          </span>
        ) : null}
      </div>
      <Portal id="autocomplete">
        <ListBox
          handleRef={containerRef}
          open={isOpen}
          onClose={() => setOpen(false)}
          className={autocompleteClasses.listBox}
        >
          {suggestions.map((opt, idx: number) => (
            <DropdownItem
              key={idx}
              size={size}
              tabIndex={0}
              label={
                <>
                  {opt[1]}
                  <span className={autocompleteClasses.dropdownItemPlaceholder}>
                    {opt[2]}
                  </span>
                </>
              }
              className={autocompleteClasses.dropdownItem}
              onClick={() => handleDropdownClick(opt[0])}
              onKeyDown={(e) =>
                e.key === 'Enter' && handleDropdownClick(opt[0])
              }
            />
          ))}
        </ListBox>
      </Portal>
    </div>
  )
}

Autocomplete.classes = autocompleteClasses
