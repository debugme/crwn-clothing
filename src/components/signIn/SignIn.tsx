import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  FunctionComponent,
  useState,
} from 'react'

import { RouteComponentProps } from 'react-router-dom'

import { Button, FormInput } from '../../components'

import {
  EmailSignInRequestActionCreator,
  GoogleSignInRequestActionCreator,
} from '../../redux/user/userActionCreators'

import { StyledSignIn, StyledTitle, StyledButtons } from './Styles'

export interface SignInProps {
  googleSignInRequest: GoogleSignInRequestActionCreator
  emailSignInRequest: EmailSignInRequestActionCreator
}

export interface SignInAndRouteProps extends SignInProps, RouteComponentProps {}

export interface SignInState {
  email: string
  password: string
}

export const SignIn: FunctionComponent<SignInAndRouteProps> = (
  props: SignInAndRouteProps
): JSX.Element => {
  // ----------------------------------------------------------------------
  // TODO Would this be simpler if we used refs instead of change handlers?
  // ----------------------------------------------------------------------
  const { emailSignInRequest, googleSignInRequest } = props
  const defaultSignInState: SignInState = { email: '', password: '' }
  const [credentials, setCredentials] = useState(defaultSignInState)
  const { email, password } = credentials

  const handleSubmit: FormEventHandler = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    emailSignInRequest(credentials)
  }

  const handleChange: ChangeEventHandler = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.currentTarget
    const newCredentials = { ...credentials, [name]: value }
    setCredentials(newCredentials)
  }

  return (
    <StyledSignIn>
      <StyledTitle>I already have an account</StyledTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          required
          value={email}
          onChange={handleChange}
          label="Email"
          autoComplete="email"
          minLength={3}
        />
        <FormInput
          name="password"
          type="password"
          required
          value={password}
          onChange={handleChange}
          label="Password"
          autoComplete="current-password"
          minLength={6}
        />
        <StyledButtons>
          <Button type="submit">Sign in</Button>
          <Button type="button" onClick={googleSignInRequest} isGoogleSignIn>
            Sign in with Google
          </Button>
        </StyledButtons>
      </form>
    </StyledSignIn>
  )
}
