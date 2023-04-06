import { css } from '@emotion/react'
import { autocompleteClasses } from './Autocomplete.classes'

export const AutocompleteStyles = css`
  .${autocompleteClasses.root} {
    width: auto;
    box-sizing: border-box;
    align-items: center;
  }

  .${autocompleteClasses.root} > div {
    display: flex;
    justify-content: space-between;
  }

  .${autocompleteClasses.disabled} {
    opacity: 0.34;
  }

  .${autocompleteClasses.input} {
    border: none;
    outline: none;
    font-size: 14px;
    color: rgb(var(--lsd-text-primary));
    background: none;
    width: 100%;
  }

  .${autocompleteClasses.input}:hover {
    outline: none;
  }

  .${autocompleteClasses.input}::placeholder {
    color: rgb(var(--lsd-text-primary));
    opacity: 0.3;
  }

  .${autocompleteClasses.error} {
    text-decoration: line-through;
  }

  .${autocompleteClasses.large} {
    width: 208px;
    height: 40px;
    padding: 10px 14px;
  }

  .${autocompleteClasses.medium} {
    width: 188px;
    height: 32px;
    padding: 6px 12px;
  }

  .${autocompleteClasses.withIcon} {
  }

  .${autocompleteClasses.icon} {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .${autocompleteClasses.listBox} {
    max-height: 400px;
    overflow: auto;
    border: 1px solid rgb(var(--lsd-border-primary));
    border-top: 0;
  }

  .${autocompleteClasses.dropdownItem} {
    border: 0;

    &:not(:last-child) {
      border-bottom: 1px solid rgb(var(--lsd-border-primary));
    }
  }

  .${autocompleteClasses.dropdownItemPlaceholder} {
    opacity: 0.5;
    white-space: pre;
  }

  .${autocompleteClasses.outlined} {
    border: 1px solid rgb(var(--lsd-border-primary));
  }

  .${autocompleteClasses.outlinedBottom} {
    border-bottom: 1px solid rgb(var(--lsd-border-primary));
  }
`
