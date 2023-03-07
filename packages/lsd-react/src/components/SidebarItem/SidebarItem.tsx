import clsx from 'clsx'
import React from 'react'
import { SideBarProps } from '../Sidebar/Sidebar'
import { Typography } from '../Typography'
import { sidebarItemClasses } from './SidebarItem.classes'

export type SidebarItemProps = React.HTMLAttributes<HTMLDivElement> & {
  linkComponent?: React.ComponentType<
    React.AnchorHTMLAttributes<HTMLAnchorElement>
  >
  label: string
  link?: string
  icon?: React.ReactNode
  mode?: SideBarProps['mode']
  disabled?: boolean
}

export const SidebarItem: React.FC<SidebarItemProps> & {
  classes: typeof sidebarItemClasses
} = ({
  label,
  linkComponent: LinkComponent = (props) => <a {...props}>{props.children}</a>,
  link,
  disabled = 'false',
  icon,
  mode,
  children,
  ...props
}) => {
  const renderItems = () => (
    <LinkComponent href={link}>
      {(mode === 'full-menu-with-icon' || mode === 'compact-menu') && icon}
      {mode !== 'compact-menu' && (
        <Typography className={clsx(sidebarItemClasses.text)}>
          {label}
        </Typography>
      )}
    </LinkComponent>
  )

  return (
    <div
      aria-label={label}
      {...props}
      className={clsx(
        props.className,
        sidebarItemClasses.root,
        disabled && sidebarItemClasses.disabled,
      )}
    >
      {renderItems()}
    </div>
  )
}

SidebarItem.classes = sidebarItemClasses
