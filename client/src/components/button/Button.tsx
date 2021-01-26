import { FunctionComponent, ButtonHTMLAttributes } from 'react'

import { StyledButton } from './Styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isGoogleSignIn?: boolean
  inverted?: boolean
}

export const Button: FunctionComponent<ButtonProps> = (
  props: ButtonProps
): JSX.Element => {
  const { children, ...rest } = props
  return <StyledButton {...rest}>{children}</StyledButton>
}
