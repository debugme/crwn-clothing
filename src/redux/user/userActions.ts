import { User } from '../../components'

export enum ActionType {
  SetCurrentUser = 'SetCurrentUser',
}

export interface SetCurrentUserAction {
  type: typeof ActionType.SetCurrentUser
  payload: User | null
}

export type UserActionList = SetCurrentUserAction
