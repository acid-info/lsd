import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { ChevronDownIcon, ChevronUpIcon } from '../Icons'
import { Typography } from '../Typography'
import styles from './CollapseHeader.module.css'

export type CollapseHeaderProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label' | 'disabled'> & {
    label: string
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    disabled?: boolean
    onTrigger: () => void
    size?: 'small' | 'medium' | 'large'
  }

function CollapseHeader({
  label,
  disabled = false,
  open,
  setOpen,
  size = 'large',
  onTrigger,
  ...props
}: CollapseHeaderProps) {
  const commonProps = useCommonProps(props)

  return (
    <div
      {...omitCommonProps(props)}
      className={clsx(
        commonProps.className,
        props.className,
        styles['root-collapseHeader'],
        styles[size],
        disabled && styles.disabled,
        open && styles.open,
      )}
    >
      <button className={clsx(styles.trigger)} onClick={onTrigger}>
        <Typography
          color="primary"
          component="label"
          variant={size === 'small' ? 'label2' : 'label1'}
          className={styles.label}
        >
          {label}
        </Typography>
        <div className={styles.icons}>
          {open ? (
            <ChevronUpIcon color="primary" className={styles.menuIcon} />
          ) : (
            <ChevronDownIcon color="primary" className={styles.menuIcon} />
          )}
        </div>
      </button>
    </div>
  )
}

export { CollapseHeader }
