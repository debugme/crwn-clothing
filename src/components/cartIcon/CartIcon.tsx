import { FunctionComponent } from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './CartIcon.scss'

export interface CartIconProps {}

export const CartIcon: FunctionComponent<CartIconProps> = (
  props: CartIconProps
): JSX.Element => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}
