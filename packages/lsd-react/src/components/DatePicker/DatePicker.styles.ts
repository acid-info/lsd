import { datePickerClasses } from './DatePicker.classes'
import { dateFieldClasses } from '../DateField/DateField.classes'

export const DatePickerStyles = `
  .${datePickerClasses.root} {
    width: fit-content;
  }

  .${datePickerClasses.calendar} {
    border-top: none !important;
  }

  .${datePickerClasses.large} {
    .${dateFieldClasses.large} {
      width: 318px;
    }
  }

  .${datePickerClasses.medium} {
    .${dateFieldClasses.medium} {
      width: 290px;
    }
  }

  .${datePickerClasses.small} {
    .${dateFieldClasses.small} {
      width: 262px;
    }
  }
`
