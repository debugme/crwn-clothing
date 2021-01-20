import { createSelector } from 'reselect'
import { Collection } from '../../components'

import { StoreState } from '../rootReducer'
import { ShopState } from './shopReducer'

export const selectShop = (storeState: StoreState) => storeState.shop

export const selectCollections = createSelector(
  [selectShop],
  (shop: ShopState) => shop.collectionList
)

export const selectCollection = (collectionId: string) =>
  createSelector([selectCollections], (collectionList: Collection[]):
    | Collection
    | undefined =>
    collectionList.find((collection) => collection.routeName === collectionId)
  )
