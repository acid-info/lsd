import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { useInput } from '../../utils/useInput'
import { DropdownOption } from '../Dropdown'
import { CloseIcon, SearchIcon } from '../Icons'
import { ListBox } from '../ListBox'
import { Portal } from '../PortalProvider/Portal'
import { Typography } from '../Typography'
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
    options?: DropdownOption[]
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
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
  ...props
}) => {
  const ref = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const input = useInput({ defaultValue, value, onChange, ref })

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('')
  const [dropdownOption, setDropdownOption] = useState(options || [])

  const onCancel = () => input.setValue('')

  const handleDropdownClick = (value: string) => {
    setOpen(false)
    setSelected(value)
    input.setValue(value)
  }

  useEffect(() => {
    const filteredOptions = options.filter(
      (option) =>
        typeof input.value === 'string' && option.name.startsWith(input.value),
    )
    if (input.value && filteredOptions.length && input.value !== selected) {
      setDropdownOption(filteredOptions)
      setOpen(true)
    } else setOpen(false)
  }, [input.value, setOpen, setDropdownOption])

  useEffect(() => {
    if (disabled) {
      setOpen(false)
      input.setValue('')
    }
  }, [disabled])

  const renderDropdownItem = (option: DropdownOption) => {
    if (typeof input.value === 'string') {
      const suggestion = option.name.substring(
        option.name.indexOf(input.value) + input.value.length,
      )
      return (
        <>
          <Typography
            variant={size === 'large' ? 'label1' : 'label2'}
            component="span"
          >
            {input.value}
          </Typography>
          <Typography
            variant={size === 'large' ? 'label1' : 'label2'}
            component="span"
            className={autocompleteClasses.dropdownItemPlaceholder}
          >
            {suggestion}
          </Typography>
        </>
      )
    } else
      return (
        <Typography
          variant={size === 'large' ? 'label1' : 'label2'}
          component="span"
        >
          {option.name}
        </Typography>
      )
  }

  return (
    <div
      ref={containerRef}
      className={clsx(
        props.className,
        autocompleteClasses.root,
        autocompleteClasses[size],
        disabled && autocompleteClasses.disabled,
        withIcon && autocompleteClasses.withIcon,
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
          open={open}
          onClose={() => setOpen(false)}
          className={autocompleteClasses.listBox}
        >
          {dropdownOption.map((opt: DropdownOption, idx: number) => (
            <div
              key={idx}
              className={autocompleteClasses.dropdownItem}
              onClick={() => handleDropdownClick(opt.name)}
            >
              {renderDropdownItem(opt)}
            </div>
          ))}
        </ListBox>
      </Portal>
    </div>
  )
}

Autocomplete.classes = autocompleteClasses
