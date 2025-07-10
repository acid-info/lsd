import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../../utils/useCommonProps'
import { useButtonGroupContext } from '../ButtonGroup/ButtonGroup.context'
import { Typography } from '../Typography'
import styles from './Button.module.css'

export type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: 'large' | 'medium' | 'small'
    variant?: 'outlined' | 'filled'
    icon?: React.ReactNode
  }

function Button({
  size: sizeProp,
  variant: variantProp,
  disabled: disabledProp,
  icon,
  children,
  ...props
}: ButtonProps) {
  const context = useButtonGroupContext()
  const commonProps = useCommonProps(props)
  const contextCommonProps = useCommonProps(context || {})
  const commonPropsClassName =
    commonProps.className || contextCommonProps.className

  const size = sizeProp ?? context?.size ?? 'medium'
  const variant = variantProp ?? context?.variant ?? 'outlined'
  const disabled = disabledProp ?? context?.disabled ?? false

  return (
    <>
      <button
        {...omitCommonProps(props)}
        className={clsx(
          commonPropsClassName,
          props.className,
          styles['root-button'],
          styles[size],
          styles[variant],
          Boolean(disabled) && styles.disabled,
          Boolean(icon) && styles.withIcon,
          context?.styles,
        )}
        disabled={disabled}
      >
        <Typography
          component="span"
          className={styles.text}
          variant={size === 'small' ? 'label2' : 'label1'}
        >
          {children}
        </Typography>
        {icon && <span className={styles.icon}>{icon}</span>}
      </button>
    </>
  )
}

export { Button }
