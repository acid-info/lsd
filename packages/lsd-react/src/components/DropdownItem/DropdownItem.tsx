import clsx from 'clsx'
import React from 'react'
import { CommonProps, useCommonProps } from '../../utils/useCommonProps'
import { CheckboxFilledIcon, CheckboxIcon, LsdIconProps } from '../Icons'
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

export const DropdownItem: React.FC<DropdownItemProps> & {
  classes: typeof dropdownItemClasses
} = ({
  label,
  size = 'large',
  withIcon,
  selected,
  disabled,
  className,
  ...props
}) => {
  const commonProps = useCommonProps(props)

  const iconProps: LsdIconProps = {
    color: 'primary',
    className: dropdownItemClasses.icon,
  }

  return (
    <div
      role="option"
      aria-selected={selected ? 'true' : 'false'}
      {...props}
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
          <CheckboxFilledIcon {...iconProps} />
        ) : (
          <CheckboxIcon {...iconProps} />
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

DropdownItem.classes = dropdownItemClasses
