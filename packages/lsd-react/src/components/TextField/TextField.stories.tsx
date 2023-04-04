import { Meta, Story } from '@storybook/react'
import { useStorybookIconComponent } from '../../utils/storybook.utils'
import { TextField, TextFieldProps } from './TextField'

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['medium', 'large'],
      },
      defaultValue: 'large',
    },
    icon: {
      type: {
        name: 'enum',
        value: useStorybookIconComponent.options,
      },
      defaultValue: 'FolderIcon',
    },
  },
} as Meta

export const Root: Story<Omit<TextFieldProps, 'icon'> & { icon: string }> = ({
  icon,
  ...args
}) => {
  const Icon = useStorybookIconComponent(icon)

  return (
    <TextField {...args} icon={Icon && <Icon color="primary" />}>
      TextField
    </TextField>
  )
}

Root.args = {
  size: 'large',
  supportingText: 'Supporting text',
  disabled: false,
  error: false,
  errorIcon: false,
  icon: 'None',
  bottomOutline: true,
  clearButton: true,
  placeholder: 'Placeholder',
  defaultValue: 'default value',
  onChange: undefined,
}
