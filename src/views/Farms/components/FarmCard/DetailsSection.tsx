import React from 'react'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Text, Flex, Link, LinkExternal } from '@pancakeswap-libs/uikit'
import Balance from '../../../../components/Balance'
import { getBalanceNumber } from '../../../../utils/formatBalance'

export interface ExpandableSectionProps {
  bscScanAddress?: string
  removed?: boolean
  totalValueFormated?: string
  lpTokenPriceFormated?: string
  lpLabel?: string
  addLiquidityUrl?: string
  isTokenOnly: boolean
  tokenName?: string
  totalStaked?: string
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  bscScanAddress,
  removed,
  totalValueFormated,
  lpTokenPriceFormated,
  lpLabel,
  addLiquidityUrl,
  isTokenOnly,
  tokenName,
  totalStaked,
}) => {
  const TranslateString = useI18n()

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <Text>{TranslateString(316, 'Stake')}:</Text>
        <StyledLinkExternal href={addLiquidityUrl}>{lpLabel}</StyledLinkExternal>
      </Flex>
      {isTokenOnly && (
        <div>
          <Flex justifyContent="space-between">
            <Text>
              {tokenName === 'LYPTUS' && (
                <span>
                  <img src="/images/farms/lyptus.png" alt="LYPTUS Token" width="15" height="15" />{' '}
                </span>
              )}
              {TranslateString(10011, 'Total staked')}:
            </Text>
            <Text>{totalStaked}</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>{TranslateString(10012, 'Value staked')}:</Text>
            <Text>{totalValueFormated}</Text>
          </Flex>
        </div>
      )}

      {!isTokenOnly && (
        <div>
          <Flex justifyContent="space-between">
            <Text>{TranslateString(354, 'Total Liquidity')}:</Text>
            <Text>{totalValueFormated}</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>{TranslateString(999, 'LP price')}:</Text>
            <Text>{lpTokenPriceFormated}</Text>
          </Flex>
        </div>
      )}
      <Flex justifyContent="flex-start">
        <Link external href={bscScanAddress} bold={false}>
          {TranslateString(356, 'View on BscScan')}
        </Link>
      </Flex>
    </Wrapper>
  )
}

export default DetailsSection
