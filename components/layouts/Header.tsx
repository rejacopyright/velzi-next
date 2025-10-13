import { Breadcrumbs } from '@components/Breadcrumbs'
import { themeConfig } from '@config'
import { BackpackIcon, BellIcon, PlusIcon } from '@radix-ui/react-icons'
import { Avatar, Button, Container, Select } from '@radix-ui/themes'

export const HeaderMenu = () => {
  const selectData = [
    { value: 'ash', label: 'Ash Corp', icon: <BackpackIcon /> },
    { value: 'other', label: 'Other Corp', icon: <BackpackIcon /> },
  ]

  return (
    <div className='fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white dark:bg-black'>
      <Container>
        <div
          className='flex items-center justify-between'
          style={{ height: themeConfig.headerHeight }}>
          <Breadcrumbs />
          <div className='flex items-center gap-3'>
            <Select.Root defaultValue='ash'>
              <Select.Trigger radius='large'>
                <div className='flex items-center gap-2'>
                  <BackpackIcon />
                  Ash Corp
                </div>
              </Select.Trigger>
              <Select.Content>
                {selectData.map(({ value, label, icon }, key) => (
                  <Select.Item value={value} key={key}>
                    <div className='flex items-center gap-2'>
                      {icon} {label}
                    </div>
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
            <Button>
              <PlusIcon /> Start workflow
            </Button>
            <BellIcon width={20} height={20} />
            <Avatar size='2' radius='full' fallback='A' />
          </div>
        </div>
      </Container>
    </div>
  )
}
