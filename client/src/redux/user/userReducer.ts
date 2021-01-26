import { ActionType, UserActionList } from '../user/userActions'

import { User } from '../../components'

export interface UserState {
  currentUser: User | null
  errorMessage: string
}

export const defaultUserState: UserState = {
  currentUser: null,
  errorMessage: '',
}

export const userReducer = (
  userState = defaultUserState,
  action: UserActionList
): UserState => {
  switch (action.type) {
    case ActionType.SignInSuccess: {
      return {
        ...userState,
        currentUser: action.payload,
        errorMessage: '',
      }
    }
    case ActionType.SignInFailure: {
      return {
        ...userState,
        errorMessage: action.payload,
      }
    }
    case ActionType.SignOutSuccess: {
      return {
        ...userState,
        currentUser: null,
        errorMessage: '',
      }
    }
    case ActionType.SignOutFailure: {
      return {
        ...userState,
        errorMessage: action.payload,
      }
    }
    default: {
      return userState
    }
  }
}
