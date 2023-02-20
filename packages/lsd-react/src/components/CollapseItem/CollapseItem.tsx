import clsx from 'clsx'
import React from 'react'
import { ArrowDownIcon, ArrowUpIcon } from '../Icons'
import { Typography } from '../Typography'
import { collapseItemClasses } from './CollapseItem.classes'

export type CollapseItemProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'label' | 'disabled'
> & {
  label: string
  open: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  onTrigger: () => void
}

export const CollapseItem: React.FC<CollapseItemProps> & {
  classes: typeof collapseItemClasses
} = ({
  label,
  open,
  disabled = false,
  size = 'large',
  onTrigger,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx(
        props.className,
        collapseItemClasses.root,
        collapseItemClasses[size],
        disabled && collapseItemClasses.disabled,
        open && collapseItemClasses.open,
      )}
    >
      <button className={clsx(collapseItemClasses.trigger)} onClick={onTrigger}>
        <Typography
          color="primary"
          component="label"
          variant={size === 'small' ? 'label2' : 'label1'}
          className={collapseItemClasses.triggerLabel}
        >
          {label}
        </Typography>
        <div className={collapseItemClasses.triggerIcons}>
          {open ? (
            <ArrowUpIcon
              color="primary"
              className={collapseItemClasses.triggerMenuIcon}
            />
          ) : (
            <ArrowDownIcon
              color="primary"
              className={collapseItemClasses.triggerMenuIcon}
            />
          )}
        </div>
      </button>
    </div>
  )
}

CollapseItem.classes = collapseItemClasses
