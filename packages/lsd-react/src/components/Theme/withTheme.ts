import { SerializedStyles } from '@emotion/react'
import { Theme } from './types'

export const withTheme =
  (style: (theme: Theme) => SerializedStyles) => (theme: Theme) =>
    style(theme)
