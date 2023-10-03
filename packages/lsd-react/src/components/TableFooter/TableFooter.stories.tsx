import { Meta, Story } from '@storybook/react'
import { TableFooter, TableFooterProps } from './TableFooter'
import { useState } from 'react'
import { pickCommonProps } from '../../utils/useCommonProps'

export default {
  title: 'TableFooter',
  component: TableFooter,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta

export const Root: Story<TableFooterProps & { title: string }> = ({
  size,
  pages,
  ...props
}) => {
  const [content, setContent] = useState('Footer content goes here')

  const onPageChange = (page: number) => {
    setContent(`Page ${page} of ${pages}`)
  }

  return (
    <div style={{ maxWidth: '800px' }}>
      <TableFooter
        {...pickCommonProps(props)}
        pages={pages}
        onPageChange={onPageChange}
        size={size}
      >
        {content}
      </TableFooter>
    </div>
  )
}

Root.args = {
  size: 'large',
  pages: 10,
}
