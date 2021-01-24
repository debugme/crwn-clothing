import { SignInState, User } from '../../components'

export enum ActionType {
  EmailSignInRequest = 'EmailSignInRequest',
  GoogleSignInRequest = 'GoogleSignInRequest',
  SignInSuccess = 'SignInSuccess',
  SignInFailure = 'SignInFailure',
}

export interface EmailSignInRequestAction {
  type: ActionType.EmailSignInRequest
  payload: SignInState
}

export interface GoogleSignInRequestAction {
  type: ActionType.GoogleSignInRequest
  payload: undefined
}

export interface SignInSuccessAction {
  type: ActionType.SignInSuccess
  payload: User
}

export interface SignInFailureAction {
  type: ActionType.SignInFailure
  payload: string
}

export type UserActionList =
  | EmailSignInRequestAction
  | GoogleSignInRequestAction
  | SignInSuccessAction
  | SignInFailureAction
