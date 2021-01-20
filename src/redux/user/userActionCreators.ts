import { User } from '../../components'
import { ActionType, SetCurrentUserAction } from './userActions'

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
