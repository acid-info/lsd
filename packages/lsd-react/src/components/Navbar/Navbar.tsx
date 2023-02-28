import clsx from 'clsx'
import React from 'react'
import { navbarClasses } from './Navbar.classes'

export type NavbarProps = React.HTMLAttributes<HTMLDivElement> & {
  maxWidth?: string | number
}

export const Navbar: React.FC<NavbarProps> & {
  classes: typeof navbarClasses
} = ({ maxWidth, children, ...props }) => {
  return (
    <div {...props} className={clsx(props.className, navbarClasses.root)}>
      <div
        className={clsx(navbarClasses.container)}
        style={{ maxWidth: maxWidth ?? 'initial' }}
      >
        {children}
      </div>
    </div>
  )
}

Navbar.classes = navbarClasses
