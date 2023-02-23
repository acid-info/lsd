import { css } from '@emotion/react'
import { cardClasses } from './Card.classes'

export const CardStyles = css`
  .${cardClasses.root} {
    color: rgb(var(--lsd-text-primary));
    background: none;
    border: 1px solid rgb(var(--lsd-border-primary));
    word-break: keep-all;
    box-sizing: border-box;
  }

  .${cardClasses.body} {
  }

  .${cardClasses.large} {
  }

  .${cardClasses.medium} {
  }

  .${cardClasses.small} {
  }
`
