import clsx from 'clsx'
import React from 'react'
import { ArrowDownIcon, ArrowUpIcon } from '../Icons'
import { Typography } from '../Typography'
import { collapseHeaderClasses } from './CollapseHeader.classes'

export type CollapseHeaderProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'label' | 'disabled'
> & {
  label: string
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  disabled?: boolean
  onTrigger: () => void
  size?: 'small' | 'medium' | 'large'
}

export const CollapseHeader: React.FC<CollapseHeaderProps> & {
  classes: typeof collapseHeaderClasses
} = ({
  label,
  disabled = false,
  open,
  setOpen,
  size = 'large',
  onTrigger,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx(
        props.className,
        collapseHeaderClasses.root,
        collapseHeaderClasses[size],
        disabled && collapseHeaderClasses.disabled,
        open && collapseHeaderClasses.open,
      )}
    >
      <button
        className={clsx(collapseHeaderClasses.trigger)}
        onClick={onTrigger}
      >
        <Typography
          color="primary"
          component="label"
          variant={size === 'small' ? 'label2' : 'label1'}
          className={collapseHeaderClasses.label}
        >
          {label}
        </Typography>
        <div className={collapseHeaderClasses.icons}>
          {open ? (
            <ArrowUpIcon
              color="primary"
              className={collapseHeaderClasses.menuIcon}
            />
          ) : (
            <ArrowDownIcon
              color="primary"
              className={collapseHeaderClasses.menuIcon}
            />
          )}
        </div>
      </button>
    </div>
  )
}

CollapseHeader.classes = collapseHeaderClasses
