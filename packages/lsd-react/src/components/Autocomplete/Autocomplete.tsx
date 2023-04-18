import clsx from 'clsx'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useInput } from '../../utils/useInput'
import { DropdownItem } from '../DropdownItem'
import { CloseIcon, SearchIcon } from '../Icons'
import { DropdownMenu } from '../DropdownMenu'
import { Portal } from '../PortalProvider/Portal'
import { Typography } from '../Typography'
import { autocompleteClasses } from './Autocomplete.classes'
import { CommonProps, useCommonProps } from '../../utils/useCommonProps'

export type AutocompleteProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'value'> &
  Pick<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    label?: React.ReactNode
    size?: 'large' | 'medium' | 'small'
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
  label,
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
  const commonProps = useCommonProps(props)
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

  const inputId = inputProps?.id ?? (props.id || 'autocomplete') + '-input'

  return (
    <div
      ref={containerRef}
      {...props}
      className={clsx(
        props.className,
        commonProps.className,
        autocompleteClasses.root,
        autocompleteClasses[size],
        disabled && autocompleteClasses.disabled,
        withIcon && autocompleteClasses.withIcon,
        variant === 'outlined'
          ? autocompleteClasses.outlined
          : autocompleteClasses.outlinedBottom,
      )}
    >
      {label && (
        <Typography
          htmlFor={inputId}
          className={autocompleteClasses.label}
          variant="label2"
          component="label"
        >
          {label}
        </Typography>
      )}
      <div className={autocompleteClasses.inputContainer}>
        <input
          id={inputId}
          ref={ref}
          value={input.value}
          placeholder={placeholder}
          onChange={input.onChange}
          disabled={disabled}
          onFocus={() => setOpen(true)}
          {...inputProps}
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
        <DropdownMenu
          handleRef={containerRef}
          open={isOpen}
          onClose={() => setOpen(false)}
          size={size}
          genericFontFamily={props.genericFontFamily}
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
              onClick={() => handleDropdownClick(opt[0])}
              onKeyDown={(e) =>
                e.key === 'Enter' && handleDropdownClick(opt[0])
              }
            />
          ))}
        </DropdownMenu>
      </Portal>
    </div>
  )
}

Autocomplete.classes = autocompleteClasses
