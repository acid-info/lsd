import { numberInputClasses } from './NumberInput.classes'

export const NumberInputStyles = `
  .${numberInputClasses.root} {
    width: auto;
    box-sizing: border-box;
  }

  .${numberInputClasses.mainContainer}:hover {
    text-decoration: underline;
  }

  .${numberInputClasses.error} {
    .${numberInputClasses.mainContainer} {
      text-decoration: line-through;
    }
  }

  .${numberInputClasses.label} {
    display: block;
  }

  .${numberInputClasses.plusMinusIcons} {
    display: flex;
    flex-shrink: 0;
  }

  .${numberInputClasses.inputContainer} {
    box-sizing: border-box;
    border: 1px solid rgb(var(--lsd-border-primary));
    border-left: 0px;
    border-right: 0px;
  }

  .${numberInputClasses.errorIcon} {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px 8px;
  }

  .${numberInputClasses.inputContainer} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .${numberInputClasses.disabled} {
    opacity: 0.34;
  }

  .${numberInputClasses.mainContainer} {
    display: flex;
    align-items: center;
  }

  .${numberInputClasses.input} {
    border: none;
    outline: none;
    font-size: 14px;
    color: rgb(var(--lsd-text-primary));
    background: none;
    text-align: center;
    padding: 0 4px;
  }

  .${numberInputClasses.input}::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
  }

  .${numberInputClasses.input}:hover {
    outline: none;
  }

  .${numberInputClasses.supportingText} {
    position: absolute;
  }

  .${numberInputClasses.large} {
    .${numberInputClasses.label} {
      margin: 0 0 6px 18px;
    }
    .${numberInputClasses.inputContainer} {
      height: 40px;
    }
    .${numberInputClasses.input} {
      width: 62px;
    }
    .${numberInputClasses.plusMinusIcons} {
      height: 40px;
      width: 40px;
    }
    .${numberInputClasses.supportingText} {
      margin: 6px 18px 0 18px;
    }
  }

  .${numberInputClasses.medium} {
    .${numberInputClasses.label} {
      margin: 0 0 6px 14px;
    }
    .${numberInputClasses.inputContainer} {
      height: 32px;
    }
    .${numberInputClasses.input} {
      width: 58px;
    }
    .${numberInputClasses.plusMinusIcons} {
      height: 32px;
      width: 32px;
    }
    .${numberInputClasses.supportingText} {
      margin: 6px 14px 0 14px;
    }
  }

  .${numberInputClasses.small} {
    .${numberInputClasses.label} {
      margin: 0 0 6px 12px;
    }
    .${numberInputClasses.inputContainer} {
      height: 28px;
    }
    .${numberInputClasses.input} {
      width: 50px;
    }
    .${numberInputClasses.plusMinusIcons} {
      height: 28px;
      width: 28px;
    }
    .${numberInputClasses.supportingText} {
      margin: 6px 12px 0 12px;
    }
  }
`
