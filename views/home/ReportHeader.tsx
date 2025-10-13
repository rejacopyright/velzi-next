import {
  ArchiveIcon,
  CalendarIcon,
  CheckCircledIcon,
  FileTextIcon,
  LayersIcon,
  PersonIcon,
} from '@radix-ui/react-icons'
import { Button, IconButton, Link, Select, TextField } from '@radix-ui/themes'

export const ReportHeader = () => {
  return (
    <div className='bg-white p-6 rounded-lg border border-gray-200 mb-10'>
      <div className='flex items-center mb-2 gap-2'>
        <Link>
          <LayersIcon width='20' height='20' />
        </Link>
        <h1 className='text-2xl font-semibold'>Report Header</h1>
      </div>
      <p className='text-sm text-gray-500 mb-6'>
        Complete the form below to submit your expense report for approval.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* LEFT */}
        <div className='space-y-5'>
          <div className=''>
            <label className='block text-sm font-medium mb-1'>Expense Report Name</label>
            <TextField.Root placeholder='Enter report name' className='border-0' />
          </div>

          <div className='flex flex-wrap items-center gap-3'>
            <div className='w-full md:flex-1'>
              <label className='block text-sm font-medium mb-1'>Tags</label>
              <TextField.Root placeholder='Enter tags (comma separated)' className='border-0' />
            </div>
            <div className='w-full md:flex-1'>
              <label className='block text-sm font-medium mb-1'>Folder</label>
              <TextField.Root placeholder='Enter folder name' className='border-0'>
                <TextField.Slot />
                <TextField.Slot>
                  <IconButton variant='ghost'>
                    <ArchiveIcon height='15' width='15' />
                  </IconButton>
                </TextField.Slot>
              </TextField.Root>
            </div>
          </div>

          <div className=''>
            <label className='block text-sm font-medium mb-1'>Approval Flow</label>
            <div className='flex flex-col'>
              <Select.Root defaultValue='value'>
                <Select.Trigger>
                  <div className='flex items-center gap-2 text-gray-500'>
                    <PersonIcon />
                    Add message
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
            <label className='block text-sm font-medium mb-1'>Custom Workflow</label>
            <div className='flex flex-col'>
              <Select.Root defaultValue='value'>
                <Select.Trigger>
                  <div className='flex items-center gap-2 text-gray-500'>
                    <PersonIcon />
                    Add message
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
        </div>

        {/* RIGHT */}
        <div className='space-y-5'>
          <div className=''>
            <label className='block text-sm font-medium mb-1'>Expense Report Number</label>
            <TextField.Root placeholder='Auto-generated' disabled className='border-0' />
          </div>

          <div>
            <label className='block text-sm font-medium mb-1'>Report Date</label>
            <TextField.Root placeholder='Enter report date' className='border-0'>
              <TextField.Slot />
              <TextField.Slot>
                <IconButton variant='ghost'>
                  <CalendarIcon height='15' width='15' />
                </IconButton>
              </TextField.Slot>
            </TextField.Root>
          </div>

          <div className='flex flex-col pt-[25px]'>
            <Button variant='surface' style={{ height: 60 }}>
              <div className='flex items-center justify-between w-full'>
                <div className=''>Total Expenses</div>
                <div className='text-xl font-bold'>$0.00</div>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
        <div className='flex flex-wrap gap-2'>
          <div className='flex-1 text-nowrap'>
            <Button style={{ width: '100%', height: 35 }}>
              <PersonIcon /> Submit on Behalf Of
            </Button>
          </div>
          <div className='text-nowrap'>
            <Button variant='outline' style={{ width: '100%', height: 35 }}>
              <FileTextIcon /> Policy Documents
            </Button>
          </div>
          <div className='text-nowrap'>
            <Button variant='outline' style={{ width: '100%', height: 35 }}>
              <FileTextIcon /> Audit Trail
            </Button>
          </div>
        </div>
        <Button variant='outline' style={{ width: '100%', height: 35 }}>
          <CheckCircledIcon /> Show Status Overview
        </Button>
      </div>
    </div>
  )
}
