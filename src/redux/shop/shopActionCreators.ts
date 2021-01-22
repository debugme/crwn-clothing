import { ActionType, AddCollectionsAction } from './shopActions'
import { ShopState } from './shopReducer'

export type AddCollectionsActionCreator = (
  collections: ShopState
) => AddCollectionsAction

export const addCollections: AddCollectionsActionCreator = (
  collections: ShopState
) => {
  return {
    type: ActionType.AddCollections,
    payload: collections,
  }
}
