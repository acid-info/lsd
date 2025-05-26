import { tabsClasses } from './Tabs.classes'
import { tabItemClasses } from '../TabItem/TabItem.classes'

export const TabsStyles = `
  .${tabsClasses.root} {
    display: flex;
    flex-direction: row;
    overflow: auto;

    width: fit-content;
    max-width: 100%;

    & > * {
      flex-shrink: 0;
    }

    border-bottom: 1px solid rgb(var(--lsd-border-primary));

    .${tabItemClasses.root} {
      border-bottom: none;
    }
  }

  .${tabsClasses.fullWidth} {
    width: 100%;
    justify-content: stretch;

    & > * {
      width: 100%;
      flex: 1 0;
    }
  }

  .${tabsClasses.root} {
    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .${tabsClasses.leftScrollControl} {
    left: 0;
  }

  .${tabsClasses.rightScrollControl} {
    right: 0;
  }

  .${tabsClasses.rightScrollControl}, .${tabsClasses.leftScrollControl} {
    top: 0;
    flex: 0 1;
    position: sticky;
  }
`
