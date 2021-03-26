import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, MetamaskIcon, LinkExternal } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import { BASE_URL } from '../../../config'
import registerToken from '../../../utils/metamaskUtils'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/cake-bg.svg');
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const TertiaryButton = styled(Button)`
  margin: 5px 0;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  const tokenImageSrc = `${BASE_URL}/images/farms/lyptus.png`
  const tokenName = `LYPTUS`
  const tokenAddress = `0xba26397cdff25f0d26e815d218ef3c77609ae7f1`

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          {TranslateString(542, 'Farms & Staking')}
        </Heading>
        <Block>
          <Label>{TranslateString(544, 'LYPTUS to Harvest')}:</Label>
          <CakeHarvestBalance />
        </Block>
        <Block>
          <Label>{TranslateString(546, 'LYPTUS in Wallet')}:</Label>
          <CakeWalletBalance />
        </Block>
        <Actions>
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              width="100%"
            >
              {pendingTx
                ? TranslateString(548, 'Collecting LYPTUS')
                : TranslateString(532, `Harvest all (${balancesWithValue.length})`)}
            </Button>
          ) : (
            <UnlockButton width="100%" />
          )}
        </Actions>

        <Block>
          <TertiaryButton
            variant="tertiary"
            scale="sm"
            onClick={() => registerToken(tokenAddress, tokenName, 18, tokenImageSrc)}
            startIcon={<MetamaskIcon />}
            width="100%"
          >
            Add {tokenName} to Metamask
          </TertiaryButton>
          <TertiaryButton variant="tertiary" scale="sm" width="100%">
            <LinkExternal href="https://bscscan.com/token/0xba26397cdff25f0d26e815d218ef3c77609ae7f1">
              {TranslateString(356, 'View on BscScan')}
            </LinkExternal>
          </TertiaryButton>
        </Block>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
