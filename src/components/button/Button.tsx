import { FunctionComponent, ButtonHTMLAttributes } from 'react'

import './Button.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isGoogleSignIn?: boolean
}

export const Button: FunctionComponent<ButtonProps> = (
  props: ButtonProps
): JSX.Element => {
  const { isGoogleSignIn, children, ...rest } = props
  const className = `button ${isGoogleSignIn && 'google-sign-in'}`
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  )
}
