import clsx from 'clsx'
import React from 'react'
import { Typography } from '../Typography'
import { breadcrumbItemClasses } from './BreadcrumbItem.classes'
export type BreadcrumbItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
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
  current,
  selected,
  ellipsisRef,
  onClick,
  className,
  ...props
}) => {
  return (
    <li
      className={clsx(breadcrumbItemClasses.root, className)}
      aria-selected={selected ? 'true' : 'false'}
      onClick={onClick}
      ref={ellipsisRef}
      {...props}
    >
      <LinkComponent
        href={link}
        className={clsx(
          breadcrumbItemClasses.itemLink,
          current && breadcrumbItemClasses.itemCurrentPage,
        )}
      >
        <Typography color="primary" component="span" variant={'label1'}>
          {label}
        </Typography>
      </LinkComponent>
    </li>
  )
}

BreadcrumbItem.classes = breadcrumbItemClasses
