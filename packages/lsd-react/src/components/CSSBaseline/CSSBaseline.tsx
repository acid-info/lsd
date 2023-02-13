import { Global, SerializedStyles } from '@emotion/react'
import React, { useMemo } from 'react'
import { ButtonStyles } from '../Button/Button.styles'
import { defaultThemes, Theme, withTheme } from '../Theme'

const componentStyles: Array<ReturnType<typeof withTheme> | SerializedStyles> =
  [ButtonStyles]

export const CSSBaseline: React.FC<{ theme?: Theme }> = ({
  theme = defaultThemes.light,
}) => {
  const styles = useMemo(
    () =>
      componentStyles
        .map((style) => (typeof style === 'function' ? style(theme) : style))
        .map((style) => <Global key={style.name} styles={style} />),
    [theme],
  )

  return <>{styles}</>
}
