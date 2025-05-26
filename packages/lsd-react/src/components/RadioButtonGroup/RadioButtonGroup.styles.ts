import { radioButtonGroupClasses } from './RadioButtonGroup.classes'

export const RadioButtonGroupStyles = `
  .${radioButtonGroupClasses.root} {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: fit-content;
  }

  .${radioButtonGroupClasses.label} {
    margin-bottom: 6px;
  }
`
