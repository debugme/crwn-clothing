import { FunctionComponent } from 'react'
import { connect } from 'react-redux'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import {
  toggleCartVisibility,
  ToggleCartVisibilityActionCreator,
} from '../../redux/cart/cartActions'

import './CartIcon.scss'

export interface CartIconProps {
  toggleCartVisibility: ToggleCartVisibilityActionCreator
}

export const _CartIcon: FunctionComponent<CartIconProps> = (
  props: CartIconProps
): JSX.Element => {
  const { toggleCartVisibility } = props
  return (
    <div className="cart-icon" onClick={toggleCartVisibility}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}

const mapDispatchToProps = { toggleCartVisibility }

export const CartIcon = connect(null, mapDispatchToProps)(_CartIcon)
