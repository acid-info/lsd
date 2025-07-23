import { Meta, StoryObj } from '@storybook/react'
import { useStorybookIconComponent } from '../../../utils/storybook.utils'
import { TextField, TextFieldProps } from './TextField'

const subtitle = `Input`
const description = `TextField component allows users to enter free-form text data, accommodating both long and short-form entries.`

export default {
  title: 'TextField',
  component: TextField,
  parameters: {
    componentSubtitle: subtitle,
    docs: {
      description: {
        component: description,
      },
    },
  },
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
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
    variant: {
      type: {
        name: 'enum',
        value: ['outlined', 'underlined'],
      },
    },
  },
} as Meta

export const Root: StoryObj<Omit<TextFieldProps, 'icon'> & { icon: string }> = {
  render: ({ icon, ...args }) => {
    const Icon = useStorybookIconComponent(icon)

    return (
      <TextField {...args} icon={Icon && <Icon color="primary" />}>
        TextField
      </TextField>
    )
  },

  args: {
    size: 'large',
    label: 'Label',
    supportingText: 'Supporting text',
    disabled: false,
    error: false,
    errorIcon: false,
    icon: 'None',
    variant: 'underlined',
    clearButton: true,
    placeholder: 'Placeholder',
    defaultValue: 'default value',
    onChange: undefined,
  },
}
