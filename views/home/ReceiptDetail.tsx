'use client'
import { useRef } from 'react'

import { ReactTable } from '@components/Table'
import {
  GearIcon,
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
  PlusIcon,
  UploadIcon,
} from '@radix-ui/react-icons'
import { Button, IconButton, TextField } from '@radix-ui/themes'

export const ReceiptDetail = () => {
  const tableRef = useRef<{ addRow: (row: object) => void }>(null)

  return (
    <div className='mb-10'>
      <div className='mb-5'>
        <div className='flex items-center mb-2 gap-2'>
          <h1 className='text-2xl font-semibold'>Receipt Detail</h1>
        </div>
        <div className='flex flex-wrap items-center justify-between gap-2'>
          <div className='w-full md:w-[25vw]'>
            <TextField.Root placeholder='Search companies...' className='border-0'>
              <TextField.Slot>
                <IconButton variant='ghost'>
                  <MagnifyingGlassIcon height='18' width='18' />
                </IconButton>
              </TextField.Slot>
            </TextField.Root>
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            <Button variant='outline'>
              <MixerHorizontalIcon /> Filter
            </Button>
            <Button variant='outline'>
              <GearIcon /> Columns
            </Button>
            <Button variant='outline'>
              <UploadIcon /> Export
            </Button>
            <Button variant='soft' onClick={() => tableRef.current?.addRow({ id: 0 })}>
              <PlusIcon /> Add Receipt
            </Button>
          </div>
        </div>
      </div>
      {/* TABLE */}
      <div className=''>
        <ReactTable ref={tableRef} />
      </div>
    </div>
  )
}
