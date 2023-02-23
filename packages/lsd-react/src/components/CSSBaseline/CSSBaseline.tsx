import { Global, SerializedStyles } from '@emotion/react'
import React, { useMemo } from 'react'
import { AutocompleteStyles } from '../Autocomplete/Autocomplete.styles'
import { BreadcrumbStyles } from '../Breadcrumb/Breadcrumb.styles'
import { BreadcrumbItemStyles } from '../BreadcrumbItem/BreadcrumbItem.styles'
import { ButtonStyles } from '../Button/Button.styles'
import { CollapseStyles } from '../Collapse/Collapse.styles'
import { CollapseHeaderStyles } from '../CollapseHeader/CollapseHeader.styles'
import { DropdownStyles } from '../Dropdown/Dropdown.styles'
import { DropdownItemStyles } from '../DropdownItem/DropdownItem.styles'
import { LsdIconStyles } from '../Icons/LsdIcon/LsdIcon.styles'
import { IconTagStyles } from '../IconTag/IconTag.styles'
import { ListBoxStyles } from '../ListBox/ListBox.styles'
import { QuoteStyles } from '../Quote/Quote.styles'
import { TabItemStyles } from '../TabItem/TabItem.styles'
import { TabsStyles } from '../Tabs/Tabs.styles'
import { TagStyles } from '../Tag/Tag.styles'
import { TextFieldStyles } from '../TextField/TextField.styles'
import { defaultThemes, Theme, withTheme } from '../Theme'
import { TypographyStyles } from '../Typography/Typography.styles'

const componentStyles: Array<ReturnType<typeof withTheme> | SerializedStyles> =
  [
    ButtonStyles,
    TypographyStyles,
    LsdIconStyles,
    TabItemStyles,
    TabsStyles,
    ListBoxStyles,
    DropdownStyles,
    DropdownItemStyles,
    IconTagStyles,
    BreadcrumbStyles,
    BreadcrumbItemStyles,
    TagStyles,
    TextFieldStyles,
    AutocompleteStyles,
    QuoteStyles,
    CollapseStyles,
    CollapseHeaderStyles,
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
