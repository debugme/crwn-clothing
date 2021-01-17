import { ActionTypes } from '../user/userActions'

import { User } from '../../components'

export interface UserState {
  currentUser: User | null
}

export const defaultUserState: UserState = {
  currentUser: null,
}

export const userReducer = (
  userState = defaultUserState,
  action: any
): UserState => {
  const { type, payload } = action
  switch (type) {
    case ActionTypes.SetCurrentUser: {
      console.log('[reducer] SetCurrentUser', action)
      return {
        ...userState,
        currentUser: payload,
      }
    }
    case ActionTypes.ClearCurrentUser: {
      console.log('[reducer] ClearCurrentUser', action)
      return {
        ...userState,
        currentUser: null,
      }
    }
    default: {
      return userState
    }
  }
}
