import { Global, SerializedStyles } from '@emotion/react'
import React, { useMemo } from 'react'
import { AutocompleteStyles } from '../Autocomplete/Autocomplete.styles'
import { BadgeStyles } from '../Badge/Badge.styles'
import { BreadcrumbStyles } from '../Breadcrumb/Breadcrumb.styles'
import { BreadcrumbItemStyles } from '../BreadcrumbItem/BreadcrumbItem.styles'
import { ButtonStyles } from '../Button/Button.styles'
import { CalendarStyles } from '../Calendar/Calendar.styles'
import { CardStyles } from '../Card/Card.styles'
import { CardBodyStyles } from '../CardBody/CardBody.styles'
import { CardHeaderStyles } from '../CardHeader/CardHeader.styles'
import { CheckboxStyles } from '../Checkbox/Checkbox.styles'
import { CheckboxGroupStyles } from '../CheckboxGroup/CheckboxGroup.styles'
import { CollapseStyles } from '../Collapse/Collapse.styles'
import { CollapseHeaderStyles } from '../CollapseHeader/CollapseHeader.styles'
import { DateFieldStyles } from '../DateField/DateField.styles'
import { DatePickerStyles } from '../DatePicker/DatePicker.styles'
import { DropdownStyles } from '../Dropdown/Dropdown.styles'
import { DropdownItemStyles } from '../DropdownItem/DropdownItem.styles'
import { IconButtonStyles } from '../IconButton/IconButton.styles'
import { IconButtonGroupStyles } from '../IconButtonGroup/IconButtonGroup.styles'
import { LsdIconStyles } from '../Icons/LsdIcon/LsdIcon.styles'
import { DropdownMenuStyles } from '../DropdownMenu/DropdownMenu.styles'
import { QuoteStyles } from '../Quote/Quote.styles'
import { RadioButtonStyles } from '../RadioButton/RadioButton.styles'
import { RadioButtonGroupStyles } from '../RadioButtonGroup/RadioButtonGroup.styles'
import { TabItemStyles } from '../TabItem/TabItem.styles'
import { TableStyles } from '../Table/Table.styles'
import { TableBodyStyles } from '../TableBody/TableBody.styles'
import { TableHeaderStyles } from '../TableHeader/TableHeader.styles'
import { TableItemStyles } from '../TableItem/TableItem.styles'
import { TableRowStyles } from '../TableRow/TableRow.styles'
import { TabsStyles } from '../Tabs/Tabs.styles'
import { TagStyles } from '../Tag/Tag.styles'
import { TextFieldStyles } from '../TextField/TextField.styles'
import { defaultThemes, Theme, withTheme } from '../Theme'
import { TypographyStyles } from '../Typography/Typography.styles'
import { NumberInputStyles } from '../NumberInput/NumberInput.styles'
import { ModalStyles } from '../Modal/Modal.styles'
import { ModalFooterStyles } from '../ModalFooter/ModalFooter.styles'
import { ModalBodyStyles } from '../ModalBody/ModalBody.styles'
import { ToastStyles } from '../Toast/Toast.styles'
import { ToastProviderStyles } from '../ToastProvider/ToastProvider.styles'
import { ButtonGroupStyles } from '../ButtonGroup/ButtonGroup.styles'
import { DateRangePickerStyles } from '../DateRangePicker/DateRangePicker.styles'
import { TooltipBaseStyles } from '../TooltipBase/TooltipBase.styles'

const componentStyles: Array<ReturnType<typeof withTheme> | SerializedStyles> =
  [
    ButtonStyles,
    IconButtonStyles,
    IconButtonGroupStyles,
    TypographyStyles,
    LsdIconStyles,
    TabItemStyles,
    TabsStyles,
    DropdownMenuStyles,
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
    CheckboxGroupStyles,
    BadgeStyles,
    RadioButtonStyles,
    RadioButtonGroupStyles,
    TableStyles,
    TableHeaderStyles,
    TableBodyStyles,
    TableItemStyles,
    TableRowStyles,
    NumberInputStyles,
    ModalStyles,
    ModalFooterStyles,
    ModalBodyStyles,
    DatePickerStyles,
    DateFieldStyles,
    CalendarStyles,
    ToastStyles,
    ToastProviderStyles,
    ButtonGroupStyles,
    DateRangePickerStyles,
    TooltipBaseStyles,
  ]

function CSSBaseline({ theme = defaultThemes.light }: { theme?: Theme }) {
  const styles = useMemo(
    () =>
      componentStyles
        .map((style) => (typeof style === 'function' ? style(theme) : style))
        .map((style) => <Global key={style.name} styles={style} />),
    [theme],
  )

  return <>{styles}</>
}

export { CSSBaseline }
