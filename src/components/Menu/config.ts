import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href:
          'https://swape.koaladefi.finance/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
      },
      {
        label: 'Liquidity',
        href:
          'https://swape.koaladefi.finance/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Bush',
    icon: 'BushIcon',
    href: '/bush',
  },
  {
    label: 'Certik Audit',
    icon: 'ShieldIcon',
    href: 'https://koaladefi.finance/files/audit_certik.pdf',
    target: '_blank',
  },
  {
    label: 'Techrate Audit',
    icon: 'ShieldIcon',
    href: 'https://koaladefi.finance/files/audit_techrate.pdf',
    target: '_blank',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Koasino',
    icon: 'TicketIcon',
    items: [
      {
        label: 'Bingo',
        href: 'https://koaladefi.finance/bingo',
        target: '_blank',
      },
      {
        label: 'Money wheel',
        href: '/Koasino/wheel',
      },
      {
        label: 'Lottery',
        href: '/Koasino/lottery',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Token',
        href: 'https://doc.koaladefi.finance/tokennomics/lyptus-token',
        target: '_blank',
      },
      {
        label: 'Contracts',
        href: 'https://doc.koaladefi.finance/security/contracts',
        target: '_blank',
      },
      {
        label: 'Transparency',
        href: 'https://doc.koaladefi.finance/transparency/transparency',
        target: '_blank',
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
        target: '_blank',
      },
      {
        label: 'Dapp.com',
        href: 'https://www.dapp.com/app/koala-defi-finance',
        target: '_blank',
      },
      {
        label: 'Dappradar.com',
        href: 'https://dappradar.com/binance-smart-chain/defi/koala-defi',
        target: '_blank',
      },
      {
        label: 'Bsc.news',
        href: 'https://www.bsc.news/bsc-projects',
        target: '_blank',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/koalatoken',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/koalatoken/',
      // },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/koaladefi',
        target: '_blank',
      },
      {
        label: 'Docs',
        href: 'https://doc.koaladefi.finance/',
        target: '_blank',
      },
      {
        label: 'Community Feedback',
        href: 'https://koaladefi.nolt.io/',
        target: '_blank',
      },
      {
        label: 'Roadmap',
        href: 'https://doc.koaladefi.finance/roadmap',
        target: '_blank',
      },
      {
        label: 'Blog',
        href: 'https://koaladefi.medium.com/',
        target: '_blank',
      },
      {
        label: 'Announcements',
        href: 'https://t.me/koaladefi',
        target: '_blank',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/koaladefichat',
        target: '_blank',
      },
    ],
  },
]

export default config
