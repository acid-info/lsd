import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { CollapseHeader } from '../CollapseHeader'
import { collapseClasses } from './Collapse.classes'

export type CollapseProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'label'
> & {
  label: string
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  open?: boolean
  onChange?: (open: boolean) => void
}

export const Collapse: React.FC<CollapseProps> & {
  classes: typeof collapseClasses
} = ({ label, disabled = false, size = 'large', children, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(props.open ?? false)

  const handleChange = (value: boolean) => {
    if (typeof props.open === 'undefined') return setOpen(value)
    props.onChange && props.onChange(value)
  }

  const onTrigger = () => !disabled && handleChange(!open)

  useEffect(() => {
    disabled && open && handleChange(false)
  }, [disabled, open, handleChange])

  return (
    <div
      {...props}
      ref={ref}
      className={clsx(
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
      />
      {open && <div className={collapseClasses.content}>{children}</div>}
    </div>
  )
}

Collapse.classes = collapseClasses
