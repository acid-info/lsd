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
  onClick?: () => void
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> & {
  classes: typeof breadcrumbItemClasses
} = ({ label, link, size = 'large', current, onClick, selected }) => {
  return (
    <li
      className={clsx(breadcrumbItemClasses.listElement)}
      aria-selected={selected ? 'true' : 'false'}
      onClick={onClick}
    >
      <Typography
        color="primary"
        component="a"
        href={link}
        variant={size === 'large' ? 'label1' : 'label2'}
        className={
          current
            ? clsx(
                breadcrumbItemClasses.listElementLink,
                breadcrumbItemClasses.listElementCurrentPage,
              )
            : breadcrumbItemClasses.listElementLink
        }
      >
        {label}
      </Typography>
    </li>
  )
}

BreadcrumbItem.classes = breadcrumbItemClasses
