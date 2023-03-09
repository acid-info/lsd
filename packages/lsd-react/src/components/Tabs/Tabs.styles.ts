import { css } from '@emotion/react'
import { tabsClasses } from './Tabs.classes'

export const TabsStyles = css`
  .${tabsClasses.root} {
    display: flex;
    flex-direction: row;
    overflow: auto;

    & > * {
      flex-shrink: 0;
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
