import { Meta, Story } from '@storybook/react'
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

const itemContentArray = [
  'Content 1',
  'Content 2',
  'Content 3',
  'Content 4',
  'Content 5',
  'Content 6',
  'Content 7',
  'Content 8',
]

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

const dropdownOptions = new Array(8).fill(null).map((value, index) => ({
  value: `${index}`,
  name: `Title ${index + 1}`,
}))

const headerOptions = new Array(8).fill(null).map((value, index) => ({
  value: `${index}`,
  name: `TITLE ${index + 1}`,
}))

export const Root: Story<TableProps> = ({ type, pages, ...args }) => {
  const [rows, setRows] = useState(1)
  const [footerContent, setFooterContent] = useState('Footer content goes here')
  const [allChecked, setAllChecked] = useState(false)
  const [rowsChecked, setRowsChecked] = useState(Array(rows).fill(false))
  const onPageChange = (page: number) => {
    setFooterContent(`Page ${page} of ${pages}`)
  }

  const handleHeaderCheckboxChange = () => {
    const newAllChecked = !allChecked
    setAllChecked(newAllChecked)
    // Update all rows based on the header checkbox.
    setRowsChecked(Array(rows).fill(newAllChecked))
  }

  const handleRowCheckboxChange = (index: number) => {
    const updatedRowsChecked = [...rowsChecked]
    updatedRowsChecked[index] = !updatedRowsChecked[index]
    setRowsChecked(updatedRowsChecked)

    // Check if all rows are selected or if any row is unchecked
    if (updatedRowsChecked.every((val) => val)) {
      setAllChecked(true)
    } else {
      setAllChecked(false)
    }
  }

  const toolbar = (
    <>
      <Dropdown
        size="medium"
        options={dropdownOptions}
        value={dropdownOptions[0].value}
        style={{
          width: 'auto',
          minWidth: '113px',
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <IconButton
          onClick={() => setRows((prev: number) => prev + 1)}
          size="medium"
        >
          <AddIcon color="primary" />
        </IconButton>
        <IconButton
          onClick={() =>
            setRows((prev: number) => (prev > 1 ? prev - 1 : prev))
          }
          size="medium"
        >
          <RemoveIcon color="primary" />
        </IconButton>
        <Button
          size="medium"
          style={{
            height: '32px',
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
        footerContent={footerContent}
        pages={pages}
        {...args}
        onPageChange={onPageChange}
      >
        <TableRow
          onSelectChange={handleHeaderCheckboxChange}
          checked={allChecked}
        >
          {headerOptions.map((item, index) => (
            <TableItem key={index}>{item.name}</TableItem>
          ))}
        </TableRow>
        {Array(rows)
          .fill(true)
          .map((row, rowIndex) => (
            <TableRow
              checked={rowsChecked[rowIndex]}
              onSelectChange={() => handleRowCheckboxChange(rowIndex)}
              key={rowIndex}
            >
              {itemContentArray.map((itemContent, itemIndex) => (
                <TableItem key={`${rowIndex}-${itemIndex}`}>
                  {itemContent}
                </TableItem>
              ))}
            </TableRow>
          ))}
      </Table>
    </div>
  )
}

Root.args = {
  size: 'large',
  type: 'default',
  hasFooter: true,
  pages: 10,
}
