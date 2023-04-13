import clsx from 'clsx'
import React from 'react'
import { CommonProps, useCommonProps } from '../../utils/useCommonProps'
import { Typography } from '../Typography'
import { quoteClasses } from './Quote.classes'

export type QuoteProps = CommonProps &
  React.HTMLAttributes<HTMLDivElement> & {
    mode?: 'indented-line' | 'parentheses'
  }

export const Quote: React.FC<QuoteProps> & {
  classes: typeof quoteClasses
} = ({ mode = 'indented-line', children, ...props }) => {
  const commonProps = useCommonProps(props)

  return (
    <>
      <div
        {...props}
        className={clsx(
          commonProps.className,
          props.className,
          quoteClasses.root,
          mode && mode === 'parentheses'
            ? quoteClasses.parentheses
            : quoteClasses.indentedInline,
        )}
      >
        <Typography color="primary" component="label" variant={'label1'}>
          {children}
        </Typography>
      </div>
    </>
  )
}

Quote.classes = quoteClasses
