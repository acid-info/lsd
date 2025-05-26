import { cardHeaderClasses } from '../CardHeader/CardHeader.classes'
import { cardClasses } from './Card.classes'

export const CardStyles = `
  .${cardClasses.root} {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .${cardClasses.root} > .${cardHeaderClasses.root} {
    margin-bottom: -1px;
  }

  .${cardClasses.large} {
  }

  .${cardClasses.medium} {
  }

  .${cardClasses.small} {
  }
`
