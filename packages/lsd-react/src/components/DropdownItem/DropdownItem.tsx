import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { CheckboxIcon, CheckboxOutlineBlankIcon, LsdIconProps } from '../Icons'
import { Typography } from '../Typography'
import { dropdownItemClasses } from './DropdownItem.classes'

export type DropdownItemProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
    label: React.ReactNode
    selected?: boolean
    withIcon?: boolean
    disabled?: boolean
    size: 'small' | 'medium' | 'large'
  }

const classes = dropdownItemClasses

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
    className: dropdownItemClasses.icon,
  }

  return (
    <div
      role="option"
      aria-selected={selected ? 'true' : 'false'}
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        className,
        dropdownItemClasses.root,
        dropdownItemClasses[size],
        withIcon && dropdownItemClasses.withIcon,
        disabled && dropdownItemClasses.disabled,
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
        className={dropdownItemClasses.label}
      >
        {label}
      </Typography>
    </div>
  )
}

DropdownItem.classes = classes

export { DropdownItem }
