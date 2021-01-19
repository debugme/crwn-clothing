import { FunctionComponent } from 'react'

import { Button } from '..'

import './CartDropdown.scss'

export interface CartDropdownProps {}

export const CartDropdown: FunctionComponent<CartDropdownProps> = (
  props: CartDropdownProps
): JSX.Element => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <Button className="button">Go to checkout</Button>
      </div>
    </div>
  )
}
