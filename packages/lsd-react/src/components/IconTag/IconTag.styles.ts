import { css } from '@emotion/react'
import { iconTagClasses } from './IconTag.classes'

export const IconTagStyles = css`
  .${iconTagClasses.root} {
    display: flex;
    width: 32px;
    height: 28px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(var(--lsd-icon-primary));
  }

  .${iconTagClasses.filled} {
    background-color: rgb(var(--lsd-icon-primary));

    svg {
      --lsd-icon-primary: var(--lsd-icon-secondary);
    }
  }

  .${iconTagClasses.outlined} {
  }
`
