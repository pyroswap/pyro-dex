import { ChainId } from '@pyroswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x51A86f7c855e2Ccef4DeCE8b90409C2a639641E5', // TODO
  [ChainId.BSCTESTNET]: '0x51A86f7c855e2Ccef4DeCE8b90409C2a639641E5'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
