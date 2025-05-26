import { cardHeaderClasses } from './CardHeader.classes'

export const CardHeaderStyles = `
  .${cardHeaderClasses.root} {
    box-sizing: border-box;
    padding: 10px 18px;
    text-align: center;
    border: 1px solid rgb(var(--lsd-border-primary));
  }

  .${cardHeaderClasses.title} {
    overflow: hidden;
    word-break: break-all;
  }

  .${cardHeaderClasses.large} {
    padding: 10px 18px;
  }

  .${cardHeaderClasses.medium} {
    padding: 6px 14px;
  }

  .${cardHeaderClasses.small} {
    padding: 6px 12px;
  }
`
