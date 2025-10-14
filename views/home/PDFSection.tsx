'use client'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'

import { UploadIcon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'
import { usePdfStore } from '@store/pdfStore'

export const PDFSection = () => {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { setFile } = usePdfStore()

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
          onClick={() => fileInputRef.current?.click()}
          className='text-center border-3 border-dashed border-gray-200 hover:border-violet-200 rounded-xl px-5 py-7 cursor-default bg-white hover:bg-violet-100/20 hover:text-violet-700'>
          <div className='mb-4'>
            <Button variant='soft' style={{ height: 50, width: 50, borderRadius: 10 }}>
              <UploadIcon width='25' height='25' />
            </Button>
          </div>
          <div className='mb-2'>
            Click to upload or drag and drop files to upload a new receipt.
          </div>
          <div className='text-[10pt] text-gray-500'>
            <div className=''>Valid formats: .png, .jpg, .jpeg, .pdf, .tif, .tiff</div>
            <div className=''>5MB limit per file</div>
          </div>
          <div className='mt-5'>
            <Button radius='large' size='3' variant='outline'>
              <UploadIcon /> Add Receipt
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
