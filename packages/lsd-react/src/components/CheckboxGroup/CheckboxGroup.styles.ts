import { css } from '@emotion/react'
import { checkboxGroupClasses } from './CheckboxGroup.classes'

export const CheckboxGroupStyles = css`
  .${checkboxGroupClasses.root} {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: fit-content;
  }

  .${checkboxGroupClasses.label} {
    margin-bottom: 6px;
  }
`
