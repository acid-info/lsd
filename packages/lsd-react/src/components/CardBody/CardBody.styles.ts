import { css } from '@emotion/react'
import { cardBodyClasses } from './CardBody.classes'

export const CardBodyStyles = css`
  .${cardBodyClasses.root} {
    box-sizing: border-box;
    padding: 14px 22px;
    border: 1px solid rgb(var(--lsd-border-primary));
  }
`
