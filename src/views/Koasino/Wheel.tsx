import React, { useState } from 'react'
import styled from 'styled-components'
import { Heading } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Flex from 'components/layout/Flex'
import Page from '../../components/layout/Page'

const Wheel: React.FC = () => {
  const TranslateString = useI18n()

  const Header = styled.div`
    padding: 32px 0px;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};

    padding-left: 16px;
    padding-right: 16px;

    margin-bottom: 20px;

    ${({ theme }) => theme.mediaQueries.sm} {
      padding-left: 24px;
      padding-right: 24px;
    }
  `

  return (
    <>
      <Header>
        <Heading as="h1" size="xl" color="secondary" mb="24px">
          {TranslateString(999, 'MoneyWheel')}
        </Heading>
      </Header>
      <Page>
        <img src="/images/koalasino/moneywheel-01.png" alt="MoneyWheel" />
        Coming soon...
      </Page>
    </>
  )
}

export default Wheel
