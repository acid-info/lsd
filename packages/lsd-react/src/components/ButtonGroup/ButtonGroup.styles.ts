import { css } from '@emotion/react'
import { buttonGroupClasses } from './ButtonGroup.classes'
import { buttonClasses } from '../Button/Button.classes'

export const ButtonGroupStyles = css`
  .${buttonGroupClasses.root} {
    display: flex;
    flex-direction: row;
  }

  .${buttonGroupClasses.outlined} .${buttonClasses.root}:not(:last-child) {
    border-right: none;
  }
`
