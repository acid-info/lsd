import { Theme } from './types'

export const withTheme =
  (style: (theme: Theme) => string) =>
  (theme: Theme): string =>
    style(theme)
