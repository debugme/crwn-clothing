import { Collection } from '../../components'
import { collections } from './data.json'

export interface ShopState {
  collectionList: Collection[]
}

export const defaultShopState: ShopState = {
  collectionList: collections,
}

export const shopReducer = (
  shopState = defaultShopState,
  action: any
): ShopState => {
  return shopState
}
