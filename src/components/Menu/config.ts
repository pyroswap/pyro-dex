import { MenuEntry } from '@pyroswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://pyroswap.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: 'https://dex.pyroswap.com/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://dex.pyroswap.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://pyroswap.com/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://pyroswap.com/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://pyroswap.com/lottery',
  },
  {
    label: 'Referral',
    icon: 'ReferralIcon',
    href: 'https://pyroswap.com/referral',
  },
    {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pyroswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://pyroswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://pyroswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://pyroswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://pyroswap.com/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.pyroswap.com/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.pyroswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/pyroswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.pyroswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://pyroswap.medium.com',
      },
    ],
  },
]

export default config
