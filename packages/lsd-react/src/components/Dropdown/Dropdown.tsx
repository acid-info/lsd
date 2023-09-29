import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { SelectOption, useSelect } from '../../utils/useSelect'
import { DropdownItem } from '../DropdownItem'
import { DropdownMenu } from '../DropdownMenu'
import { ArrowDownIcon, ArrowUpIcon, ErrorIcon } from '../Icons'
import { Portal } from '../PortalProvider/Portal'
import { Typography } from '../Typography'
import { dropdownClasses } from './Dropdown.classes'

export type DropdownOption = SelectOption

export type DropdownProps = CommonProps &
  Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'label' | 'disabled' | 'value' | 'onChange'
  > & {
    label?: React.ReactNode
    error?: boolean
    disabled?: boolean
    supportingText?: string
    size?: 'small' | 'medium' | 'large'
    triggerLabel?: string

    multi?: boolean
    options?: DropdownOption[]
    value?: string | string[]
    onChange?: (value: string | string[]) => void
    variant?: 'outlined' | 'outlined-bottom'
    isOpen?: boolean
    onToggle?: (open: boolean) => void
  }

export const Dropdown: React.FC<DropdownProps> & {
  classes: typeof dropdownClasses
} = ({
  label,
  size = 'large',
  error = false,
  disabled = false,
  supportingText,
  triggerLabel,
  value = [],
  onChange,
  options = [],
  multi = false,
  variant = 'outlined',
  isOpen,
  onToggle,
  ...props
}) => {
  const commonProps = useCommonProps(props)
  const containerRef = useRef<HTMLDivElement>(null)
  const isControlled = isOpen !== undefined
  const [openState, setOpenState] = useState(false)

  const { select, isSelected, selected } = useSelect(options, value, {
    multi,
    onChange,
    onDone: () => {
      setOpenState(false)
    },
  })

  const handleToggle = (open: boolean) => {
    if (isControlled) {
      onToggle && onToggle(open)
    } else {
      setOpenState(open)
    }
  }

  const onTrigger = () => {
    if (disabled) return

    handleToggle(!openState)
  }

  useEffect(() => {
    if (disabled && openState && !isControlled) setOpenState(false)
  }, [open, disabled, isControlled])

  // Handle the controlled version of the component:
  useEffect(() => {
    typeof isOpen !== 'undefined' && setOpenState(isOpen)
  }, [isOpen])

  const buttonId = props?.id ?? (props.id || 'dropdown') + '-input'

  return (
    <div
      ref={containerRef}
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        props.className,
        dropdownClasses.root,
        dropdownClasses[size],
        error && dropdownClasses.error,
        disabled && dropdownClasses.disabled,
        openState && dropdownClasses.open,
        variant === 'outlined'
          ? dropdownClasses.outlined
          : dropdownClasses.outlinedBottom,
      )}
    >
      {label && (
        <Typography
          htmlFor={buttonId}
          className={dropdownClasses.label}
          variant="label2"
          component="label"
        >
          {label}
        </Typography>
      )}
      <div className={dropdownClasses.buttonContainer}>
        <button
          id={buttonId}
          className={clsx(dropdownClasses.trigger)}
          onClick={onTrigger}
        >
          <Typography
            color="primary"
            component="label"
            variant={size === 'large' ? 'label1' : 'label2'}
            className={dropdownClasses.optionLabel}
          >
            {selected.length > 0
              ? selected.map((opt) => opt.name).join(', ')
              : triggerLabel}
          </Typography>
          <div className={dropdownClasses.icons}>
            {error && (
              <ErrorIcon color="primary" className={dropdownClasses.icon} />
            )}

            {openState ? (
              <ArrowUpIcon
                color="primary"
                className={dropdownClasses.menuIcon}
              />
            ) : (
              <ArrowDownIcon
                color="primary"
                className={dropdownClasses.menuIcon}
              />
            )}
          </div>
        </button>
      </div>
      {supportingText && (
        <Typography
          variant={size === 'large' ? 'label1' : 'label2'}
          component="p"
          className={dropdownClasses.supportingText}
        >
          {supportingText}
        </Typography>
      )}

      <Portal id="dropdown">
        <DropdownMenu
          handleRef={containerRef}
          open={openState}
          onClose={() => handleToggle(false)}
          size={size}
          genericFontFamily={props.genericFontFamily}
        >
          {options.map((opt) => (
            <DropdownItem
              key={opt.value}
              size={size}
              tabIndex={0}
              onClick={select.bind(null, opt)}
              withIcon={multi}
              label={opt.name}
              selected={isSelected(opt)}
              onKeyDown={(e) => e.key === 'Enter' && select(opt)}
            />
          ))}
        </DropdownMenu>
      </Portal>
    </div>
  )
}

Dropdown.classes = dropdownClasses
