import { textFieldClasses } from './TextField.classes'

export const TextFieldStyles = `
  .${textFieldClasses.root} {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
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
  }

  .${textFieldClasses.large} {
    width: 208px;

    & > * {
      padding: 10px 14px 10px 18px;
    }
  }

  .${textFieldClasses.medium} {
    width: 188px;

    & > * {
      padding: 6px 12px 6px 14px;
    }
  }

  .${textFieldClasses.small} {
    width: 164px;

    & > * {
      padding: 6px 10px 6px 12px;
    }
  }

  .${textFieldClasses.label} {
    padding-top: 0;
    padding-bottom: 6px;
  }

  .${textFieldClasses.supportingText} {
    padding-bottom: 0;
    padding-top: 6px;
  }

  .${textFieldClasses.outlined} .${textFieldClasses.inputContainer} {
    border: 1px solid rgb(var(--lsd-border-primary));
  }

  .${textFieldClasses.underlined} .${textFieldClasses.inputContainer} {
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
