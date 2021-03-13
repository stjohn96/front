import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 66,
    tokenName: 'BUSD',
    tokenAddress: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    stakingTokenName: QuoteToken.LYPTUS,
    stakingTokenAddress: '0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
    contractAddress: {
      97: '',
      56: '0x96960e759a02FB2ca3F5ddb972AB8f08ce00b85c',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://koaladefi.finance',
    harvest: true,
    tokenPerBlock: '0.025',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    isBush: true,
  },
]

export default pools
