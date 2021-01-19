import { FunctionComponent } from 'react'
import { connect } from 'react-redux'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import {
  toggleCartVisibility,
  ToggleCartVisibilityActionCreator,
} from '../../redux/cart/cartActions'

import { selectCartItemsCount } from '../../redux/cart/cartSelectors'
import { StoreState } from '../../redux/rootReducer'

import './CartIcon.scss'

export interface CartIconProps {
  itemCount: number
  toggleCartVisibility: ToggleCartVisibilityActionCreator
}

export const _CartIcon: FunctionComponent<CartIconProps> = (
  props: CartIconProps
): JSX.Element => {
  const { itemCount, toggleCartVisibility } = props
  return (
    <div className="cart-icon" onClick={toggleCartVisibility}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

const mapStateToProps = (storeState: StoreState) => {
  return {
    itemCount: selectCartItemsCount(storeState),
  }
}

const mapDispatchToProps = { toggleCartVisibility }

export const CartIcon = connect(mapStateToProps, mapDispatchToProps)(_CartIcon)
