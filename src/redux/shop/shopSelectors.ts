import { createSelector } from 'reselect'

import { StoreState } from '../rootReducer'
import { ShopState } from './shopReducer'

export const selectShop = (storeState: StoreState) => storeState.shop

export const selectCollections = createSelector(
  [selectShop],
  (shop: ShopState) => shop.collectionList
)
