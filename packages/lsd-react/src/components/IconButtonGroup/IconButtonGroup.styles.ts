import { css } from '@emotion/react'
import { iconButtonClasses } from '../IconButton/IconButton.classes'
import { iconButtonGroupClasses } from './IconButtonGroup.classes'

export const IconButtonGroupStyles = css`
  .${iconButtonGroupClasses.root} {
    display: flex;
    flex-direction: row;
  }

  .${iconButtonGroupClasses.outlined}
    .${iconButtonClasses.root}:not(:last-child) {
    border-right: none;
  }
`
