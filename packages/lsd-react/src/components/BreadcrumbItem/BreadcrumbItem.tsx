import clsx from 'clsx'
import React from 'react'
import { Typography } from '../Typography'
import { breadcrumbItemClasses } from './BreadcrumbItem.classes'
export type BreadcrumbItemProps = React.HTMLAttributes<HTMLDivElement> & {
  size: 'small' | 'medium' | 'large'
  label: string
  link?: string
  linkComponent?: React.ComponentType<
    React.AnchorHTMLAttributes<HTMLAnchorElement>
  >
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
  linkComponent: LinkComponent = (props) => <a {...props}>{props.children}</a>,
  size = 'large',
  current,
  selected,
  ellipsisRef,
  onClick,
}) => {
  return (
    <li
      className={clsx(breadcrumbItemClasses.root)}
      aria-selected={selected ? 'true' : 'false'}
      onClick={onClick}
      ref={ellipsisRef}
    >
      <LinkComponent
        href={link}
        className={clsx(
          breadcrumbItemClasses.itemLink,
          current && breadcrumbItemClasses.itemCurrentPage,
        )}
      >
        <Typography
          color="primary"
          component="span"
          variant={size === 'large' ? 'label1' : 'label2'}
        >
          {label}
        </Typography>
      </LinkComponent>
    </li>
  )
}

BreadcrumbItem.classes = breadcrumbItemClasses
