import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../../utils/useCommonProps'
import styles from './ModalBody.module.css'

export type ModalBodyProps = CommonProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'label'>

function ModalBody({ children, ...props }: ModalBodyProps) {
  const commonProps = useCommonProps(props)

  return (
    <div
      {...omitCommonProps(props)}
      className={clsx(commonProps.className, styles['root-modalBody'])}
    >
      {children}
    </div>
  )
}

export { ModalBody }
