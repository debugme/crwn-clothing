import { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { CartItem, CartItemProps } from '..'

import { ToggleCartVisibilityActionCreator } from '../../redux/cart/cartActionCreators'

import {
  StyledCartDropdown,
  StyledEmptyMessage,
  StyledCartItems,
  StyledButton,
} from './Styles'

export interface CartDropdownProps {
  items: CartItemProps[]
  toggleCartVisibility: ToggleCartVisibilityActionCreator
}

export interface CartDropdownAndRouteProps
  extends CartDropdownProps,
    RouteComponentProps {}

const build = (item: CartItemProps) => <CartItem key={item.id} {...item} />

export const CartDropdown: FunctionComponent<CartDropdownAndRouteProps> = (
  props: CartDropdownAndRouteProps
): JSX.Element => {
  const { items, history, toggleCartVisibility } = props
  const jsxCode = items.length ? (
    <StyledCartItems>{items.map(build)}</StyledCartItems>
  ) : (
    <StyledEmptyMessage>Your cart is empty</StyledEmptyMessage>
  )
  const handleClick = () => {
    toggleCartVisibility()
    history.push('/checkout')
  }

  return (
    <StyledCartDropdown>
      {jsxCode}
      <StyledButton onClick={handleClick}>Go to checkout</StyledButton>
    </StyledCartDropdown>
  )
}
