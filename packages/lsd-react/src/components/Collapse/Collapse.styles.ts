import { collapseClasses } from './Collapse.classes'

export const CollapseStyles = `
  .${collapseClasses.root} {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .${collapseClasses.open} {
    .${collapseClasses.content} {
      border-top: 1px solid transparent;
    }
  }

  .${collapseClasses.content} {
    border: 1px solid rgb(var(--lsd-border-primary));
  }
`
