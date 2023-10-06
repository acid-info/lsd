import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../Button'
import { Dropdown } from '../Dropdown'
import { IconButton } from '../IconButton'
import { AddIcon, RemoveIcon } from '../Icons'
import { TableItem } from '../TableItem'
import { TableRow } from '../TableRow'
import { Table, TableProps } from './Table'

export default {
  title: 'Table',
  component: Table,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
    },
    type: {
      type: {
        name: 'enum',
        value: ['default', 'checkbox', 'radio'],
      },
    },
  },
} as Meta

const content = (
  <TableRow>
    <TableItem>Content 1</TableItem>
    <TableItem>Content 2</TableItem>
    <TableItem>Content 3</TableItem>
    <TableItem>Content 4</TableItem>
    <TableItem>Content 5</TableItem>
    <TableItem>Content 6</TableItem>
    <TableItem>Content 7</TableItem>
    <TableItem>Content 8</TableItem>
  </TableRow>
)

const header = (
  <div
    style={{
      padding: '10px 18px 28px',
      boxSizing: 'border-box',
    }}
  >
    <div style={{ fontSize: '16px' }}>Table header</div>
    <div style={{ fontSize: '12px' }}>Table description</div>
  </div>
)

const headerOptions = new Array(8).fill(null).map((value, index) => ({
  value: `${index}`,
  name: `Title ${index + 1}`,
}))

export const Root: StoryObj<TableProps> = {
  render: ({ type, ...args }) => {
    const [rows, setRows] = useState(1)

    const toolbar = (
      <>
        <Dropdown size="small" label="Label" options={headerOptions} />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <IconButton
            onClick={() => setRows((prev: number) => prev + 1)}
            size="small"
          >
            <AddIcon color="primary" />
          </IconButton>
          <IconButton
            onClick={() =>
              setRows((prev: number) => (prev > 1 ? prev - 1 : prev))
            }
            size="small"
          >
            <RemoveIcon color="primary" />
          </IconButton>
          <Button
            size="small"
            style={{
              height: '28px',
              background: 'rgb(var(--lsd-border-primary))',
              color: 'rgb(var(--lsd-icon-secondary))',
            }}
          >
            Button
          </Button>
        </div>
      </>
    )

    return (
      <div style={{ maxWidth: 800 }}>
        <Table
          type={type}
          header={header}
          toolbar={toolbar}
          headerOptions={headerOptions}
          {...args}
        >
          <TableRow>
            {headerOptions.map((item) => (
              <TableItem>{item.name}</TableItem>
            ))}
          </TableRow>
          {Array(rows)
            .fill(true)
            .map(() => content)}
        </Table>
      </div>
    )
  },

  args: {
    size: 'large',
    type: 'default',
  },
}
