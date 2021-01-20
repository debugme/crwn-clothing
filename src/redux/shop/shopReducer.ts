import { Collection } from '../../components'
import { collections } from './data.json'

export type Collections = { [key: string]: Collection }

export interface ShopState {
  collections: Collections
}

export const defaultShopState: ShopState = {
  collections,
}

export const shopReducer = (
  shopState = defaultShopState,
  action: any
): ShopState => {
  return shopState
}
