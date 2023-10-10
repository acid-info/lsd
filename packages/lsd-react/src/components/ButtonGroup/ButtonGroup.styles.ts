import { css } from '@emotion/react'
import { buttonGroupClasses } from './ButtonGroup.classes'
import { buttonClasses } from '../Button/Button.classes'

export const ButtonGroupStyles = css`
  .${buttonGroupClasses.root} {
    display: flex;

    .${buttonClasses.outlined} {
      border: none;
      border-top: 1px solid rgb(var(--lsd-border-primary));
      border-bottom: 1px solid rgb(var(--lsd-border-primary));
      border-right: 1px solid rgb(var(--lsd-border-primary));
    }
  }

  .${buttonGroupClasses.root} > .${buttonClasses.outlined}:first-child {
    border-left: 1px solid rgb(var(--lsd-border-primary));
  }
`
