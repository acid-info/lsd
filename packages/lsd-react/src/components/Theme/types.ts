import { SerializedStyles } from '@emotion/react'
import { CSSProperties } from 'react'
import { DeepPartial } from 'utility-types'

export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type TypographyTypefaces = 'sans-serif' | 'serif' | 'mono'
export type TypographyVariants =
  | 'display1'
  | 'display2'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'label1'
  | 'label2'

export type VariantThemeProperties = keyof Pick<Theme, 'typography'>

export type TypographyStyles = Pick<
  CSSProperties,
  'fontSize' | 'fontFamily' | 'lineHeight'
> & { fontFamily?: string }
export type GlobalTypographyStyles = {
  fontFamily?: string
}
export type TypographyProperties = keyof TypographyStyles
export type ThemeTypography<T extends string = TypographyVariants> = {
  [key in T]: TypographyStyles
}

export type ThemePalette = {
  primary: string
  secondary: string

  surface: {
    primary: string
    secondary: string
  }
  border: {
    primary: string
    secondary: string
  }
  text: {
    primary: string
    secondary: string
    tertiary: string
  }
  icon: {
    primary: string
    secondary: string
  }
}

export type BreakpointStyles = {
  width: number
} & Pick<Theme, 'typography'>

export type ThemeBreakpoints = {
  [key in Breakpoints]: BreakpointStyles
}

export type Theme = {
  name: string
  breakpoints: ThemeBreakpoints
  typography: ThemeTypography
  typographyGlobal: GlobalTypographyStyles
  palette: ThemePalette
  globalStyles: SerializedStyles
}

export type ThemeOptionBreakpointStyles = Partial<
  Omit<BreakpointStyles, 'width' | 'typography'> & {
    width?: number
    typography: ThemeOptionTypography
  }
>

export type ThemeOptionBreakpoints = {
  [K in keyof ThemeBreakpoints]?: ThemeOptionBreakpointStyles
}

export type ThemeOptionTypographyStyle = TypographyStyles
export type ThemeOptionTypography = DeepPartial<ThemeTypography>
export type ThemeOptionPalette = DeepPartial<ThemePalette>

export type CreateThemeProps = {
  name?: string
  breakpoints: ThemeOptionBreakpoints
  typography: ThemeOptionTypography
  typographyGlobal: GlobalTypographyStyles
  palette: ThemeOptionPalette
}

export type ThemeContext = {
  theme: Theme
}
