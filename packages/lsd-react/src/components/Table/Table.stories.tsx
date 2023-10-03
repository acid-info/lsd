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

type SingleTableRowProps = {
  rowIndex: number
  checked?: boolean
  itemContentArray: string[]
  onSelectChange?: () => void
  truncateContent: boolean
}

const SingleTableRow = ({
  rowIndex,
  checked,
  itemContentArray,
  onSelectChange,
  truncateContent,
}: SingleTableRowProps) => (
  <TableRow checked={checked} onSelectChange={onSelectChange} key={rowIndex}>
    {itemContentArray.map((itemContent, itemIndex) => (
      <TableItem
        key={`${rowIndex}-${itemIndex}`}
        truncateContent={truncateContent}
      >
        {itemContent}
      </TableItem>
    ))}
  </TableRow>
)

type DefaultTypeRowsProps = {
  rows: number
  itemContentArray: string[]
  truncateContent: boolean
}

const DefaultTypeRows = ({
  rows,
  itemContentArray,
  truncateContent,
}: DefaultTypeRowsProps) => (
  <>
    {Array(rows)
      .fill(null)
      .map((_, rowIndex) => (
        <SingleTableRow
          rowIndex={rowIndex}
          itemContentArray={itemContentArray}
          key={rowIndex}
          truncateContent={truncateContent}
        />
      ))}
  </>
)

type CheckboxTypeRowsProps = {
  rows: number
  itemContentArray: string[]
  rowsChecked: boolean[]
  handleRowCheckboxChange: (index: number) => void
  truncateContent: boolean
}

const CheckboxTypeRows = ({
  rows,
  rowsChecked,
  itemContentArray,
  handleRowCheckboxChange,
  truncateContent,
}: CheckboxTypeRowsProps) => (
  <>
    {Array(rows)
      .fill(null)
      .map((_, rowIndex) => (
        <SingleTableRow
          rowIndex={rowIndex}
          checked={rowsChecked[rowIndex]}
          itemContentArray={itemContentArray}
          onSelectChange={() => handleRowCheckboxChange(rowIndex)}
          key={rowIndex}
          truncateContent={truncateContent}
        />
      ))}
  </>
)

type RadioTypeRowsProps = {
  rows: number
  selectedRowIndex: number | null
  itemContentArray: string[]
  handleRowCheckboxChange: (index: number) => void
  truncateContent: boolean
}

const RadioTypeRows = ({
  rows,
  selectedRowIndex,
  itemContentArray,
  handleRowCheckboxChange,
  truncateContent,
}: RadioTypeRowsProps) => (
  <>
    {Array(rows)
      .fill(null)
      .map((_, rowIndex) => (
        <SingleTableRow
          rowIndex={rowIndex}
          checked={rowIndex === selectedRowIndex}
          itemContentArray={itemContentArray}
          onSelectChange={() => handleRowCheckboxChange(rowIndex)}
          key={rowIndex}
          truncateContent={truncateContent}
        />
      ))}
  </>
)

export const Root: Story<TableProps & { truncateContent: boolean }> = ({
  type,
  pages,
  truncateContent,
  ...args
}) => {
  const [rows, setRows] = useState(1)
  const [footerContent, setFooterContent] = useState('Footer content goes here')
  const [allChecked, setAllChecked] = useState(false)
  // For radio type:
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null)
  // For checkbox type:
  const [rowsChecked, setRowsChecked] = useState<boolean[]>(
    Array(rows).fill(false),
  )

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
    if (type === 'radio') {
      setSelectedRowIndex(index)
    } else {
      const updatedRowsChecked = [...rowsChecked]
      updatedRowsChecked[index] = !updatedRowsChecked[index]
      setRowsChecked(updatedRowsChecked)

      setAllChecked(
        updatedRowsChecked.every((val) => val) &&
          updatedRowsChecked.length === rows,
      )
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
          onClick={() => {
            setRows((prev: number) => prev + 1)
            setRowsChecked((prev) => [...prev, false])
          }}
          size="medium"
        >
          <AddIcon color="primary" />
        </IconButton>
        <IconButton
          onClick={() => {
            setRows((prev: number) => (prev > 1 ? prev - 1 : prev))
            if (rows > 1) {
              setRowsChecked((prev) => prev.slice(0, -1))
            }
          }}
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
        {type === 'checkbox' ? (
          <CheckboxTypeRows
            rows={rows}
            rowsChecked={rowsChecked}
            itemContentArray={itemContentArray}
            handleRowCheckboxChange={handleRowCheckboxChange}
            truncateContent={truncateContent}
          />
        ) : type === 'radio' ? (
          <RadioTypeRows
            rows={rows}
            selectedRowIndex={selectedRowIndex}
            itemContentArray={itemContentArray}
            handleRowCheckboxChange={handleRowCheckboxChange}
            truncateContent={truncateContent}
          />
        ) : (
          <DefaultTypeRows
            rows={rows}
            itemContentArray={itemContentArray}
            truncateContent={truncateContent}
          />
        )}
      </Table>
    </div>
  )
}

Root.args = {
  size: 'large',
  type: 'default',
  hasFooter: true,
  truncateContent: false,
  pages: 10,
}
