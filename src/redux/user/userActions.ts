import { User } from '../../components'

export enum ActionTypes {
  SetCurrentUser,
  ClearCurrentUser,
}

//------------------------------------------------------------------------------------------

export interface SetCurrentUserAction {
  type: typeof ActionTypes.SetCurrentUser
  payload: User
}

export type SetCurrentUserActionCreator = (user: User) => SetCurrentUserAction

export const setCurrentUser: SetCurrentUserActionCreator = (user: User) => {
  return {
    type: ActionTypes.SetCurrentUser,
    payload: user,
  }
}

//------------------------------------------------------------------------------------------

export interface ClearCurrentUserAction {
  type: typeof ActionTypes.ClearCurrentUser
}

export type ClearCurrentUserActionCreator = () => ClearCurrentUserAction

export const clearCurrentUser: ClearCurrentUserActionCreator = () => {
  return {
    type: ActionTypes.ClearCurrentUser,
  }
}

//------------------------------------------------------------------------------------------
