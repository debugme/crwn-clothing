import { User, SignInState } from '../../components'
import {
  ActionType,
  EmailSignInRequestAction,
  GoogleSignInRequestAction,
  SignInSuccessAction,
  SignInFailureAction,
} from './userActions'

export type EmailSignInRequestActionCreator = (
  credentials: SignInState
) => EmailSignInRequestAction

export const emailSignInRequest: EmailSignInRequestActionCreator = (
  credentials: SignInState
) => {
  return {
    type: ActionType.EmailSignInRequest,
    payload: credentials,
  }
}

export type GoogleSignInRequestActionCreator = () => GoogleSignInRequestAction

export const googleSignInRequest: GoogleSignInRequestActionCreator = () => {
  return {
    type: ActionType.GoogleSignInRequest,
    payload: undefined,
  }
}

export type SignInSuccessActionCreator = (user: User) => SignInSuccessAction

export const signInSuccess: SignInSuccessActionCreator = (user: User) => {
  return {
    type: ActionType.SignInSuccess,
    payload: user,
  }
}

export type SignInFailureActionCreator = (
  errorMessage: string
) => SignInFailureAction

export const signInFailure: SignInFailureActionCreator = (
  errorMessage: string
) => {
  return {
    type: ActionType.SignInFailure,
    payload: errorMessage,
  }
}
