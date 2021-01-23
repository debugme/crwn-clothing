import { Collection } from '../../components'
import { ShopActionList, ActionType } from '../shop/shopActions'

export type Collections = { [key: string]: Collection }

export interface ShopState {
  collections: Collections
  isRequesting: boolean
  errorMessage: string
}

export const defaultShopState: ShopState = {
  collections: {},
  isRequesting: false,
  errorMessage: '',
}

export const shopReducer = (
  shopState = defaultShopState,
  action: ShopActionList
): ShopState => {
  switch (action.type) {
    case ActionType.AddCollectionsRequest:
      return { ...shopState, isRequesting: true }
    case ActionType.AddCollectionsSuccess:
      const collections = action.payload
      return { ...shopState, collections, isRequesting: false }
    case ActionType.AddCollectionsFailure:
      const errorMessage = action.payload
      return { ...shopState, errorMessage, isRequesting: false }
    default:
      return shopState
  }
}
