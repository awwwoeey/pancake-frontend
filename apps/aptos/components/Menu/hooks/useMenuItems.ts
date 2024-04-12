import { ContextApi, useTranslation } from '@pancakeswap/localization'
import { DropdownMenuItems, EarnFillIcon, EarnIcon, MenuItemsType, SwapFillIcon, SwapIcon } from '@pancakeswap/uikit'
import { useMemo } from 'react'
import { useMenuItemsStatus } from './useMenuItemsStatus'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }

export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
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
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    image: '/images/decorations/pe2.png',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
]

export const useMenuItems = (): ConfigMenuItemsType[] => {
  const { t } = useTranslation()
  const menuItemsStatus = useMenuItemsStatus()

  const menuItems = useMemo(() => {
    return config(t)
  }, [t])

  return useMemo(() => {
    if (menuItemsStatus && Object.keys(menuItemsStatus).length) {
      return menuItems.map((item) => {
        const innerItems = item.items?.map((innerItem) => {
          const itemStatus = innerItem?.href ? menuItemsStatus[innerItem.href] : null
          if (itemStatus) {
            let itemMenuStatus: DropdownMenuItems['status']
            if (itemStatus === 'soon') {
              itemMenuStatus = { text: t('Soon'), color: 'warning' }
            } else if (itemStatus === 'live') {
              itemMenuStatus = { text: t('Live'), color: 'failure' }
            } else {
              itemMenuStatus = { text: t('New'), color: 'success' }
            }
            return { ...innerItem, status: itemMenuStatus }
          }
          return innerItem
        })
        return { ...item, items: innerItems }
      })
    }
    return menuItems
  }, [t, menuItems, menuItemsStatus])
}
