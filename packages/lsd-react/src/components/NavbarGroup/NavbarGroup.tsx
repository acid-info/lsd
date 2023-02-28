import clsx from 'clsx'
import React from 'react'
import { navbarGroupClasses } from './NavbarGroup.classes'

export type NavbarGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  left?: boolean
  right?: boolean
  center?: boolean
}

export const NavbarGroup: React.FC<NavbarGroupProps> & {
  classes: typeof navbarGroupClasses
} = ({ left, right, center, children, ...props }) => {
  return (
    <div
      {...props}
      className={clsx(
        props.className,
        navbarGroupClasses.root,
        left && navbarGroupClasses.left,
        right && navbarGroupClasses.right,
        center && navbarGroupClasses.center,
      )}
    >
      {children}
    </div>
  )
}

NavbarGroup.classes = navbarGroupClasses
