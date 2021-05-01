import React from 'react'
import styled from 'styled-components'
import { Heading } from '@pancakeswap-libs/uikit'
// eslint-disable-next-line import/no-unresolved
import MoneyWheelBsc from 'moneywheel-bsc'
import useI18n from 'hooks/useI18n'
import { useERC20, useMoneyWheel } from '../../hooks/useContract'
import { getFullDisplayBalance } from '../../utils/formatBalance'
import useTokenBalance from '../../hooks/useTokenBalance'

const Wheel: React.FC = () => {
  const TranslateString = useI18n()

  // Use temporary demo token for now
  // Remove this and use useCake instead
  const tokenContractAddress = '0xfC0349599B3E246DDC91dd7b51055e51C65bC796'

  const tokenBalance = useTokenBalance(tokenContractAddress)

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

      <div style={{ padding: '20px' }}>
        <MoneyWheelBsc
          contract={useMoneyWheel()}
          token={useERC20(tokenContractAddress)}
          tokenBalance={getFullDisplayBalance(tokenBalance)}
          tokenName="WHEEL"
          tokenImageUrl="https://koaladefi.finance/images/farms/lyptus.png"
          soundUrl="https://demo.defifusion.io/wheel.mp3"
          colors={{
            primaryColor: '#62815c',
            primaryContrastTextColor: '#fff',
            secondaryColor: '#41aa29',
            secondaryContrastTextColor: '#fff',
            jackpotColor: '#f4ad2b',
          }}
        />
      </div>
    </>
  )
}

export default Wheel
