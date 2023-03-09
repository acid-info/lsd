import { Global, SerializedStyles } from '@emotion/react'
import React, { useMemo } from 'react'
import { AutocompleteStyles } from '../Autocomplete/Autocomplete.styles'
import { BreadcrumbStyles } from '../Breadcrumb/Breadcrumb.styles'
import { BreadcrumbItemStyles } from '../BreadcrumbItem/BreadcrumbItem.styles'
import { ButtonStyles } from '../Button/Button.styles'
import { CardStyles } from '../Card/Card.styles'
import { CardBodyStyles } from '../CardBody/CardBody.styles'
import { CardHeaderStyles } from '../CardHeader/CardHeader.styles'
import { CheckboxStyles } from '../Checkbox/Checkbox.styles'
import { CollapseStyles } from '../Collapse/Collapse.styles'
import { CollapseHeaderStyles } from '../CollapseHeader/CollapseHeader.styles'
import { DropdownStyles } from '../Dropdown/Dropdown.styles'
import { DropdownItemStyles } from '../DropdownItem/DropdownItem.styles'
import { IconButtonStyles } from '../IconButton/IconButton.styles'
import { LsdIconStyles } from '../Icons/LsdIcon/LsdIcon.styles'
import { ListBoxStyles } from '../ListBox/ListBox.styles'
import { QuoteStyles } from '../Quote/Quote.styles'
import { RadioButtonStyles } from '../RadioButton/RadioButton.styles'
import { RadioButtonGroupStyles } from '../RadioButtonGroup/RadioButtonGroup.styles'
import { TabItemStyles } from '../TabItem/TabItem.styles'
import { TabsStyles } from '../Tabs/Tabs.styles'
import { TagStyles } from '../Tag/Tag.styles'
import { TextFieldStyles } from '../TextField/TextField.styles'
import { defaultThemes, Theme, withTheme } from '../Theme'
import { TypographyStyles } from '../Typography/Typography.styles'

const componentStyles: Array<ReturnType<typeof withTheme> | SerializedStyles> =
  [
    ButtonStyles,
    IconButtonStyles,
    TypographyStyles,
    LsdIconStyles,
    TabItemStyles,
    TabsStyles,
    ListBoxStyles,
    DropdownStyles,
    DropdownItemStyles,
    BreadcrumbStyles,
    BreadcrumbItemStyles,
    CardStyles,
    CardHeaderStyles,
    CardBodyStyles,
    TagStyles,
    TextFieldStyles,
    CheckboxStyles,
    AutocompleteStyles,
    QuoteStyles,
    CollapseStyles,
    CollapseHeaderStyles,
    RadioButtonStyles,
    RadioButtonGroupStyles,
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
