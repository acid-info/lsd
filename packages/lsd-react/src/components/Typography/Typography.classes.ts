import { pairs } from '../../utils/object.utils'
import { TypographyVariants } from '../Theme'
import { THEME_TYPOGRAPHY_VARIANTS } from '../Theme/constants'

export const typographyClasses: {
  root: string
  primary: string
  secondary: string
} & Record<TypographyVariants, string> = {
  ...pairs(
    THEME_TYPOGRAPHY_VARIANTS,
    (variant) => `lsd-typography--${variant}`,
  ),
  root: `lsd-typography`,
  primary: `lsd-typography--primary`,
  secondary: `lsd-typography--secondary`,
}
