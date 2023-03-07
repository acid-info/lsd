import clsx from 'clsx'
import React from 'react'
import { Typography } from '../Typography'
import { sideBarClasses } from './Sidebar.classes'

export type SideBarProps = React.HTMLAttributes<HTMLDivElement> & {
  mode?: 'full-menu' | 'full-menu-with-icon' | 'compact-menu'
  disabled?: boolean
}

export const SideBar: React.FC<SideBarProps> & {
  classes: typeof sideBarClasses
} = ({ mode = 'full-menu', children, ...props }) => {
  return (
    <>
      <div {...props} className={clsx(props.className, sideBarClasses.root)}>
        <Typography color="primary" component="label" variant={'label1'}>
          {children}
        </Typography>
      </div>
    </>
  )
}

SideBar.classes = sideBarClasses
