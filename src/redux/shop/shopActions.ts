import { Collections } from './shopReducer'

export enum ActionType {
  AddCollectionsRequest = 'AddCollectionsRequest',
  AddCollectionsSuccess = 'AddCollectionsSuccess',
  AddCollectionsFailure = 'AddCollectionsFailure',
}

export interface AddCollectionsRequestAction {
  type: ActionType.AddCollectionsRequest
  payload: undefined
}

export interface AddCollectionsSuccessAction {
  type: ActionType.AddCollectionsSuccess
  payload: Collections
}

export interface AddCollectionsFailureAction {
  type: ActionType.AddCollectionsFailure
  payload: string
}

export type ShopActionList =
  | AddCollectionsRequestAction
  | AddCollectionsSuccessAction
  | AddCollectionsFailureAction
