import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { useHorizontalScroll } from '../../utils/useHorizontalScroll'
import { NavigateBeforeIcon, NavigateNextIcon } from '../Icons'
import { TabItem } from '../TabItem'
import { TabsContext } from './Tab.context'
import { tabsClasses } from './Tabs.classes'

export type TabsProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
    activeTab?: string | null
    fullWidth?: boolean
    onChange?: (activeTab: string) => void
    size?: 'small' | 'medium' | 'large'
    scrollControls?: boolean
  }

export const Tabs: React.FC<TabsProps> & {
  classes: typeof tabsClasses
} = ({
  size = 'large',
  fullWidth = false,
  scrollControls = false,
  onChange,
  activeTab,
  children,
  ...props
}) => {
  const commonProps = useCommonProps(props)
  const ref = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState(activeTab)

  const setActiveTab = (tab: string) => {
    if (onChange) onChange(tab)
    else setValue(tab)
  }

  useEffect(() => setValue(activeTab), [activeTab])

  const scroll = useHorizontalScroll(
    ref as React.MutableRefObject<HTMLElement>,
    { scrollBehavior: 'smooth', deps: [children] },
  )
  const canScroll = scroll.left !== 0 || scroll.right !== 0

  return (
    <TabsContext.Provider value={{ activeTab: value, setActiveTab, size }}>
      <div
        ref={ref}
        {...omitCommonProps(props)}
        className={clsx(
          commonProps.className,
          props.className,
          tabsClasses.root,
          fullWidth && tabsClasses.fullWidth,
          scrollControls && canScroll && tabsClasses.withScrollControls,
        )}
      >
        {scrollControls && canScroll && (
          <TabItem
            inactive
            name="Prev"
            disabled={scroll.left === 0}
            onClick={() => scroll.toLeft()}
            className={tabsClasses.leftScrollControl}
          >
            <NavigateBeforeIcon color="primary" />
          </TabItem>
        )}
        {children}
        {scrollControls && canScroll && (
          <TabItem
            inactive
            name="Next"
            disabled={scroll.right === 0}
            onClick={() => scroll.toRight()}
            className={tabsClasses.rightScrollControl}
          >
            <NavigateNextIcon color="primary" />
          </TabItem>
        )}
      </div>
    </TabsContext.Provider>
  )
}

Tabs.classes = tabsClasses
