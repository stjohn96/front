import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    isOldPsc: true,
    isTokenOnly: true,
    lpSymbol: 'LYPTUS',
    lpAddresses: {
      97: '',
      56: '0x78D2616171c75FE9338BA26e0a8099272dd0bE92', // LYPTUS-BUSD LP
    },
    tokenSymbol: 'LYPTUS',
    tokenAddresses: {
      97: '',
      56: '0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    isApe: true,
    lpSymbol: 'LYPTUS-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x744527700ceB261689dF9862FcD0036f5771324C',
    },
    tokenSymbol: 'LYPTUS',
    tokenAddresses: {
      97: '',
      56: '0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
    isApe: true,
    lpSymbol: 'LYPTUS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x1ea398a30f0f2a6ce00bEBfe08Fe11cd9Df5Afb6',
    },
    tokenSymbol: 'LYPTUS',
    tokenAddresses: {
      97: '',
      56: '0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 11,
    isApe: true,
    lpSymbol: 'LYPTUS-BANANA LP',
    lpAddresses: {
      97: '',
      56: '0x44530667302C2655E8Cd3D0365a799e9789F388D',
    },
    tokenSymbol: 'LYPTUS',
    tokenAddresses: {
      97: '',
      56: '0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
    },
    quoteTokenSymbol: QuoteToken.BANANA,
    quoteTokenAdresses: contracts.banana,
  },
  {
    pid: 12,
    isApe: true,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xC087C78AbaC4A0E900a327444193dBF9BA69058E',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    isApe: true,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x60593Abea55e9Ea9d31c1b6473191cD2475a720D',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    isOldPsc: true,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    isPsc: true,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    isPsc: true,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    isPsc: true,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    isOldPsc: true,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 8,
    isPsc: true,
    isTokenOnly: true,
    lpSymbol: 'ADA',
    lpAddresses: {
      97: '',
      56: '0xba51d1ab95756ca4eab8737ecd450cd8f05384cf', // ADA-BNB
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '',
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47', // ADA
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    isOldPsc: true,
    lpSymbol: 'LYPTUS-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x78D2616171c75FE9338BA26e0a8099272dd0bE92',
    },
    tokenSymbol: 'LYPTUS',
    tokenAddresses: {
      97: '',
      56: '0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    isOldPsc: true,
    lpSymbol: 'LYPTUS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6a03c70EC13475928e6238bBefD695AA660A1632',
    },
    tokenSymbol: 'LYPTUS',
    tokenAddresses: {
      97: '',
      56: '0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
