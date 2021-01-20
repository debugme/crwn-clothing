import { ActionType, UserActionList } from '../user/userActions'

import { User } from '../../components'

export interface UserState {
  currentUser: User | null
}

export const defaultUserState: UserState = {
  currentUser: null,
}

export const userReducer = (
  userState = defaultUserState,
  action: UserActionList
): UserState => {
  const { type, payload } = action
  switch (type) {
    case ActionType.SetCurrentUser: {
      return {
        ...userState,
        currentUser: payload,
      }
    }
    default: {
      return userState
    }
  }
}
