import {
  ActionType,
  AddCollectionsFailureAction,
  AddCollectionsRequestAction,
  AddCollectionsSuccessAction,
} from './shopActions'
import { Collections } from './shopReducer'

export type AddCollectionsRequestActionCreator = () => AddCollectionsRequestAction

export type AddCollectionsSuccessActionCreator = (
  collections: Collections
) => AddCollectionsSuccessAction

export type AddCollectionsFailureActionCreator = (
  errorMessage: string
) => AddCollectionsFailureAction

export const addCollectionsRequest: AddCollectionsRequestActionCreator = () => {
  return {
    type: ActionType.AddCollectionsRequest,
    payload: undefined,
  }
}

export const addCollectionsSuccess: AddCollectionsSuccessActionCreator = (
  collections: Collections
) => {
  return {
    type: ActionType.AddCollectionsSuccess,
    payload: collections,
  }
}

export const addCollectionsFailure: AddCollectionsFailureActionCreator = (
  errorMessage: string
) => {
  return {
    type: ActionType.AddCollectionsFailure,
    payload: errorMessage,
  }
}
