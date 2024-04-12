import { ContextApi } from '@pancakeswap/localization'
import { SUPPORTED_CHAIN_IDS as POOL_SUPPORTED_CHAINS } from '@pancakeswap/pools'
import { SUPPORTED_CHAIN_IDS as POSITION_MANAGERS_SUPPORTED_CHAINS } from '@pancakeswap/position-managers'
import {
  DropdownMenuItems,
  DropdownMenuItemType,
  EarnFillIcon,
  EarnIcon,
  MenuItemsType,
  MoreIcon,
  ShoppingBasketFilledIcon,
  ShoppingBasketIcon,
  SwapFillIcon,
  SwapIcon,
} from '@pancakeswap/uikit'
import {
  FIXED_STAKING_SUPPORTED_CHAINS,
  LIQUID_STAKING_SUPPORTED_CHAINS,
  SUPPORT_CAKE_STAKING,
  SUPPORT_FARMS,
  SUPPORT_ONLY_BSC,
} from 'config/constants/supportChains'
import { getOptionsUrl } from 'utils/getOptionsUrl'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      showItemsOnMobile: false,
      items: [
        {
          label: t('Swap'),
          href: '/swap',
        },
        {
          label: t('Liquidity'),
          href: '/liquidity',
        },

        {
          label: t('Options'),
          href: getOptionsUrl(),
          confirmModalId: 'optionsConfirmModal',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },

        {
          label: `${t('Limit')} (Deprecated)`,
          href: '/limit-orders',
          supportChainIds: SUPPORT_ONLY_BSC,
          image: '/images/decorations/3d-coin.png',
        },
        {
          label: t('Trading Reward'),
          href: '/trading-reward',
          hideSubNav: true,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Buy'),
      href: '/buy-crypto',
      icon: ShoppingBasketIcon,
      fillIcon: ShoppingBasketFilledIcon,
      items: [
        {
          label: t('Buy Crypto'),
          href: '/buy-crypto',
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Earn'),
      href: '/farms',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      supportChainIds: SUPPORT_FARMS,
      items: [
        {
          label: t('Farms'),
          href: '/farms',
          supportChainIds: SUPPORT_FARMS,
        },
        {
          label: t('CAKE Staking'),
          href: '/cake-staking',
          supportChainIds: SUPPORT_CAKE_STAKING,
        },
        {
          label: t('Pools'),
          href: '/pools',
          supportChainIds: POOL_SUPPORTED_CHAINS,
        },
        {
          label: t('Position Manager'),
          href: '/position-managers',
          supportChainIds: POSITION_MANAGERS_SUPPORTED_CHAINS,
        },
        {
          label: t('Liquid Staking'),
          href: '/liquid-staking',
          supportChainIds: LIQUID_STAKING_SUPPORTED_CHAINS,
        },
        {
          label: t('Simple Staking'),
          href: '/simple-staking',
          supportChainIds: FIXED_STAKING_SUPPORTED_CHAINS,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },

    {
      label: '',
      href: '/info',
      icon: MoreIcon,
      hideSubNav: true,
      items: [
        {
          label: t('Affiliate Program'),
          href: '/affiliates-program',
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
