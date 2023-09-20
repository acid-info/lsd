import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import {
  CommonProps,
  omitCommonProps,
  pickCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { CollapseHeader } from '../CollapseHeader'
import { collapseClasses } from './Collapse.classes'

export type CollapseProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> & {
    label: string
    disabled?: boolean
    size?: 'small' | 'medium' | 'large'
    open?: boolean
    onChange?: (open: boolean) => void
  }

export const Collapse: React.FC<CollapseProps> & {
  classes: typeof collapseClasses
} = ({
  label,
  disabled = false,
  size = 'large',
  open: openProp,
  children,
  ...props
}) => {
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
        collapseClasses.root,
        disabled && collapseClasses.disabled,
        open && collapseClasses.open,
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
      {open && <div className={collapseClasses.content}>{children}</div>}
    </div>
  )
}

Collapse.classes = collapseClasses
