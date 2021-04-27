import React from 'react'
import { Card, CardBody, Heading, Image, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'

const StyledListedOn = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const LinkListed = styled.a`
  float: left;
  min-width: 200px;
  margin: 5px;
`

const ListedOn = () => {
  return (
    <StyledListedOn>
      <CardBody>
        <Heading size="lg">Listed on</Heading>
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
        <LinkListed>
          <a href="https://www.bsc.news/bsc-projects" target="_blank" rel="noreferrer">
            <Image
              src="/images/extras/bscnews.svg"
              alt="The most recent news about Binance Smart Chain. Latest news about DeFi, Projects, Binance blockchain, cryptocurrency prices and more."
              width={150}
              height={50}
            />
          </a>
        </LinkListed>
        <LinkListed>
          <a
            href="https://dex.apeswap.finance/#/swap?outputCurrency=0xba26397cdff25f0d26e815d218ef3c77609ae7f1"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/extras/apeswap.svg"
              alt="Cheaper and faster than Uniswap? Discover ApeSwap, the #1 AMM and yield farm for apes by apes."
              width={150}
              height={43}
            />
          </a>
        </LinkListed>
        <LinkListed>
          <a
            href="https://bscproject.org/#/project/109"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/extras/bscproject.png"
              alt="All Projects building on Binance Smart Chain (BSC)"
              width={150}
              height={35}
            />
          </a>
        </LinkListed>
      </CardBody>
    </StyledListedOn>
  )
}

export default ListedOn
