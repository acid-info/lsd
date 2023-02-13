import { Global, SerializedStyles } from '@emotion/react'
import React, { useMemo } from 'react'
import { ButtonStyles } from '../Button/Button.styles'
import { DropdownStyles } from '../Dropdown/Dropdown.styles'
import { DropdownItemStyles } from '../DropdownItem/DropdownItem.styles'
import { LsdIconStyles } from '../Icons/LsdIcon/LsdIcon.styles'
import { ListBoxStyles } from '../ListBox/ListBox.styles'
import { defaultThemes, Theme, withTheme } from '../Theme'
import { TypographyStyles } from '../Typography/Typography.styles'

const componentStyles: Array<ReturnType<typeof withTheme> | SerializedStyles> =
  [
    ButtonStyles,
    TypographyStyles,
    LsdIconStyles,
    ListBoxStyles,
    DropdownStyles,
    DropdownItemStyles,
  ]

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
