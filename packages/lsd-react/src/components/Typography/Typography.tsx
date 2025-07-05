import React from 'react'
import clsx from 'clsx'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { TypographyVariants } from '../../theme'
import styles from './Typography.module.css'

type ElementTypeProps = {
  p: React.HTMLAttributes<HTMLParagraphElement>
  span: React.HTMLAttributes<HTMLSpanElement>
  label: React.LabelHTMLAttributes<HTMLLabelElement>
  h1: React.HTMLAttributes<HTMLHeadingElement>
  h2: React.HTMLAttributes<HTMLHeadingElement>
  h3: React.HTMLAttributes<HTMLHeadingElement>
  h4: React.HTMLAttributes<HTMLHeadingElement>
  h5: React.HTMLAttributes<HTMLHeadingElement>
  h6: React.HTMLAttributes<HTMLHeadingElement>
  div: React.HTMLAttributes<HTMLDivElement>
  a: React.AnchorHTMLAttributes<HTMLAnchorElement>
}

type BaseTypographyProps = CommonProps & {
  variant?: TypographyVariants
  color?: 'primary' | 'secondary'
  children?: React.ReactNode
  className?: string
}

export type TypographyComponent = keyof ElementTypeProps

export type TypographyProps<T extends TypographyComponent = 'span'> =
  BaseTypographyProps & ElementTypeProps[T] & { component?: T }

const COMPONENT_MAPPING: Partial<
  Record<TypographyVariants, TypographyComponent>
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  label1: 'label',
  label2: 'label',
}

function Typography<T extends TypographyComponent = 'span'>({
  color,
  variant = 'body1',
  component,
  className,
  children,
  ...props
}: TypographyProps<T>) {
  const commonProps = useCommonProps(props)
  const componentName =
    component ?? (COMPONENT_MAPPING[variant] as T) ?? ('span' as T)

  return React.createElement(
    componentName,
    {
      className: clsx(
        commonProps.className,
        styles['root-typography'],
        styles[variant],
        color && styles[color],
        className,
      ),
      ...omitCommonProps(props),
    },
    children,
  )
}

export { Typography }
