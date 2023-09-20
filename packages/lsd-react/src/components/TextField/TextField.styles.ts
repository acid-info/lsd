import { css } from '@emotion/react'
import { textFieldClasses } from './TextField.classes'

export const TextFieldStyles = css`
  .${textFieldClasses.root} {
    width: auto;
    box-sizing: border-box;
  }

  .${textFieldClasses.inputContainer} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .${textFieldClasses.disabled} {
    opacity: 0.34;
  }

  .${textFieldClasses.input} {
    border: none;
    outline: none;
    font-size: 14px;
    color: rgb(var(--lsd-text-primary));
    background: none;
    width: 100%;
  }

  .${textFieldClasses.input}:hover {
    outline: none;
  }

  .${textFieldClasses.input}::placeholder {
    color: rgb(var(--lsd-text-primary));
    opacity: 0.3;
  }

  .${textFieldClasses.error} .${textFieldClasses.input} {
    text-decoration: line-through;
  }

  .${textFieldClasses.supportingText} {
    width: fit-content;
    margin-top: 20px;
  }

  .${textFieldClasses.large} {
    width: 208px;
    height: 40px;
    padding: 10px 14px;
  }

  .${textFieldClasses.medium} {
    width: 188px;
    height: 32px;
    padding: 6px 12px;
  }

  .${textFieldClasses.outlined} {
    border: 1px solid rgb(var(--lsd-border-primary));
  }

  .${textFieldClasses.outlinedBottom} {
    border: 1px solid transparent;
    border-bottom: 1px solid rgb(var(--lsd-border-primary));
  }

  .${textFieldClasses.clearButton} {
    padding: 0;
    width: auto;
    height: auto;
    margin: 0;
    border: 0;
  }

  .${textFieldClasses.icon} {
  }
`
