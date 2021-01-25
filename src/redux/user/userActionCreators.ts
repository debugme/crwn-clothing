import { User, SignInState } from '../../components'
import { SignUpData } from '../../components/signUp/SignUp'
import {
  ActionType,
  EmailSignInRequestAction,
  EmailSignUpRequestAction,
  GoogleSignInRequestAction,
  SignInSuccessAction,
  SignInFailureAction,
  CheckUserSessionAction,
  SignOutRequestAction,
  SignOutSuccessAction,
  SignOutFailureAction,
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

export type EmailSignUpRequestActionCreator = (
  signUpData: SignUpData
) => EmailSignUpRequestAction

export const emailSignUpRequest: EmailSignUpRequestActionCreator = (
  signUpData: SignUpData
) => {
  return {
    type: ActionType.EmailSignUpRequest,
    payload: signUpData,
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

export type CheckUserSessionActionCreator = () => CheckUserSessionAction

export const checkUserSession: CheckUserSessionActionCreator = () => {
  return {
    type: ActionType.CheckUserSession,
    payload: undefined,
  }
}

export type SignOutRequestActionCreator = () => SignOutRequestAction

export const signOutRequest: SignOutRequestActionCreator = () => {
  return {
    type: ActionType.SignOutRequest,
    payload: undefined,
  }
}

export type SignOutSuccessActionCreator = () => SignOutSuccessAction

export const signOutSuccess: SignOutSuccessActionCreator = () => {
  return {
    type: ActionType.SignOutSuccess,
    payload: undefined,
  }
}
export type SignOutFailureActionCreator = (
  errorMessage: string
) => SignOutFailureAction

export const signOutFailure: SignOutFailureActionCreator = (
  errorMessage: string
) => {
  return {
    type: ActionType.SignOutFailure,
    payload: errorMessage,
  }
}
