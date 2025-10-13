import { ReactNode } from 'react'

import { ChevronDownIcon } from '@radix-ui/react-icons'
import { Accordion } from 'radix-ui'

export const AccordionTrigger = ({ children }: { children: ReactNode }) => {
  return (
    <Accordion.Header className='bg-white border-b border-gray-200'>
      <Accordion.Trigger className='flex justify-between items-center w-full font-semibold p-4'>
        {children}
        <ChevronDownIcon className='transition-transform duration-200 AccordionChevron' />
      </Accordion.Trigger>
    </Accordion.Header>
  )
}

export const AccordionContent = ({ children }: { children: ReactNode }) => {
  return (
    <Accordion.Content className='bg-white px-4 py-3 text-sm text-gray-700'>
      {children}
    </Accordion.Content>
  )
}
