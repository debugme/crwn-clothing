import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  FunctionComponent,
  useState,
} from 'react'

import { Button, FormInput } from '../../components'

import { signInWithGoogle } from '../../firebase'

import './SignIn.scss'

export interface SignInProps {}

export interface SignInState {
  email: string
  password: string
}

export const SignIn: FunctionComponent<SignInProps> = (
  props: SignInProps
): JSX.Element => {
  const defaultState: SignInState = { email: '', password: '' }
  const [credentials, setCredentials] = useState(defaultState)
  const { email, password } = credentials

  const handleSubmit: FormEventHandler = (
    event: FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault()
  }

  const handleChange: ChangeEventHandler = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.currentTarget
    const newCredentials = { ...credentials, [name]: value }
    setCredentials(newCredentials)
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
          autoComplete="username"
        />
        <FormInput
          name="password"
          type="password"
          required
          value={password}
          onChange={handleChange}
          label="Password"
          autoComplete="current-password"
        />
        <div className="buttons">
          <Button type="submit">Sign in</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  )
}
