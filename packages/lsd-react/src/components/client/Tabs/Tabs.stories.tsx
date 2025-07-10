import { Meta, StoryObj } from '@storybook/react'
import { useStorybookIconComponent } from '../../../utils/storybook.utils'
import { TabItem } from '../TabItem'
import { Tabs, TabsProps } from './Tabs'

const subtitle = `Navigation`
const description = `Tabs are a navigational component that efficiently organizes related content, enabling users to switch between different groups of information within the same context.`

export default {
  title: 'Tabs',
  component: Tabs,
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
    tabs: {
      type: {
        name: 'number',
      },
    },
  },
} as Meta

export const Root: StoryObj<
  TabsProps & {
    icon: string
    tabs: number
  }
> = {
  render: ({ icon, tabs, ...args }) => {
    const IconComponent = useStorybookIconComponent(icon)

    return (
      <div style={{ width: '100%' }}>
        <Tabs {...args} activeTab="Tab 1">
          {new Array(Math.max(1, tabs)).fill(null).map((tab, index) => (
            <TabItem
              key={index}
              name={`Tab ${index + 1}`}
              icon={
                IconComponent && <IconComponent color="primary"></IconComponent>
              }
            >
              {`Tab ${index + 1}`}
            </TabItem>
          ))}
        </Tabs>
      </div>
    )
  },

  args: {
    fullWidth: false,
    scrollControls: true,
    onChange: undefined,
    tabs: 4,
  },
}
