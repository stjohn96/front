import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import useI18n from 'hooks/useI18n'
import { ChevronDown, ChevronUp } from 'react-feather'
import Balance from 'components/Balance'
import { CommunityTag, CoreTag, BinanceTag } from 'components/Tags'
import { PoolCategory } from 'config/constants/types'
import registerToken from 'utils/metamaskUtils'
import { Flex, MetamaskIcon } from '@pancakeswap-libs/uikit'
import { BASE_URL } from 'config'

const tags = {
  [PoolCategory.BINANCE]: BinanceTag,
  [PoolCategory.CORE]: CoreTag,
  [PoolCategory.COMMUNITY]: CommunityTag,
}

interface Props {
  projectLink: string
  decimals: number
  totalStaked: BigNumber
  blocksRemaining: number
  isFinished: boolean
  blocksUntilStart: number
  poolCategory: PoolCategory
  tokenName: string
  tokenAddress: string
  tokenDecimals: number
}

const StyledFooter = styled.div<{ isFinished: boolean }>`
  border-top: 1px solid ${({ theme }) => (theme.isDark ? '#524B63' : '#E9EAEB')};
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'textDisabled2' : 'primary2']};
  padding: 24px;
`

const StyledDetailsButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  height: 32px;
  justify-content: center;
  outline: 0;
  padding: 0;
  &:hover {
    opacity: 0.9;
  }

  & > svg {
    margin-left: 4px;
  }
`

const Details = styled.div`
  margin-top: 24px;
`

const Row = styled.div`
  align-items: center;
  display: flex;
`

const FlexFull = styled.div`
  flex: 1;
`
const Label = styled.div`
  font-size: 14px;
`
const TokenLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`

const CardFooter: React.FC<Props> = ({
  projectLink,
  decimals,
  tokenAddress,
  totalStaked,
  tokenName,
  tokenDecimals,
  blocksRemaining,
  isFinished,
  blocksUntilStart,
  poolCategory,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const TranslateString = useI18n()
  const Icon = isOpen ? ChevronUp : ChevronDown

  const handleClick = () => setIsOpen(!isOpen)
  const Tag = tags[poolCategory]

  const imageSrc = `${BASE_URL}/images/farms/${tokenName.toLowerCase()}.png`

  return (
    <StyledFooter isFinished={isFinished}>
      <Row>
        <FlexFull>
          <Tag />
        </FlexFull>
        <StyledDetailsButton onClick={handleClick}>
          {isOpen ? TranslateString(1066, 'Hide') : TranslateString(658, 'Details')} <Icon />
        </StyledDetailsButton>
      </Row>
      {isOpen && (
        <Details>
          <Row style={{ marginBottom: '4px' }}>
            <FlexFull>
              <Label>
                <img src="/images/farms/lyptus.png" alt="LYPTUS Token" width="15" height="15" />{' '}
                {TranslateString(408, 'Total')}
              </Label>
            </FlexFull>
            <Balance fontSize="14px" isDisabled={isFinished} value={getBalanceNumber(totalStaked)} />
          </Row>
          {blocksUntilStart === 0 && blocksRemaining > 0 && (
            <Row>
              <FlexFull>
                <Label>⏱ {TranslateString(999, 'Blocks remaining')}:</Label>
              </FlexFull>
              <Balance fontSize="14px" isDisabled={isFinished} value={blocksRemaining} decimals={0} />
            </Row>
          )}
          <Row>
            <TokenLink onClick={() => registerToken(tokenAddress, tokenName, tokenDecimals, imageSrc)}>
              Add {tokenName} to Metamask
            </TokenLink>
            <MetamaskIcon height={15} width={15} ml="4px" />
          </Row>
          <Row>
            <TokenLink href={projectLink} target="_blank">
              {TranslateString(412, 'View project site')}
            </TokenLink>
          </Row>
        </Details>
      )}
    </StyledFooter>
  )
}

export default React.memo(CardFooter)
