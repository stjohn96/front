import React, { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Skeleton } from '@pancakeswap-libs/uikit'
import { NavLink } from 'react-router-dom'
import useI18n from 'hooks/useI18n'
import BigNumber from 'bignumber.js'
import { useFarms, usePriceBnbBusd, usePriceCakeBusd } from 'state/hooks'
import { FarmWithStakedValue } from '../../Farms/components/FarmCard/FarmCard'
import { BLOCKS_PER_YEAR } from '../../../config'
import { QuoteToken } from '../../../config/constants/types'
import useApePrice from '../../../hooks/useApePrice'

const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  color: ${({ theme }) => (theme.isDark ? 'white' : '#41aa29')};
  line-height: 44px;
`
const EarnAPYCard: React.FC = () => {
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const bnbPrice = usePriceBnbBusd()
  const cakePrice = usePriceCakeBusd()
  const [apePrice, setApePrice] = useState(0)
  const apeReserve = useApePrice()
  apeReserve.then(setApePrice)

  const maxAPY = useRef(Number.MIN_VALUE)

  const getHighestAPY = () => {
    const activeFarms = farmsLP.filter((farm) => !farm.isTokenOnly && farm.pid !== 0 && farm.multiplier !== '0X')

    calculateAPY(activeFarms)

    return (maxAPY.current * 100).toLocaleString('en-US').slice(0, -1)
  }

  const calculateAPY = useCallback(
    (farmsToDisplay): FarmWithStakedValue[] => {
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        const cakeRewardPerBlock = new BigNumber(farm.lyptusPerBlock || 1)
          .times(new BigNumber(farm.poolWeight))
          .div(new BigNumber(10).pow(18))
        const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

        // cakePriceInQuote * cakeRewardPerYear / lpTotalInQuoteToken
        let apy = cakePrice.times(cakeRewardPerYear)

        let totalValue = new BigNumber(farm.lpTotalInQuoteToken || 0)

        if (farm.quoteTokenSymbol === QuoteToken.BNB) {
          totalValue = totalValue.times(bnbPrice)
        }
        if (farm.quoteTokenSymbol === QuoteToken.BANANA) {
          totalValue = totalValue.times(new BigNumber(apePrice))
        }

        if (totalValue.comparedTo(0) > 0) {
          apy = apy.div(totalValue)
        }

        // console.table({
        //   'lpSymbol': farm.lpSymbol,
        //   'apy': apy.toJSON(),
        //   'totalValue': totalValue.toJSON(),
        //   'bnbPrice': bnbPrice.toJSON(),
        //   'apePrice': apePrice,
        // })

        if (maxAPY.current < apy.toNumber() && apy.toNumber() < 5000) maxAPY.current = apy.toNumber() // weird

        return apy
      })

      return farmsToDisplayWithAPY
    },
    [bnbPrice, cakePrice, apePrice],
  )

  return (
    <StyledFarmStakingCard>
      <NavLink exact activeClassName="active" to="/farms" id="farm-apy-cta">
        <CardBody>
          <Heading size="lg">Earn up to</Heading>
          <CardMidContent>
            {getHighestAPY() ? (
              `${getHighestAPY()}% ${TranslateString(736, 'APR')}`
            ) : (
              <Skeleton animation="pulse" variant="rect" height="44px" />
            )}
          </CardMidContent>
          <Flex justifyContent="space-between">
            <Heading size="lg">
              in <img src="/images/koala/farms.svg" height="24px" width="24px" alt="Farms" /> Farms
            </Heading>
            <ArrowForwardIcon mt={30} color="primary" />
          </Flex>
        </CardBody>
      </NavLink>
    </StyledFarmStakingCard>
  )
}

export default EarnAPYCard
