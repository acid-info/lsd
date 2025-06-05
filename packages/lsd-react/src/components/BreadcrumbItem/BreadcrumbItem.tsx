import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { Typography } from '../Typography'
import styles from './BreadcrumbItem.module.css'

export type BreadcrumbItemProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
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

function BreadcrumbItem({
  size = 'large',
  label,
  link,
  linkComponent: LinkComponent = (props) => <a {...props}>{props.children}</a>,
  outlined,
  disabled,
  selected,
  ellipsisRef,
  onClick,
  className,
  ...props
}: BreadcrumbItemProps) {
  const commonProps = useCommonProps(props)

  return (
    <LinkComponent
      {...omitCommonProps(props)}
      href={link}
      className={clsx(
        commonProps.className,
        styles['root-breadcrumbItem'],
        outlined && styles.outlined,
        disabled && styles.disabled,
        className,
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
  )
}

export { BreadcrumbItem }
