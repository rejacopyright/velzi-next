import { ActionCard } from '@views/home/ActionCard'
import { ExpenseItem } from '@views/home/ExpenseItem'
import { ReceiptDetail } from '@views/home/ReceiptDetail'
import { ReportHeader } from '@views/home/ReportHeader'

const Page = () => {
  return (
    <div className=''>
      <ReportHeader />
      <ExpenseItem />
      <ReceiptDetail />
      <ActionCard />
    </div>
  )
}

export default Page
