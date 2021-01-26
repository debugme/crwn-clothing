import {
  ActionType,
  FetchCollectionsFailureAction,
  FetchCollectionsRequestAction,
  FetchCollectionsSuccessAction
} from './shopActions'
import { Collections } from './shopReducer'

export type AddCollectionsRequestActionCreator = () => FetchCollectionsRequestAction

export type AddCollectionsSuccessActionCreator = (
  collections: Collections
) => FetchCollectionsSuccessAction

export type AddCollectionsFailureActionCreator = (
  errorMessage: string
) => FetchCollectionsFailureAction

export const addCollectionsRequest: AddCollectionsRequestActionCreator = () => {
  return {
    type: ActionType.FetchCollectionsRequest,
    payload: undefined,
  }
}

export const addCollectionsSuccess: AddCollectionsSuccessActionCreator = (
  collections: Collections
) => {
  return {
    type: ActionType.FetchCollectionsSuccess,
    payload: collections,
  }
}

export const addCollectionsFailure: AddCollectionsFailureActionCreator = (
  errorMessage: string
) => {
  return {
    type: ActionType.FetchCollectionsFailure,
    payload: errorMessage,
  }
}
