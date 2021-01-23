import { createSelector } from 'reselect'
import { Collection } from '../../components'

import { StoreState } from '../rootReducer'
import { Collections, ShopState } from './shopReducer'

export const selectShop = (storeState: StoreState) => storeState.shop

export const selectCollections = createSelector(
  [selectShop],
  (shop: ShopState) => shop.collections
)

export const selectIsCollectionsLoaded = createSelector(
  [selectCollections],
  (collections: Collections) => Object.keys(collections).length > 0
)

export const selectIsRequesting = createSelector(
  [selectShop],
  (shop: ShopState) => shop.isRequesting
)

export const selectCollection = (collectionId: string) =>
  createSelector(
    [selectCollections],
    (collections: Collections): Collection | undefined =>
      collections[collectionId]
  )
