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
  outlined?: boolean
  disabled?: boolean
  selected?: boolean
  ellipsisRef?: React.RefObject<HTMLLIElement>
  onClick?: () => void
  size?: 'small' | 'large'
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> & {
  classes: typeof breadcrumbItemClasses
} = ({
  size = 'large',
  label,
  link,
  linkComponent: LinkComponent = (props) => <a {...props}>{props.children}</a>,
  outlined,
  selected,
  ellipsisRef,
  onClick,
  className,
  ...props
}) => {
  return (
    <li
      {...props}
      className={clsx(
        breadcrumbItemClasses.root,
        breadcrumbItemClasses[size],
        className,
      )}
      aria-selected={selected ? 'true' : 'false'}
      onClick={onClick}
      ref={ellipsisRef}
    >
      <LinkComponent
        href={link}
        className={clsx(
          breadcrumbItemClasses.itemLink,
          outlined && breadcrumbItemClasses.outlined,
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
