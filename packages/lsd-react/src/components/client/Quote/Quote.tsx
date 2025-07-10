import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../../utils/useCommonProps'
import { Typography } from '../Typography'
import styles from './Quote.module.css'

export type QuoteProps = CommonProps &
  React.HTMLAttributes<HTMLDivElement> & {
    mode?: 'indented-line' | 'parentheses'
  }

function Quote({ mode = 'indented-line', children, ...props }: QuoteProps) {
  const commonProps = useCommonProps(props)

  return (
    <>
      <div
        {...omitCommonProps(props)}
        className={clsx(
          commonProps.className,
          props.className,
          styles['root-quote'],
          mode && mode === 'parentheses'
            ? styles.parentheses
            : styles.indentedInline,
        )}
      >
        <Typography color="primary" component="label" variant={'label1'}>
          {children}
        </Typography>
      </div>
    </>
  )
}

export { Quote }
