import { css } from '@emotion/react'
import { navbarGroupClasses } from '../NavbarGroup/NavbarGroup.classes'
import { navbarClasses } from './Navbar.classes'

export const NavbarStyles = css`
  .${navbarClasses.root} {
    box-sizing: border-box;
    padding: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-bottom: 1px solid rgb(var(--lsd-border-primary));
  }

  .${navbarClasses.container} {
    width: 100%;
    display: grid;
    grid-template-areas: 'left center right';

    & > .${navbarGroupClasses.left} {
      grid-area: left;
    }

    & > .${navbarGroupClasses.center} {
      grid-area: center;
    }

    & > .${navbarGroupClasses.right} {
      grid-area: right;
    }
  }
`
