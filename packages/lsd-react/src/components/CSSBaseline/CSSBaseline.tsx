import { Global } from '@emotion/react'
import React, { useMemo } from 'react'
import { ButtonStyles } from '../Button/Button.styles'
import { Theme } from '../Theme'
import { defaultTheme } from '../Theme/defaultTheme'

export const CSSBaseline: React.FC<{ theme?: Theme }> = ({
  theme = defaultTheme,
}) => {
  const styles = useMemo(
    () =>
      [ButtonStyles]
        .map((style) => (typeof style === 'function' ? style(theme) : style))
        .map((style) => <Global key={style.name} styles={style} />),
    [theme],
  )

  return <>{styles}</>
}
