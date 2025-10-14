import { AccordionContent, AccordionTrigger } from '@components/Accordion'
import {
  BackpackIcon,
  CalendarIcon,
  CaretDownIcon,
  CubeIcon,
  FileTextIcon,
  LayersIcon,
  MixIcon,
  PersonIcon,
  PlusIcon,
} from '@radix-ui/react-icons'
import { Button, Link, Select, TextField } from '@radix-ui/themes'
import { Accordion } from 'radix-ui'

import { PDFSection } from './PDFSection'

export const ExpenseItem = () => {
  return (
    <div className='mb-10'>
      <div className='mb-5'>
        <div className='flex items-center mb-2 gap-2'>
          <Link>
            <LayersIcon width='20' height='20' />
          </Link>
          <h1 className='text-2xl font-semibold'>Expense Item</h1>
        </div>
        <div className='flex items-center gap-2'>
          <Button>1. [New Expense]</Button>
          <Button variant='outline'>
            <PlusIcon /> Add <CaretDownIcon />
          </Button>
        </div>
      </div>
      <div className='flex flex-wrap gap-6'>
        <div className='bg-white rounded-lg border border-gray-200 w-full md:flex-5 overflow-hidden'>
          <Accordion.Root type='single' className='' collapsible defaultValue='basic'>
            <Accordion.Item value='basic'>
              <AccordionTrigger>
                <div className='flex items-center gap-x-2'>
                  <Link>
                    <FileTextIcon width='18' height='18' />
                  </Link>
                  <div className=''>Basic Information</div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className='space-y-5'>
                  <div className=''>
                    <label className='block text-sm font-bold mb-1'>Description</label>
                    <TextField.Root
                      placeholder='e.g., Office supplies, Client dinner, Travel Expenses'
                      className='border-0'
                    />
                  </div>

                  <div className=''>
                    <label className='block text-sm font-bold mb-1'>Expense Category</label>
                    <div className='flex flex-col'>
                      <Select.Root defaultValue='value'>
                        <Select.Trigger>
                          <div className='flex items-center gap-2 text-gray-500'>
                            Select expense category
                          </div>
                        </Select.Trigger>
                        <Select.Content>
                          <Select.Item value='value'>
                            <div className='flex items-center gap-2'>
                              <PersonIcon />
                              Add message
                            </div>
                          </Select.Item>
                        </Select.Content>
                      </Select.Root>
                    </div>
                  </div>

                  <div className=''>
                    <label className='block text-sm font-bold mb-1'>Merchant</label>
                    <TextField.Root placeholder='Enter Merchant' className='border-0' />
                  </div>
                </div>
              </AccordionContent>
            </Accordion.Item>

            {[
              { title: 'Vendor Information', icon: <CubeIcon width='18' height='18' /> },
              { title: 'Financial Details', icon: <BackpackIcon width='18' height='18' /> },
              { title: 'Accounting', icon: <MixIcon width='18' height='18' /> },
              { title: 'Notes', icon: <CalendarIcon width='18' height='18' /> },
            ].map(({ title, icon }, key) => (
              <Accordion.Item key={key} value={title.toLowerCase().replace(/\s/g, '-')}>
                <AccordionTrigger>
                  <div className='flex items-center gap-x-2'>
                    <Link>{icon}</Link>
                    <div className=''>{title}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className='text-sm text-gray-500'>Content for {title}</p>
                </AccordionContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
        {/* PDF */}
        <div className='w-full md:flex-3'>
          <PDFSection />
        </div>
      </div>
    </div>
  )
}
