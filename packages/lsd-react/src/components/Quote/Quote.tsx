import clsx from 'clsx'
import React from 'react'
import { Typography } from '../Typography'
import { quoteClasses } from './Quote.classes'

export type QuoteProps = React.HTMLAttributes<HTMLDivElement> & {
  text?: string
  mode?: 'indented-line' | 'parentheses'
}

export const Quote: React.FC<QuoteProps> & {
  classes: typeof quoteClasses
} = ({ text = '', mode = 'indented-line', ...props }) => {
  return (
    <>
      <div
        {...props}
        className={clsx(
          props.className,
          quoteClasses.root,
          mode && mode === 'parentheses'
            ? quoteClasses.parentheses
            : quoteClasses.indentedInline,
        )}
      >
        <Typography
          color="primary"
          component="label"
          variant={'label1'}
          className={quoteClasses.text}
        >
          {mode === 'parentheses' ? `***\n${text}\n***` : text}
        </Typography>
      </div>
    </>
  )
}

Quote.classes = quoteClasses
