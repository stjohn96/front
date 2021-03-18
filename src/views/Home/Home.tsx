import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, Button, HelpIcon } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPYCard from 'views/Home/components/EarnAPYCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import WinCard from 'views/Home/components/WinCard'
import TwitterCard from 'views/Home/components/TwitterCard'
import ListedOn from 'views/Home/components/ListedOn'
import AuditCard from './components/AuditCard'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 22px;
  padding-top: 60px;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

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

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <>
      <Header>
        <Heading as="h1" size="xl" color="secondary" mb="24px">
          {TranslateString(578, 'High yields BSC farm brought by the Koalas.')}
        </Heading>
        <Heading size="lg" color="text">
          <a href="https://swap.koaladefi.finance/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xba26397cdff25f0d26e815d218ef3c77609ae7f1">
            <Button variant="subtle">
              {TranslateString(733, 'BUY')}{' '}
              <img src="/images/farms/lyptus.png" alt="LYPTUS Token" width="70" height="70" />{' '}
              {TranslateString(734, 'LYPTUS Token Now!')}
            </Button>
          </a>
        </Heading>
      </Header>
      <Page>
        <div>
          <Cards>
            <FarmStakingCard />
            <TwitterCard />
            <CakeStats />
            <TotalValueLockedCard />
          </Cards>
          <Cards>
            <EarnAssetCard />
            <AuditCard />
          </Cards>
          <Cards>
            <ListedOn />
          </Cards>
        </div>
      </Page>
    </>
  )
}

export default Home
