import { checkboxGroupClasses } from './CheckboxGroup.classes'

export const CheckboxGroupStyles = `
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
