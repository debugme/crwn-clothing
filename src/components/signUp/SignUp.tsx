import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  FunctionComponent,
  useState,
} from 'react'

import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Button, FormInput } from '..'

import { auth, createUser } from '../../firebase'

import './SignUp.scss'

export interface SignUpProps {}

export interface SignUpAndRouteProps extends SignUpProps, RouteComponentProps {}

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

export const _SignUp: FunctionComponent<SignUpAndRouteProps> = (
  props: SignUpAndRouteProps
): JSX.Element => {
  const { history } = props
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
    const { displayName, email, password, confirmPassword } = signUpData
    if (password !== confirmPassword) {
      return console.error('error = password mismatch')
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      if (user) {
        await createUser({ ...user, displayName })
        setSignUpData(defaultSignUpData)

        // TODO If setSignUpData is asynchronous, this line might not
        // be run after it...So you may need to change your approach
        history.push('/')
      }
    } catch (error) {
      console.error('error - could not sign up', error)
    }
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
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
    </div>
  )
}

export const SignUp = withRouter(_SignUp)
