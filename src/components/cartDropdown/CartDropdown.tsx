import { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { StoreState } from '../../redux/rootReducer'
import { Button, CartItem, CartItemProps } from '..'

import { selectCartItems } from '../../redux/cart/cartSelectors'
import {
  toggleCartVisibility,
  ToggleCartVisibilityActionCreator,
} from '../../redux/cart/cartActions'

import './CartDropdown.scss'

export interface CartDropdownProps {
  items: CartItemProps[]
  toggleCartVisibility: ToggleCartVisibilityActionCreator
}

export interface CartDropdownAndRouteProps
  extends CartDropdownProps,
    RouteComponentProps {}

const build = (item: CartItemProps) => <CartItem key={item.id} {...item} />

export const _CartDropdown: FunctionComponent<CartDropdownAndRouteProps> = (
  props: CartDropdownAndRouteProps
): JSX.Element => {
  const { items, history, toggleCartVisibility } = props
  const jsxCode = items.length ? (
    <div className="cart-items">{items.map(build)}</div>
  ) : (
    <span className="empty-message">Your cart is empty</span>
  )
  const handleClick = () => {
    toggleCartVisibility()
    history.push('/checkout')
  }

  return (
    <div className="cart-dropdown">
      {jsxCode}
      <Button className="button" onClick={handleClick}>
        Go to checkout
      </Button>
    </div>
  )
}

const mapStateToProps = createStructuredSelector<
  StoreState,
  Omit<CartDropdownProps, 'toggleCartVisibility'>
>({
  items: selectCartItems,
})

const mapDispatchToProps = { toggleCartVisibility }

export const CartDropdown = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(_CartDropdown)
)
