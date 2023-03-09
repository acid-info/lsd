import { Meta, Story } from '@storybook/react'
import { useStorybookIconComponent } from '../../utils/storybook.utils'
import { TabItem } from '../TabItem'
import { Tabs, TabsProps } from './Tabs'

export default {
  title: 'Tabs',
  component: Tabs,
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
      defaultValue: 4,
    },
  },
} as Meta

export const Root: Story<
  TabsProps & {
    icon: string
    tabs: number
  }
> = ({ icon, tabs, ...args }) => {
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
}

Root.args = {
  fullWidth: false,
  scrollControls: true,
  onChange: undefined,
}
