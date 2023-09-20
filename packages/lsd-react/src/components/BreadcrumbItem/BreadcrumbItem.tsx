import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { Typography } from '../Typography'
import { breadcrumbItemClasses } from './BreadcrumbItem.classes'

export type BreadcrumbItemProps = CommonProps &
  React.LiHTMLAttributes<HTMLLIElement> & {
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
  const commonProps = useCommonProps(props)

  return (
    <li
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
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
