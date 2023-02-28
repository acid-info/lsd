import { css } from '@emotion/react'
import { navbarGroupClasses } from './NavbarGroup.classes'

export const NavbarGroupStyles = css`
  .${navbarGroupClasses.root} {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .${navbarGroupClasses.left} {
    justify-content: flex-start;

    & > *:not(:first-child) {
      margin-left: 8px;
    }
  }

  .${navbarGroupClasses.center} {
    justify-content: center;
  }

  .${navbarGroupClasses.right} {
    justify-content: flex-end;

    & > *:not(:last-child) {
      margin-right: 8px;
    }
  }
`
