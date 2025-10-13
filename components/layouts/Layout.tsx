import { ReactNode } from 'react'

import { themeConfig } from '@config'
import { Container, Theme } from '@radix-ui/themes'

import { HeaderMenu } from './Header'

interface Props {
  children: ReactNode
}

export const LayoutProvider = ({ children }: Props) => {
  return (
    <Theme accentColor='violet'>
      <HeaderMenu />
      <Container className='containers px-5' style={{ paddingTop: themeConfig.headerHeight }}>
        <div className='mt-8'>{children}</div>
      </Container>
      {/* <ThemePanel /> */}
    </Theme>
  )
}
