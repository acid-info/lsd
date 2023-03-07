import { css } from '@emotion/react'
import { sideBarClasses } from './Sidebar.classes'

export const SideBarStyles = css`
  .${sideBarClasses.root} {
    border-right: 1px solid rgb(var(--lsd-border-primary));
  }
`
