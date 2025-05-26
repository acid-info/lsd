import { autocompleteClasses } from './Autocomplete.classes'

export const AutocompleteStyles = `
  .${autocompleteClasses.root} {
    box-sizing: border-box;
  }

  .${autocompleteClasses.label} {
    display: block;
  }

  .${autocompleteClasses.inputContainer} {
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

  .${autocompleteClasses.icon} {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .${autocompleteClasses.error} {
    text-decoration: line-through;
  }

  .${autocompleteClasses.large} {
    width: 208px;
  }

  .${autocompleteClasses.large} .${autocompleteClasses.label} {
    margin: 0 0 6px 18px;
  }

  .${autocompleteClasses.large} .${autocompleteClasses.inputContainer} {
    height: 40px;
  }

  .${autocompleteClasses.large} .${autocompleteClasses.input} {
    padding: 9px 17px;
  }

  .${autocompleteClasses.large} .${autocompleteClasses.icon} {
    padding: 12px 13px;
  }

  .${autocompleteClasses.medium} {
    width: 188px;
  }

  .${autocompleteClasses.medium} .${autocompleteClasses.label} {
    margin: 0 0 6px 14px;
  }

  .${autocompleteClasses.medium} .${autocompleteClasses.inputContainer} {
    height: 32px;
  }

  .${autocompleteClasses.medium} .${autocompleteClasses.input} {
    padding: 5px 13px;
  }

  .${autocompleteClasses.medium} .${autocompleteClasses.icon} {
    padding: 8px 11px;
  }

  .${autocompleteClasses.small} {
    width: 164px;
  }

  .${autocompleteClasses.small} .${autocompleteClasses.label} {
    margin: 0 0 6px 12px;
  }

  .${autocompleteClasses.small} .${autocompleteClasses.inputContainer} {
    height: 28px;
  }

  .${autocompleteClasses.small} .${autocompleteClasses.input} {
    padding: 5px 11px;
  }

  .${autocompleteClasses.small} .${autocompleteClasses.icon} {
    padding: 6px 9px;
  }

  .${autocompleteClasses.withIcon} {
  }

  .${autocompleteClasses.outlined} .${autocompleteClasses.inputContainer} {
    border: 1px solid rgb(var(--lsd-border-primary));
  }

  .${autocompleteClasses.underlined} .${autocompleteClasses.inputContainer} {
    border: 1px solid transparent;
    border-bottom: 1px solid rgb(var(--lsd-border-primary));
  }

  .${autocompleteClasses.dropdownItemPlaceholder} {
    opacity: 0.5;
    white-space: pre;
  }
`
