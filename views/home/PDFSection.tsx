'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { FileTextIcon, Pencil2Icon, TrashIcon, UploadIcon } from '@radix-ui/react-icons'
import { Button, IconButton } from '@radix-ui/themes'
import { usePdfStore } from '@store/pdfStore'

import { toSize } from '@/libs/fn'

export const PDFSection = () => {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { file, setFile, clearFile } = usePdfStore()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    setFile(file)
    router.push('/pdf-viewer')
  }

  return (
    <>
      <input
        type='file'
        ref={fileInputRef}
        className='hidden'
        accept='application/pdf'
        onChange={handleFileChange}
      />
      <div className='bg-white p-6 rounded-lg border border-gray-200'>
        <div
          onClick={() => {
            if (!file?.size) {
              fileInputRef.current?.click()
            }
          }}
          className='text-center border-3 border-dashed border-gray-200 hover:border-violet-200 rounded-xl px-5 py-7 cursor-default bg-white hover:bg-violet-100/20 hover:text-violet-700'>
          <div className='mb-4'>
            {file?.size ? (
              <div className='flex justify-center'>
                <Image alt='' src='/assets/pdf.png' width={150} height={150} />
              </div>
            ) : (
              <Button variant='soft' style={{ height: 50, width: 50, borderRadius: 10 }}>
                <UploadIcon width='25' height='25' />
              </Button>
            )}
          </div>
          {file?.size ? (
            <div className=''>
              <div className=''>{file?.name}</div>
              <div className='text-[10pt] font-semibold'>{toSize(file?.size)}</div>
            </div>
          ) : (
            <div className='mb-2'>
              Click to upload or drag and drop files to upload a new receipt.
            </div>
          )}
          {Boolean(!file?.size) && (
            <div className='text-[10pt] text-gray-500'>
              <div className=''>Valid formats: .png, .jpg, .jpeg, .pdf, .tif, .tiff</div>
              <div className=''>5MB limit per file</div>
            </div>
          )}
          <div className='mt-5'>
            {file?.size ? (
              <div className='flex items-center gap-1 justify-center'>
                <Button size='3' onClick={() => router.push('/pdf-viewer')}>
                  <FileTextIcon /> View PDF
                </Button>
                <IconButton
                  variant='surface'
                  size='3'
                  onClick={() => fileInputRef.current?.click()}>
                  <Pencil2Icon width='18' height='18' />
                </IconButton>
                <IconButton variant='surface' size='3' color='red' onClick={() => clearFile()}>
                  <TrashIcon width='20' height='20' />
                </IconButton>
              </div>
            ) : (
              <Button size='3' variant='outline'>
                <UploadIcon /> Add Receipt
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
