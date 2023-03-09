import { css } from '@emotion/react'
import { radioButtonGroupClasses } from './RadioButtonGroup.classes'

export const RadioButtonGroupStyles = css`
  .${radioButtonGroupClasses.root} {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: fit-content;
  }

  .${radioButtonGroupClasses.label} {
    margin-bottom: 6px;
  }
`
