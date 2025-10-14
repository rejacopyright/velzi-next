'use client'
import { useRouter } from 'next/navigation'

import { PDFViewer } from '@components/PDFViewer'
import { ArrowLeftIcon, CheckIcon } from '@radix-ui/react-icons'
import { Button, Card } from '@radix-ui/themes'

const Page = () => {
  const router = useRouter()

  return (
    <>
      <div className='bg-white rounded-lg border border-gray-200 w-full mb-5'>
        <PDFViewer />
      </div>
      <div className='sticky bottom-3'>
        <Card>
          <div className='px-2 py-3 flex items-center justify-end gap-3'>
            <Button size='3' variant='outline' onClick={() => router.back()}>
              <ArrowLeftIcon /> Cancel
            </Button>
            <Button size='3' onClick={() => router.back()}>
              <CheckIcon /> Save
            </Button>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Page
