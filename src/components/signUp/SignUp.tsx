import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  FunctionComponent,
  useState,
} from 'react'

import { RouteComponentProps } from 'react-router-dom'
import { Button, FormInput } from '..'
import { StyledSignUp, StyledTitle } from './Styles'

import { EmailSignUpRequestActionCreator } from '../../redux/user/userActionCreators'

export interface SignUpData {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}

export const defaultSignUpData: SignUpData = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export interface SignUpProps {
  emailSignUpRequest: EmailSignUpRequestActionCreator
}

export interface SignUpAndRouteProps extends SignUpProps, RouteComponentProps {}

export const SignUp: FunctionComponent<SignUpAndRouteProps> = (
  props: SignUpAndRouteProps
): JSX.Element => {
  const { emailSignUpRequest } = props
  const [signUpData, setSignUpData] = useState<SignUpData>(defaultSignUpData)
  const { displayName, email, password, confirmPassword } = signUpData

  const handleChange: ChangeEventHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.currentTarget
    const text = value.trim()
    if (!text) return
    const newSignUpData = { ...signUpData, [name]: text }
    setSignUpData(newSignUpData)
  }

  const handleSubmit: FormEventHandler = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    emailSignUpRequest(signUpData)
  }

  return (
    <StyledSignUp>
      <StyledTitle>I do not have an account</StyledTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          required
          value={displayName}
          label="Display name"
          autoComplete="name"
          onChange={handleChange}
        />
        <FormInput
          name="email"
          type="email"
          required
          value={email}
          label="Email"
          autoComplete="username"
          onChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          required
          value={password}
          label="Password"
          autoComplete="current-password"
          minLength={6}
          onChange={handleChange}
        />
        <FormInput
          name="confirmPassword"
          type="password"
          required
          value={confirmPassword}
          label="Confirm password"
          autoComplete="new-password"
          minLength={6}
          onChange={handleChange}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </StyledSignUp>
  )
}
