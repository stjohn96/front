import React from 'react'
import { Heading, Text } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'

const Header = styled.div`
  padding: 32px 0px;
  background: ${({ theme }) => theme.colors.gradients.bubblegum};

  padding-left: 16px;
  padding-right: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Bush = () => {
  const TranslateString = useI18n()

  return (
    <>
      <Header>
      <Heading as="h1" size="xxl" color="secondary" mb="24px">
        {TranslateString(999, 'Bush')}
      </Heading>
      <Heading size="lg" color="text">
        {TranslateString(999, 'Stake LYPTUS, earn ?')}
      </Heading>
      </Header>
      <Page>
        <Text>
          {TranslateString(
            999,
            'Work in progress',
          )}
        </Text>
      </Page>
    </>
  )
}

export default Bush
