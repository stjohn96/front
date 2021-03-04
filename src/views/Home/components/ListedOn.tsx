import React from 'react'
import { Card, CardBody, Heading, Image, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'

const StyledListedOn = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const LinkListed = styled.p`
  float: left;
  min-width: 200px;
`

const ListedOn = () => {
  return (
    <StyledListedOn>
      <CardBody>
        <LinkListed>
          <a href="https://www.dapp.com/app/koala-defi-finance" target="_blank" rel="noreferrer">
            <Image
              src="/images/extras/dapp.png"
              alt="Dapp.com is a one-stop platform for the dapps you’ll love. Explore and enjoy thousands of ranked blockchain games, social network, tools &amp; more built on Ethereum, EOS, STEEM, NEO &amp; TRON."
              width={110}
              height={50}
            />
          </a>
        </LinkListed>
        <LinkListed>
          <a href="https://dappradar.com/binance-smart-chain/defi/koala-defi" target="_blank" rel="noreferrer">
            <Image
              src="/images/extras/dappradar.svg"
              alt="DappRadar provides information and insights about all the existing dapps! At the tap of your finger, find the most successful and used decentralized games, casinos, and marketplaces, among others."
              width={150}
              height={50}
            />
          </a>
        </LinkListed>
      </CardBody>
    </StyledListedOn>
  )
}

export default ListedOn
