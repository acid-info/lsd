import { SerializedStyles } from '@emotion/react'
import { CSSProperties } from 'react'
import { DeepPartial } from 'utility-types'

export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type TypographyTypefaces = 'sans-serif' | 'serif' | 'mono'
export type TypographyVariants =
  | 'headlineLg'
  | 'headlineStd'
  | 'headlineMd'
  | 'headlineSm'
  | 'titleLg'
  | 'titleMd'
  | 'titleSm'
  | 'bodyLg'
  | 'bodyMd'
  | 'bodySm'
  | 'labelLg'
  | 'labelMd'
  | 'labelSm'

export type VariantThemeProperties = keyof Pick<Theme, 'typography'>

export type TypographyStyles = Pick<CSSProperties, 'fontSize' | 'lineHeight'>
export type TypographyProperties = keyof TypographyStyles
export type ThemeTypography<T extends string = TypographyVariants> = {
  [key in T]: TypographyStyles
}

export type ThemePalette = {
  background: {
    primary: string
    secondary: string
  }
  border: {
    primary: string
    secondary: string
    tertiary: string
  }
  surface: {
    primary: string
    secondary: string
    tertiary: string
    disabled: string
  }
  text: {
    primary: string
    secondary: string
    placeholder: string
    disabled: string
  }
  icons: {
    primary: string
    disabled: string
  }
}

export type BreakpointStyles = {
  width: number
} & Pick<Theme, 'typography'>

export type ThemeBreakpoints = {
  [key in Breakpoints]: BreakpointStyles
}

export type Theme = {
  breakpoints: ThemeBreakpoints
  typography: ThemeTypography
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
  breakpoints: ThemeOptionBreakpoints
  typography: ThemeOptionTypography
  palette: ThemeOptionPalette
}

export type ThemeContext = {
  theme: Theme
}
