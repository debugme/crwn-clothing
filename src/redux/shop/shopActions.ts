import { Collections } from './shopReducer'

export enum ActionType {
  FetchCollectionsRequest = 'FetchCollectionsRequest',
  FetchCollectionsSuccess = 'FetchCollectionsSuccess',
  FetchCollectionsFailure = 'FetchCollectionsFailure',
}

export interface FetchCollectionsRequestAction {
  type: ActionType.FetchCollectionsRequest
  payload: undefined
}

export interface FetchCollectionsSuccessAction {
  type: ActionType.FetchCollectionsSuccess
  payload: Collections
}

export interface FetchCollectionsFailureAction {
  type: ActionType.FetchCollectionsFailure
  payload: string
}

export type ShopActionList =
  | FetchCollectionsRequestAction
  | FetchCollectionsSuccessAction
  | FetchCollectionsFailureAction
