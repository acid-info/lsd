import clsx from 'clsx'
import React from 'react'
import {
  CommonProps,
  omitCommonProps,
  useCommonProps,
} from '../../utils/useCommonProps'
import { TypographyVariants } from '../Theme'
import { typographyClasses } from './Typography.classes'

export type TypographyProps = CommonProps & {
  variant?: TypographyVariants
  color?: 'primary' | 'secondary'
} & (
    | ({
        component?: 'p'
      } & React.HTMLAttributes<HTMLParagraphElement>)
    | ({
        component?: 'span'
      } & React.HTMLAttributes<HTMLSpanElement>)
    | ({
        component?: 'label'
      } & React.LabelHTMLAttributes<HTMLLabelElement>)
    | ({
        component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
      } & React.HTMLAttributes<HTMLHeadingElement>)
    | ({
        component?: 'div'
      } & React.HtmlHTMLAttributes<HTMLDivElement>)
    | ({
        component?: 'a'
      } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  )

export const Typography: React.FC<TypographyProps> & {
  classes: typeof typographyClasses
} = ({
  color,
  variant = 'body1',
  component,
  className,
  children,
  ...props
}) => {
  const commonProps = useCommonProps(props)
  const componentName =
    component ??
    (
      {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        label1: 'label',
        label2: 'label',
      } as Record<TypographyVariants, string>
    )[variant] ??
    'span'

  const Component = componentName as any as React.ComponentType<TypographyProps>

  return (
    <Component
      className={clsx(
        commonProps.className,
        typographyClasses.root,
        typographyClasses[variant],
        color && typographyClasses[color],
        className,
      )}
      {...omitCommonProps(props)}
    >
      {children}
    </Component>
  )
}

Typography.classes = typographyClasses
