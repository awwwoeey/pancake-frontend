import { zksyncTokens } from '@pancakeswap/tokens'
import { FeeAmount } from '@pancakeswap/v3-sdk'
import { Strategy, VaultConfig } from '../../types'
import { MANAGER } from '../managers'

export const vaults: VaultConfig[] = [
  {
    id: 2,
    idByManager: 2,
    name: 'BRIL',
    address: '0xF0d2a2B4AD79dF6E2546C184fe6061fde6936eeE',
    adapterAddress: '0xd2c76e574467EEdcA050227B296272162a3A6617',
    vaultAddress: '0xf670f7fA7E55eD9816fBE2685aEB1B4E963F923D',
    currencyA: zksyncTokens.usdc,
    currencyB: zksyncTokens.weth,
    earningToken: zksyncTokens.cake,
    feeTier: FeeAmount.LOW,
    strategy: Strategy.YIELD_IQ,
    manager: MANAGER.BRIL,
    isSingleDepositToken: true,
    allowDepositToken0: false,
    allowDepositToken1: true,
    managerInfoUrl: 'https://www.bril.finance/',
    strategyInfoUrl: 'https://docs.bril.finance/yield-iq/overview',
    learnMoreAboutUrl: 'https://docs.bril.finance/bril-finance/introduction',
  },
  {
    id: 3,
    idByManager: 3,
    name: 'BRIL',
    address: '0x5dc338f2298c3488384aB0A245DEA4761A4f7426',
    adapterAddress: '0xe8bEccAaC60fC8D5d3c120ee7fC23f4072B49927',
    vaultAddress: '0x5b8471581A1c9167202C9E2406c147C55e706e0a',
    currencyA: zksyncTokens.usdt,
    currencyB: zksyncTokens.weth,
    earningToken: zksyncTokens.cake,
    feeTier: FeeAmount.LOW,
    strategy: Strategy.YIELD_IQ,
    manager: MANAGER.BRIL,
    isSingleDepositToken: true,
    allowDepositToken0: true,
    allowDepositToken1: false,
    managerInfoUrl: 'https://www.bril.finance/',
    strategyInfoUrl: 'https://docs.bril.finance/yield-iq/overview',
    learnMoreAboutUrl: 'https://docs.bril.finance/bril-finance/introduction',
  },
  {
    id: 1,
    idByManager: 1,
    name: 'DEFIEDGE',
    address: '0x43Da8432E9015C6660B927d842CD239df28Ffacf',
    adapterAddress: '0xa4a1306754c1Bf0d72BFCE38f408D5eaE3863c3B',
    vaultAddress: '0x44e4a7f3de18C6E843bFe8754C23aA4e67e6A433',
    currencyA: zksyncTokens.usdc,
    currencyB: zksyncTokens.weth,
    earningToken: zksyncTokens.cake,
    feeTier: FeeAmount.LOW,
    strategy: Strategy.ALO,
    manager: MANAGER.DEFIEDGE,
    isSingleDepositToken: false,
    allowDepositToken0: true,
    allowDepositToken1: true,
    managerInfoUrl: 'https://www.defiedge.io/',
    strategyInfoUrl: 'https://docs.defiedge.io/category/strategy-manager',
    learnMoreAboutUrl: 'https://docs.defiedge.io/category/strategy-manager',
  },
]
