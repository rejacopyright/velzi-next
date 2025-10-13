import NextLink from 'next/link'

import { ChevronRightIcon } from '@radix-ui/react-icons'
import { Link, Text } from '@radix-ui/themes'

export const Breadcrumbs = () => {
  return (
    <div className='flex items-center text-sm font-medium text-nowrap'>
      <Link asChild className='hover:underline text-white'>
        <NextLink href='/'>$ Expense</NextLink>
      </Link>
      <ChevronRightIcon className='mx-2' />
      <Text>Submit Expense</Text>
    </div>
  )
}
