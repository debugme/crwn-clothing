import { Collection } from '../../components'
import { ShopActionList, ActionType } from '../shop/shopActions'

export type Collections = { [key: string]: Collection }

export interface ShopState {
  collections: Collections
}

export const defaultShopState: ShopState = {
  collections: {},
}

export const shopReducer = (
  shopState = defaultShopState,
  action: ShopActionList
): ShopState => {
  const { type, payload } = action
  switch (type) {
    case ActionType.AddCollections:
      return { ...payload }
    default:
      return shopState
  }
}
