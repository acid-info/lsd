import {
  Breakpoints,
  TypographyProperties,
  TypographyVariants,
  VariantThemeProperties,
} from './types'

export const LSD_NAMESPACE = 'lsd'

export const THEME_BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'] as Breakpoints[]

export const THEME_TYPOGRAPHY_VARIANTS = [
  'display1',
  'display2',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'body3',
  'label1',
  'label2',
] as TypographyVariants[]

export const THEME_TYPOGRAPHY_ELEMENTS: Partial<
  Record<TypographyVariants, string[]>
> = {
  h1: ['h1'],
  h2: ['h2'],
  h3: ['h3'],
  h4: ['h4'],
  h5: ['h5'],
  h6: ['h6'],
  body1: ['body'],
  label1: ['label'],
}

export const THEME_TYPOGRAPHY_PROPERTIES = [
  'fontSize',
  'fontFamily',
  'lineHeight',
] as TypographyProperties[]

export const THEME_VARIANT_PROPERTIES = [
  'typography',
] as VariantThemeProperties[]
