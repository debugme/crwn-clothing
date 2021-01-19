import { User } from '../../components'

export enum ActionType {
  SetCurrentUser = 'SetCurrentUser',
}

export interface SetCurrentUserAction {
  type: typeof ActionType.SetCurrentUser
  payload: User | null
}

export type SetCurrentUserActionCreator = (
  user: User | null
) => SetCurrentUserAction

export const setCurrentUser: SetCurrentUserActionCreator = (
  user: User | null
) => {
  return {
    type: ActionType.SetCurrentUser,
    payload: user,
  }
}
