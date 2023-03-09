import { css } from '@emotion/react'
import { radioButtonClasses } from './RadioButton.classes'

export const RadioButtonStyles = css`
  .${radioButtonClasses.root} {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .${radioButtonClasses.input} {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .${radioButtonClasses.root}:not(.${radioButtonClasses.disabled}) {
    &:hover {
      text-decoration: underline;
    }

    .${radioButtonClasses.input} {
      cursor: pointer;
    }
  }

  .${radioButtonClasses.disabled} {
    opacity: 0.34;
  }

  .${radioButtonClasses.label} {
    margin-left: 18px;
  }

  .${radioButtonClasses.large} {
    .${radioButtonClasses.label} {
      margin-left: 18px;
    }
  }

  .${radioButtonClasses.medium} {
    .${radioButtonClasses.label} {
      margin-left: 14px;
    }
  }

  .${radioButtonClasses.small} {
    .${radioButtonClasses.label} {
      margin-left: 12px;
    }
  }
`
