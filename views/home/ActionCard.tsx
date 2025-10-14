'use client'

import { ArrowLeftIcon, FileTextIcon, PaperPlaneIcon } from '@radix-ui/react-icons'
import { Button, Card } from '@radix-ui/themes'

export const ActionCard = () => {
  return (
    <div className='sticky bottom-3 mb-20'>
      <Card>
        <div className='px-2 py-3 flex items-center justify-end gap-3'>
          <Button size='3' variant='outline'>
            <ArrowLeftIcon /> Cancel
          </Button>
          <Button size='3' variant='surface'>
            <FileTextIcon /> Save Draft
          </Button>
          <Button size='3'>
            <PaperPlaneIcon /> Sumbit
          </Button>
        </div>
      </Card>
    </div>
  )
}
