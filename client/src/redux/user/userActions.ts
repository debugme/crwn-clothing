import { SignInState, User } from '../../components'
import { SignUpData } from '../../components/signUp/SignUp'

export enum ActionType {
  EmailSignInRequest = 'EmailSignInRequest',
  EmailSignUpRequest = 'EmailSignUpRequest',
  GoogleSignInRequest = 'GoogleSignInRequest',
  SignInSuccess = 'SignInSuccess',
  SignInFailure = 'SignInFailure',
  CheckUserSession = 'CheckUserSession',
  SignOutRequest = 'SignOutRequest',
  SignOutSuccess = 'SignOutSuccess',
  SignOutFailure = 'SignOutFailure',
}

export interface EmailSignInRequestAction {
  type: ActionType.EmailSignInRequest
  payload: SignInState
}

export interface EmailSignUpRequestAction {
  type: ActionType.EmailSignUpRequest
  payload: SignUpData
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

export interface CheckUserSessionAction {
  type: ActionType.CheckUserSession
  payload: undefined
}

export interface SignOutRequestAction {
  type: ActionType.SignOutRequest
  payload: undefined
}

export interface SignOutSuccessAction {
  type: ActionType.SignOutSuccess
  payload: undefined
}

export interface SignOutFailureAction {
  type: ActionType.SignOutFailure
  payload: string
}

export type UserActionList =
  | EmailSignInRequestAction
  | EmailSignUpRequestAction
  | GoogleSignInRequestAction
  | SignInSuccessAction
  | SignInFailureAction
  | CheckUserSessionAction
  | SignOutRequestAction
  | SignOutSuccessAction
  | SignOutFailureAction
