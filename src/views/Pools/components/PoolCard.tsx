import BigNumber from 'bignumber.js'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Button, IconButton, useModal, AddIcon, Image, Flex, Text } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import UnlockButton from 'components/UnlockButton'
import Label from 'components/Label'
import { useERC20 } from 'hooks/useContract'
import { useSousApprove } from 'hooks/useApprove'
import useI18n from 'hooks/useI18n'
import { useSousStake } from 'hooks/useStake'
import { useSousUnstake } from 'hooks/useUnstake'
import useBlock from 'hooks/useBlock'
import { getBalanceNumber } from 'utils/formatBalance'
import { useSousHarvest } from 'hooks/useHarvest'
import Balance from 'components/Balance'
import { QuoteToken, PoolCategory } from 'config/constants/types'
import { Pool } from 'state/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'
import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'
import CompoundModal from './CompoundModal'
import CardTitle from './CardTitle'
import Card from './Card'
import OldSyrupTitle from './OldSyrupTitle'
import HarvestButton from './HarvestButton'
import CardFooter from './CardFooter'
import { usePoolFromPid } from '../../../state/hooks'

interface PoolWithApy extends Pool {
  apy: BigNumber
}

interface HarvestProps {
  pool: PoolWithApy
}

const PoolCard: React.FC<HarvestProps> = ({ pool }) => {
  const {
    sousId,
    image,
    tokenName,
    tokenLabel,
    stakingTokenName,
    stakingTokenAddress,
    stakingTokenDecimals,
    projectLink,
    harvest,
    apy,
    tokenDecimals,
    poolCategory,
    totalStaked,
    startBlock,
    endBlock,
    isFinished,
    userData,
    stakingLimit,
    debug,
  } = pool
  // Pools using native BNB behave differently than pools using a token
  const isBnbPool = poolCategory === PoolCategory.BINANCE
  const TranslateString = useI18n()
  const stakingTokenContract = useERC20(stakingTokenAddress)
  const { account } = useWeb3React()
  const block = useBlock()
  const { onApprove } = useSousApprove(stakingTokenContract, sousId)
  const { onStake } = useSousStake(sousId, isBnbPool)
  const { onUnstake } = useSousUnstake(sousId)
  const { onReward } = useSousHarvest(sousId, isBnbPool)

  const [requestedApproval, setRequestedApproval] = useState(false)
  const [pendingTx, setPendingTx] = useState(false)

  const allowance = new BigNumber(userData?.allowance || 0)
  const stakingTokenBalance = new BigNumber(userData?.stakingTokenBalance || 0)
  const stakedBalance = new BigNumber(userData?.stakedBalance || 0)
  const earnings = new BigNumber(userData?.pendingReward || 0)

  const blocksUntilStart = Math.max(startBlock - block, 0)
  const blocksRemaining = Math.max(endBlock - block, 0)
  const isOldSyrup = stakingTokenName === QuoteToken.SYRUP
  const accountHasStakedBalance = stakedBalance?.toNumber() > 0
  const needsApproval = !accountHasStakedBalance && !allowance.toNumber() && !isBnbPool
  const isCardActive = isFinished && accountHasStakedBalance
  const isOldFinishedBush = sousId === 66

  const blocksUntilStartHuman = (blocksUntilStart * 3) / 3600

  const totalValueFormated = pool.totalValue
    ? `$${Number(pool.totalValue).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    : '-'

  const convertedLimit = new BigNumber(stakingLimit).multipliedBy(new BigNumber(10).pow(tokenDecimals))
  const [onPresentDeposit] = useModal(
    <DepositModal
      max={stakingLimit && stakingTokenBalance.isGreaterThan(convertedLimit) ? convertedLimit : stakingTokenBalance}
      onConfirm={onStake}
      tokenName={stakingLimit ? `${stakingTokenName} (${stakingLimit} max)` : stakingTokenName}
      depositFeeBP={pool.depositFee}
      pool={pool}
    />,
  )

  const [onPresentCompound] = useModal(
    <CompoundModal earnings={earnings} onConfirm={onStake} tokenName={stakingTokenName} />,
  )

  const [onPresentWithdraw] = useModal(
    <WithdrawModal max={stakedBalance} onConfirm={onUnstake} tokenName={stakingTokenName} />,
  )

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false)
      }
    } catch (e) {
      console.error(e)
    }
  }, [onApprove, setRequestedApproval])

  const showDebug = () => {
    const rows = []

    for (let i = 0; i < Object.entries(debug).length; i++) {
      const [key, value] = Object.entries(debug)[i]
      rows.push(
        <StyledDetails>
          <div style={{ flex: 1 }}>{key}:</div>
          <div style={{ fontWeight: 600, lineHeight: '1.5' }}>{value}</div>
        </StyledDetails>,
      )
    }

    return <div>{rows}</div>
  }

  const balanceNumber = getBalanceNumber(earnings, tokenDecimals)

  return (
    <Card isActive={isCardActive} isFinished={isFinished && sousId !== 0}>
      {isFinished && sousId !== 0 && <PoolFinishedSash />}
      <div style={{ padding: '24px' }}>
        <CardTitle isFinished={isFinished && sousId !== 0}>
          {isOldSyrup && '[OLD]'} {tokenLabel} {TranslateString(999, 'Bush')}
        </CardTitle>
        <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <Image src={`/images/tokens/${image || tokenName}.png`} width={64} height={64} alt={tokenName} />
          </div>
          {!isOldFinishedBush && account && harvest && !isOldSyrup && (
            <HarvestButton
              disabled={!earnings.toNumber() || pendingTx}
              text={pendingTx ? 'Collecting' : 'Harvest'}
              onClick={async () => {
                setPendingTx(true)
                await onReward()
                setPendingTx(false)
              }}
            />
          )}
        </div>
        {!isOldFinishedBush && !isOldSyrup ? (
          <BalanceAndCompound>
            <Balance
              value={balanceNumber}
              decimals={balanceNumber !== 0 && balanceNumber < 0.001 ? 8 : 2}
              isDisabled={isFinished}
            />
            {sousId === 0 && account && harvest && (
              <HarvestButton
                disabled={!earnings.toNumber() || pendingTx}
                text={pendingTx ? TranslateString(999, 'Compounding') : TranslateString(704, 'Compound')}
                onClick={onPresentCompound}
              />
            )}
          </BalanceAndCompound>
        ) : (
          <div>-</div>
        )}
        <Label isFinished={isFinished && sousId !== 0} text={TranslateString(330, `${tokenName} earned`)} />
        <Text color="secondary" fontSize="14px">
          {TranslateString(10009, `Deposit:`)} {stakingTokenName}
        </Text>
        <StyledCardActions>
          {!account && <UnlockButton />}
          {account &&
            (needsApproval && !isOldSyrup ? (
              <div style={{ flex: 1 }}>
                <Button disabled={isFinished || requestedApproval} onClick={handleApprove} width="100%">
                  {pool?.isBush === true ? (
                    <span>{TranslateString(999, 'Approve this bush')}</span>
                  ) : (
                    <span>{`Approve ${stakingTokenName}`}</span>
                  )}
                </Button>
              </div>
            ) : (
              <>
                <Button
                  disabled={stakedBalance.eq(new BigNumber(0)) || pendingTx}
                  onClick={
                    isOldSyrup
                      ? async () => {
                          setPendingTx(true)
                          await onUnstake('0')
                          setPendingTx(false)
                        }
                      : onPresentWithdraw
                  }
                >
                  {`Unstake ${stakingTokenName}`}
                </Button>
                <StyledActionSpacer />
                {!isOldSyrup && (
                  <IconButton disabled={isFinished && sousId !== 0} onClick={onPresentDeposit}>
                    <AddIcon color="background" />
                  </IconButton>
                )}
              </>
            ))}
        </StyledCardActions>
        <Flex justifyContent="space-between">
          <Text>{TranslateString(736, 'APR')}:</Text>
          <Text bold>
            {isFinished || isOldSyrup || !apy || apy?.isNaN() || !apy?.isFinite() ? (
              '-'
            ) : (
              <Balance fontSize="18px" isDisabled={isFinished} value={apy?.toNumber()} decimals={2} unit="%" />
            )}
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>
            {pool.stakingTokenName === 'LYPTUS' && (
              <img src="/images/farms/lyptus.png" alt="LYPTUS Token" width="15" height="15" />
            )}
            {TranslateString(384, 'Your Stake')}:
          </Text>
          <Text bold>
            <Balance fontSize="14px" isDisabled={isFinished} value={getBalanceNumber(stakedBalance)} />
          </Text>
        </Flex>
        {!isFinished && (
          <Flex justifyContent="space-between">
            <Text>
              🔥 {TranslateString(10013, 'Burn fee')}{' '}
              <span data-tip data-for={`depositFeeTooltip${pool.sousId}`}>
                <FontAwesomeIcon icon={faQuestionCircle} color="lightgray" />
              </span>{' '}
              :
            </Text>
            <Text
              bold
              style={{
                backgroundColor: pool.depositFee === 0 ? '#4bca4b' : 'transparent',
                color: pool.depositFee === 0 ? 'white' : '#424f3e',
                padding: pool.depositFee === 0 ? '2px 5px' : 'inherit',
                borderRadius: pool.depositFee === 0 ? '10px' : 'inherit',
              }}
            >
              <Balance fontSize="14px" isDisabled={isFinished} value={pool.depositFee / 100} decimals={2} unit="%" />
            </Text>
            <ReactTooltip id={`depositFeeTooltip${pool.sousId}`} effect="solid" place="right">
              {pool.isLp === true ? (
                <span>
                  {TranslateString(
                    10010,
                    'In the case of an LP, only the deposit fees on non-stable tokens will be eaten (burnt).',
                  )}
                </span>
              ) : (
                <span>{TranslateString(742, 'Deposit fees will be automatically eaten (burnt)')}</span>
              )}
            </ReactTooltip>
          </Flex>
        )}
        {blocksUntilStart > 0 && (
          <Flex justifyContent="space-between">
            <Text>⏱ {TranslateString(10014, 'Blocks until start')}</Text>
            <Text bold>
              <Balance fontSize="14px" isDisabled={isFinished} value={blocksUntilStart} decimals={0} />
            </Text>
          </Flex>
        )}
        {debug !== null && <>{showDebug()}</>}
      </div>
      <CardFooter
        projectLink={projectLink}
        decimals={tokenDecimals}
        totalStaked={totalStaked}
        blocksRemaining={blocksRemaining}
        isFinished={isFinished}
        blocksUntilStart={blocksUntilStart}
        poolCategory={poolCategory}
        tokenName={stakingTokenName}
        tokenAddress={stakingTokenAddress}
        tokenDecimals={stakingTokenDecimals}
        isLp={pool.isLp}
        totalValueFormated={totalValueFormated}
      />
    </Card>
  )
}

const PoolFinishedSash = styled.div`
  background-image: url('/images/pool-finished-sash.svg');
  background-position: top right;
  background-repeat: not-repeat;
  height: 135px;
  position: absolute;
  right: -24px;
  top: -24px;
  width: 135px;
`

const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  width: 100%;
  box-sizing: border-box;
`

const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledDetails = styled.div`
  display: flex;
  font-size: 14px;
`

export default PoolCard
