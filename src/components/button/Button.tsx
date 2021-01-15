import { FunctionComponent, ButtonHTMLAttributes } from 'react'

import './Button.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FunctionComponent<ButtonProps> = (
  props: ButtonProps
): JSX.Element => {
  const { children, ...rest } = props
  return (
    <button className="button" {...rest}>
      {children}
    </button>
  )
}
