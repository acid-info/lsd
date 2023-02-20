import clsx from 'clsx'
import React from 'react'
import { Typography } from '../Typography'
import { slotClasses } from './Slot.classes'

export type SlotProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: 'large' | 'medium' | 'small'
  text?: string
  textInline?: boolean
}

export const Slot: React.FC<SlotProps> & {
  classes: typeof slotClasses
} = ({ size = 'large', text = '', textInline = false, ...props }) => {
  return (
    <>
      <div
        {...props}
        className={clsx(
          props.className,
          slotClasses.root,
          slotClasses[size],
          textInline && slotClasses.textInline,
        )}
      >
        <Typography
          color="primary"
          component="label"
          variant={size === 'small' ? 'label2' : 'label1'}
          className={slotClasses.text}
        >
          {text}
        </Typography>
      </div>
    </>
  )
}

Slot.classes = slotClasses
