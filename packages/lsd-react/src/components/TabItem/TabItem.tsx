import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { useTabsContext } from '../Tabs/Tab.context'
import { Typography } from '../Typography'
import { tabItemClasses } from './TabItem.classes'

export type TabItemProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    name: string
    selected?: boolean
    inactive?: boolean
    icon?: React.ReactNode
    size?: 'small' | 'medium' | 'large'
  }

export const TabItem: React.FC<TabItemProps> & {
  classes: typeof tabItemClasses
} = ({
  name,
  size: _size = 'large',
  selected: _selected = false,
  inactive = false,
  icon,
  children,
  ...props
}) => {
  const commonProps = useCommonProps(props)
  const tabs = useTabsContext()
  const size = tabs?.size ?? _size
  const selected = tabs ? tabs.activeTab === name : _selected

  const onClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    props.onClick && props.onClick(event)
    if (inactive) return

    tabs?.setActiveTab && tabs.setActiveTab(name)
  }

  return (
    <button
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        props.className,
        tabItemClasses.root,
        tabItemClasses[size],
        selected && tabItemClasses.selected,
        props.disabled && tabItemClasses.disabled,
      )}
      onClick={onClick}
    >
      <Typography
        component="span"
        className={tabItemClasses.text}
        variant={size === 'small' ? 'label2' : 'label1'}
      >
        {children}
      </Typography>
      {icon && <span className={tabItemClasses.icon}>{icon}</span>}
    </button>
  )
}

TabItem.classes = tabItemClasses
