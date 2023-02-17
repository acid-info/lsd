import { css } from '@emotion/react'
import { textFieldClasses } from './TextField.classes'

export const TextFieldStyles = css`
  .${textFieldClasses.root} {
    width: auto;
    border-bottom: 1px solid rgb(var(--lsd-border-primary));
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }

  .${textFieldClasses.input} {
    border: none;
    outline: none;
    font-size: 14px;
    color: rgb(var(--lsd-text-primary));
    background: none;
    width: inherit;
  }

  .${textFieldClasses.input}:hover {
    outline: none;
  }

  .${textFieldClasses.input}::placeholder {
    color: rgb(var(--lsd-text-primary));
    opacity: 0.3;
  }

  .${textFieldClasses.disabled} {
    cursor: default;
    opacity: 0.34;
  }

  .${textFieldClasses.error} {
    text-decoration: line-through;
  }

  .${textFieldClasses.supportingText} {
    width: fit-content;
    font-size: 12px;
    line-height: 16px;
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

  .${textFieldClasses.supportingTextLarge} {
    margin: 8px 14px;
  }

  .${textFieldClasses.supportingTextMedium} {
    margin: 8px 12px;
  }

  .${textFieldClasses.withIcon} {
  }

  .${textFieldClasses.filled} {
    cursor: pointer;
    display: flex;
    svg path {
      --lsd-icon-primary: var(--lsd-icon-primary);
    }
  }
`
