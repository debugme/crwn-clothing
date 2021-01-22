import { ShopState } from './shopReducer'

export enum ActionType {
  AddCollections = 'AddCollections',
}

export interface AddCollectionsAction {
  type: ActionType.AddCollections
  payload: ShopState
}

export type ShopActionList = AddCollectionsAction
