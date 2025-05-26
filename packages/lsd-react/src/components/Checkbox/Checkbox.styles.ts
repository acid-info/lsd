import { checkboxClasses } from './Checkbox.classes'

export const CheckboxStyles = `
  .${checkboxClasses.root} {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .${checkboxClasses.input} {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .${checkboxClasses.root}:not(.${checkboxClasses.disabled}) {
    &:hover,
    &.${checkboxClasses.focused} {
      text-decoration: underline;
    }

    .${checkboxClasses.input} {
      cursor: pointer;
    }
  }

  .${checkboxClasses.disabled} {
    opacity: 0.34;
  }

  .${checkboxClasses.label} {
    margin-left: 18px;
  }

  .${checkboxClasses.large} {
    .${checkboxClasses.label} {
      margin-left: 18px;
    }
  }

  .${checkboxClasses.medium} {
    .${checkboxClasses.label} {
      margin-left: 14px;
    }
  }

  .${checkboxClasses.small} {
    .${checkboxClasses.label} {
      margin-left: 12px;
    }
  }
`
