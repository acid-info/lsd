import {
  Breakpoints,
  TypographyGenericFontFamily,
  TypographyVariants,
} from './types'
export declare const LSD_NAMESPACE = 'lsd'
export declare const THEME_BREAKPOINTS: Breakpoints[]
export declare const THEME_TYPOGRAPHY_VARIANTS: TypographyVariants[]
export declare const THEME_TYPOGRAPHY_ELEMENTS: Partial<
  Record<TypographyVariants, string[]>
>
export declare const THEME_TYPOGRAPHY_PROPERTIES: (
  | 'fontSize'
  | 'fontWeight'
  | 'lineHeight'
  | 'fontFamily'
)[]
export declare const THEME_VARIANT_PROPERTIES: 'typography'[]
export declare const THEME_TYPOGRAPHY_FONT_CATEGORIES: TypographyGenericFontFamily[]
