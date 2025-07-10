import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../../utils/useCommonProps'
import { CheckboxIcon, CheckboxOutlineBlankIcon, LsdIconProps } from '../Icons'
import { Typography } from '../Typography'
import styles from './DropdownItem.module.css'

export type DropdownItemProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
    label: React.ReactNode
    selected?: boolean
    withIcon?: boolean
    disabled?: boolean
    size: 'small' | 'medium' | 'large'
  }

function DropdownItem({
  label,
  size = 'large',
  withIcon,
  selected,
  disabled,
  className,
  ...props
}: DropdownItemProps) {
  const commonProps = useCommonProps(props)

  const iconProps: LsdIconProps = {
    color: 'primary',
    className: styles.icon,
  }

  return (
    <div
      role="option"
      aria-selected={selected ? 'true' : 'false'}
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        className,
        styles['root-dropdownItem'],
        styles[size],
        withIcon && styles.withIcon,
        disabled && styles.disabled,
      )}
    >
      {withIcon &&
        (selected ? (
          <CheckboxIcon {...iconProps} />
        ) : (
          <CheckboxOutlineBlankIcon {...iconProps} />
        ))}
      <Typography
        variant={size === 'large' ? 'label1' : 'label2'}
        component="span"
        className={styles.label}
      >
        {label}
      </Typography>
    </div>
  )
}

export { DropdownItem }
