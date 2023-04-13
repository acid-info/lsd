import { pairs } from '../../utils/object.utils'
import { TypographyVariants } from '../Theme'
import { THEME_TYPOGRAPHY_VARIANTS } from '../Theme/constants'

export const typographyClasses: {
  root: string
  primary: string
  secondary: string
  serif: string
  sansSerif: string
  monospace: string
} & Record<TypographyVariants, string> = {
  ...pairs(
    THEME_TYPOGRAPHY_VARIANTS,
    (variant) => `lsd-typography--${variant}`,
  ),
  root: `lsd-typography`,
  primary: `lsd-typography--primary`,
  secondary: `lsd-typography--secondary`,
  serif: 'lsd-typography--serif',
  sansSerif: 'lsd-typography--sans-serif',
  monospace: 'lsd-typography--monospace',
}
