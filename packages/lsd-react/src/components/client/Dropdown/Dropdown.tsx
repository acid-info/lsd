import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../../utils/useCommonProps'
import { SelectOption, useSelect } from '../../../utils/useSelect'
import { DropdownItem } from '../DropdownItem'
import { DropdownMenu, DropdownMenuProps } from '../DropdownMenu'
import { ChevronDownIcon, ChevronUpIcon, ErrorIcon } from '../Icons'
import { Portal } from '../PortalProvider/Portal'
import { Typography } from '../Typography'
import styles from './Dropdown.module.css'

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
    variant?: 'outlined' | 'underlined'
    isOpen?: boolean
    onToggle?: (open: boolean) => void

    menuProps?: Partial<DropdownMenuProps>
  }

function Dropdown({
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
  menuProps = {},
  ...props
}: DropdownProps) {
  const commonProps = useCommonProps(props)
  const containerRef = useRef<HTMLDivElement>(null)
  const isControlled = isOpen !== undefined
  const [openState, setOpenState] = useState(false)

  if (isControlled && isOpen !== openState) setOpenState(isOpen)

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
  }, [openState, disabled, isControlled])

  const buttonId = props?.id ?? (props.id || 'dropdown') + '-input'

  return (
    <div
      ref={containerRef}
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        props.className,
        styles['root-dropdown'],
        styles[size],
        error && styles.error,
        disabled && styles.disabled,
        openState && styles.open,
        variant === 'outlined' ? styles.outlined : styles.underlined,
      )}
    >
      {label && (
        <Typography
          htmlFor={buttonId}
          className={styles.label}
          variant="label2"
          component="label"
        >
          {label}
        </Typography>
      )}
      <div className={styles.buttonContainer}>
        <button
          id={buttonId}
          className={clsx(styles.trigger)}
          onClick={onTrigger}
        >
          <Typography
            color="primary"
            component="label"
            variant={size === 'large' ? 'label1' : 'label2'}
            className={styles.optionLabel}
          >
            {selected.length > 0
              ? selected.map((opt) => opt.name).join(', ')
              : triggerLabel}
          </Typography>
          <div className={styles.icons}>
            {error && <ErrorIcon color="primary" className={styles.icon} />}

            {openState ? (
              <ChevronUpIcon color="primary" className={styles.menuIcon} />
            ) : (
              <ChevronDownIcon color="primary" className={styles.menuIcon} />
            )}
          </div>
        </button>
      </div>
      {supportingText && (
        <Typography
          variant={size === 'large' ? 'label1' : 'label2'}
          component="p"
          className={styles.supportingText}
        >
          {supportingText}
        </Typography>
      )}

      <Portal id="dropdown">
        <DropdownMenu
          handleRef={containerRef as React.RefObject<HTMLElement>}
          open={openState}
          onClose={() => handleToggle(false)}
          size={size}
          genericFontFamily={props.genericFontFamily}
          {...menuProps}
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

export { Dropdown }
