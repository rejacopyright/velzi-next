'use client'

import dynamic from 'next/dynamic'

import type { ColumnDefinition } from 'react-tabulator'

const ReactTabulator = dynamic(() => import('react-tabulator').then((m) => m.ReactTabulator), {
  ssr: false,
})

import { forwardRef, useImperativeHandle, useRef } from 'react'

import { FileTextIcon, ResetIcon, TrashIcon } from '@radix-ui/react-icons'
import { renderToStaticMarkup } from 'react-dom/server'

import 'react-tabulator/css/tabulator_bootstrap5.min.css'
import '@styles/react_tabulator.css'

type TableLayout = 'fitData' | 'fitDataFill' | 'fitDataStretch' | 'fitDataTable' | 'fitColumns'
type TableRef = {
  addRow: (rowData: object) => void
}

export const ReactTable = forwardRef<TableRef>((_, ref) => {
  const initialData = Array(4)
    .fill({})
    .map((_, index) => ({
      id: index + 1,
      description: '[New Expense]',
      receipt_number: '-',
      date: '',
      amount: 0,
      total: '-',
      vat: '-',
      currency: '-',
      fx: 'USD',
      account: 0,
      qty: 0,
      vatRate: 0,
      vatAmount: '-',
      quantity: '-',
      project_code: '-',
      category: '-',
      dueDate: '-',
      files: ['A'],
      note: '-',
    }))

  const tableRef = useRef<any>(null)

  const reorder = (cellInstance?: any) => {
    const rows: any[] = cellInstance?.getRows()

    rows.forEach((row: any, index) => {
      row?.update({ id: index + 1 })
    })
  }

  useImperativeHandle(ref, () => ({
    addRow: (rowData: object) => {
      const table = tableRef.current

      if (table) {
        table.addRow(rowData, true).then((newRow: any) => {
          reorder(table)
          setTimeout(() => {
            const columns = table.getColumns()

            const editableColumn = columns.find((col: any) => {
              const def = col.getDefinition()

              return def.editor !== undefined && def.editor !== false
            })

            if (editableColumn) {
              const cell = newRow.getCell(editableColumn.getField())

              if (cell) {
                cell.edit()
              }
            }
          }, 100)
        })
      }
    },
  }))

  const columns: ColumnDefinition[] = [
    {
      title: '',
      formatter: 'rowSelection',
      titleFormatter: 'rowSelection',
      hozAlign: 'center',
      headerHozAlign: 'center',
      headerSort: false,
      width: 50,
    },
    {
      title: 'No',
      field: 'id',
      width: 50,
      hozAlign: 'center',
      headerHozAlign: 'center',
      headerSort: false,
    },
    {
      title: 'Description',
      field: 'description',
      editor: 'input',
    },
    { title: 'Receipt Number', field: 'receipt_number', editor: 'input' },
    { title: 'Date', field: 'date', editor: 'input' },
    {
      title: 'Amount',
      field: 'amount',
      editor: 'number',
      formatter: 'money',
      formatterParams: { symbol: '$', precision: 2 },
    },
    { title: 'Total (Local)', field: 'total', editor: 'number' },
    { title: 'VAT (Local)', field: 'vat', editor: 'number' },
    {
      title: 'Currency',
      field: 'currency',
      editor: 'select',
      editorParams: { values: ['USD', 'EUR', 'IDR'] },
    },
    {
      title: 'FX Rate',
      field: 'fx',
      editor: 'select',
      editorParams: { values: ['USD', 'EUR', 'IDR'] },
    },
    {
      title: 'Account',
      field: 'account',
      editor: 'number',
      formatter: (cell) => `${cell.getValue() || 0}%`,
    },
    {
      title: 'Qty',
      field: 'qty',
      editor: 'number',
      formatter: (cell) => `${cell.getValue() || 0}%`,
    },
    {
      title: 'VAT (%)',
      field: 'vatRate',
      editor: 'number',
      formatter: (cell) => `${cell.getValue() || 0}%`,
    },
    {
      title: 'VAT',
      field: 'vatAmount',
      editor: 'number',
    },
    {
      title: 'Quantity',
      field: 'quantity',
      editor: 'number',
    },
    {
      title: 'Project Code',
      field: 'project_code',
      editor: 'input',
    },
    {
      title: 'Expense Category',
      field: 'category',
      editor: 'select',
      editorParams: { values: ['Cat A', 'Cat B'] },
    },
    {
      title: 'Due Date',
      field: 'dueDate',
      editor: 'input',
    },
    {
      title: 'Files',
      field: 'files',
      headerSort: false,
      hozAlign: 'center',
      vertAlign: 'middle',
      formatter: (_cell) => renderToStaticMarkup(<FileTextIcon width='18' height='18' />),
      cellClick: (e, _cell) => e.preventDefault(),
    },

    {
      title: 'Note',
      field: 'note',
      editor: 'input',
    },

    {
      title: 'Actions',
      headerSort: false,
      hozAlign: 'center',
      vertAlign: 'middle',
      formatter: () => {
        return renderToStaticMarkup(
          <div className='flex items-center gap-3 self-center mx-auto'>
            <ResetIcon width='18' height='18' id='reset' />
            <TrashIcon width='18' height='18' id='delete' />
          </div>
        )
      },
      cellClick: (_e, cell) => {
        cell
          .getRow()
          .delete()
          .then(() => {
            reorder(cell.getTable())
          })
      },
    },
  ]

  const layout: TableLayout = 'fitDataFill'

  return (
    <div className='border border-gray-300 rounded-lg overflow-hidden'>
      <ReactTabulator
        ref={tableRef}
        onRef={(r) => {
          tableRef.current = r?.current
        }}
        data={initialData}
        columns={columns}
        layout={layout}
        options={{
          minHeight: 300,
          maxHeight: 800,
          selectableRows: true,
          selectableRowsCheck: () => false,
          reactiveData: true,
          movableRows: true,
          movableColumns: true,
          pagination: 'local',
          paginationSize: 10,
          paginationSizeSelector: [5, 10, 20, 50],
        }}
      />
    </div>
  )
})
