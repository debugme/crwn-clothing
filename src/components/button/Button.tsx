import { FunctionComponent, ButtonHTMLAttributes } from 'react'

import './Button.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isGoogleSignIn?: boolean
  inverted?: boolean
}

export const Button: FunctionComponent<ButtonProps> = (
  props: ButtonProps
): JSX.Element => {
  const { isGoogleSignIn, inverted, children, ...rest } = props
  const invertedClass = inverted ? 'inverted' : ''
  const googleClass = isGoogleSignIn ? 'google-sign-in' : ''
  const className = `button ${invertedClass} ${googleClass}`

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  )
}
