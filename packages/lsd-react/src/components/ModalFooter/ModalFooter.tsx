import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import styles from './ModalFooter.module.css'

export type ModalFooterProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'>

function ModalFooter({ children, ...props }: ModalFooterProps) {
  const commonProps = useCommonProps(props)

  return (
    <div
      {...omitCommonProps(props)}
      className={clsx(commonProps.className, styles.root)}
    >
      {children}
    </div>
  )
}

export { ModalFooter }
