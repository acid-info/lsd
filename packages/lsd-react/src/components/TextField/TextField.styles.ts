import { css } from '@emotion/react'
import { textFieldClasses } from './TextField.classes'

export const TextFieldStyles = css`
  .${textFieldClasses.root} {
    width: auto;
    border-bottom: 1px solid rgb(var(--lsd-border-primary));
    box-sizing: border-box;
    align-items: center;
  }

  .${textFieldClasses.root} > div {
    display: flex;
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

  .${textFieldClasses.error} {
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

  .${textFieldClasses.withIcon} {
  }

  .${textFieldClasses.icon} {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`
