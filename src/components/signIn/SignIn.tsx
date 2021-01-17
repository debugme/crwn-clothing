import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  FunctionComponent,
  useState,
} from 'react'

import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Button, FormInput } from '../../components'

import { auth, signInWithGoogle } from '../../firebase'

import './SignIn.scss'

export interface SignInProps {}

export interface SignInAndRouteProps extends SignInProps, RouteComponentProps {}

export interface SignInState {
  email: string
  password: string
}

export const _SignIn: FunctionComponent<SignInAndRouteProps> = (
  props: SignInAndRouteProps
): JSX.Element => {
  const { history } = props
  const defaultSignInState: SignInState = { email: '', password: '' }
  const [credentials, setCredentials] = useState(defaultSignInState)
  const { email, password } = credentials

  const handleSubmit: FormEventHandler = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    const { email, password } = credentials

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setCredentials(defaultSignInState)
      history.push('/')
    } catch (error) {
      console.error('error - could not sign in with email and password')
    }
  }

  const handleChange: ChangeEventHandler = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.currentTarget
    const newCredentials = { ...credentials, [name]: value }
    setCredentials(newCredentials)
  }

  const handleClick = (): void => {
    signInWithGoogle().then(() => {
      history.push('/')
    })
  }

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
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
        <div className="buttons">
          <Button type="submit">Sign in</Button>
          <Button type="button" onClick={handleClick} isGoogleSignIn>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  )
}

export const SignIn = withRouter(_SignIn)
