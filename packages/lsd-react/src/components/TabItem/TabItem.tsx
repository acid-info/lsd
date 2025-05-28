import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { useTabsContext } from '../Tabs/Tab.context'
import { Typography } from '../Typography'
import styles from './TabItem.module.css'

export type TabItemProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    name: string
    selected?: boolean
    inactive?: boolean
    icon?: React.ReactNode
    size?: 'small' | 'medium' | 'large'
  }

function TabItem({
  name,
  size: _size = 'large',
  selected: _selected = false,
  inactive = false,
  icon,
  children,
  ...props
}: TabItemProps) {
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
        styles.root,
        styles[size],
        selected && styles.selected,
        props.disabled && styles.disabled,
        !!icon && styles.withIcon,
      )}
      onClick={onClick}
    >
      <Typography
        component="span"
        className={styles.text}
        variant={size === 'small' ? 'label2' : 'label1'}
      >
        {children}
      </Typography>
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  )
}

export { TabItem }
