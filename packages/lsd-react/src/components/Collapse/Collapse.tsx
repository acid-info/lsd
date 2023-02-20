import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { CollapseItem } from '../CollapseItem'
import { Slot } from '../Slot'
import { collapseClasses } from './Collapse.classes'

export type CollapseProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'label' | 'disabled'
> & {
  label: string
  text?: string
  textInline?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
}

export const Collapse: React.FC<CollapseProps> & {
  classes: typeof collapseClasses
} = ({
  label,
  text = '',
  textInline = false,
  disabled = false,
  size = 'large',
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  const onTrigger = () => {
    !disabled && setOpen((value) => !value)
  }

  useEffect(() => {
    if (disabled && open) setOpen(false)
  }, [open, disabled])

  useClickAway(ref, () => {
    if (!open) return
    onTrigger && onTrigger()
  })

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
      <CollapseItem
        label={label}
        open={open}
        onTrigger={onTrigger}
        size={size}
        disabled={disabled}
      />
      {open && <Slot text={text} textInline={textInline} size={size} />}
    </div>
  )
}

Collapse.classes = collapseClasses
