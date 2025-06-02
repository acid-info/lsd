import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import {
  CommonProps,
  omitCommonProps,
  pickCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { CollapseHeader } from '../CollapseHeader'
import styles from './Collapse.module.css'

export type CollapseProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
    label: string
    disabled?: boolean
    size?: 'small' | 'medium' | 'large'
    open?: boolean
    onChange?: (open: boolean) => void
  }

function Collapse({
  label,
  disabled = false,
  size = 'large',
  open: openProp,
  children,
  ...props
}: CollapseProps) {
  const globalProps = useCommonProps(props)
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(openProp ?? false)

  const handleChange = (value: boolean) => {
    if (typeof openProp === 'undefined') return setOpen(value)
    props.onChange && props.onChange(value)
  }

  const onTrigger = () => !disabled && handleChange(!open)

  useEffect(() => {
    disabled && open && handleChange(false)
  }, [disabled, open, handleChange])

  useEffect(() => {
    typeof openProp !== 'undefined' && setOpen(openProp)
  }, [openProp])

  return (
    <div
      {...omitCommonProps(props)}
      ref={ref}
      className={clsx(
        globalProps.className,
        props.className,
        styles['root-collapse'],
        disabled && styles.disabled,
        open && styles.open,
      )}
    >
      <CollapseHeader
        label={label}
        open={open}
        setOpen={setOpen}
        size={size}
        onTrigger={onTrigger}
        disabled={disabled}
        {...pickCommonProps(props)}
      />
      {open && <div className={styles.content}>{children}</div>}
    </div>
  )
}

export { Collapse }
