import {
  Breakpoints,
  TypographyProperties,
  TypographyVariants,
  VariantThemeProperties,
} from './types'

export const LSD_NAMESPACE = 'lsd'

export const THEME_BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'] as Breakpoints[]

export const THEME_TYPOGRAPHY_VARIANTS = [
  'headlineLg',
  'headlineStd',
  'headlineMd',
  'headlineSm',
  'titleLg',
  'titleMd',
  'titleSm',
  'bodySm',
  'bodyMd',
  'bodyLg',
  'labelLg',
  'labelMd',
  'labelSm',
] as TypographyVariants[]

export const THEME_TYPOGRAPHY_PROPERTIES = [
  'fontSize',
  'lineHeight',
] as TypographyProperties[]

export const THEME_VARIANT_PROPERTIES = [
  'typography',
] as VariantThemeProperties[]
