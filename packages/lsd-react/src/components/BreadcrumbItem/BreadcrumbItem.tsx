import clsx from 'clsx'
import React from 'react'
import { Typography } from '../Typography'
import { breadcrumbItemClasses } from './BreadcrumbItem.classes'

export type BreadcrumbItemProps = React.HTMLAttributes<HTMLDivElement> & {
  size: 'small' | 'medium' | 'large'
  label: string
  link?: string
  current?: boolean
  disabled?: boolean
  selected?: boolean
  ellipsisRef?: React.RefObject<HTMLLIElement>
  onClick?: () => void
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> & {
  classes: typeof breadcrumbItemClasses
} = ({
  label,
  link,
  size = 'large',
  current,
  selected,
  ellipsisRef,
  onClick,
}) => {
  return (
    <li
      className={clsx(breadcrumbItemClasses.element)}
      aria-selected={selected ? 'true' : 'false'}
      onClick={onClick}
      ref={ellipsisRef}
    >
      <Typography
        color="primary"
        component="a"
        href={link}
        variant={size === 'large' ? 'label1' : 'label2'}
        className={clsx(
          breadcrumbItemClasses.elementLink,
          current && breadcrumbItemClasses.elementCurrentPage,
        )}
      >
        {label}
      </Typography>
    </li>
  )
}

BreadcrumbItem.classes = breadcrumbItemClasses
