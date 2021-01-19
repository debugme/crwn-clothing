import { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { Button, CartItem, CartItemProps } from '..'
import { StoreState } from '../../redux/rootReducer'

import './CartDropdown.scss'

export interface CartDropdownProps {
  items: CartItemProps[]
}

const build = (item: CartItemProps) => <CartItem key={item.id} {...item} />

export const _CartDropdown: FunctionComponent<CartDropdownProps> = (
  props: CartDropdownProps
): JSX.Element => {
  const { items } = props
  const list = items.map(build)

  return (
    <div className="cart-dropdown">
      <div className="cart-items">{list}</div>
      <Button className="button">Go to checkout</Button>
    </div>
  )
}

const mapStateToProps = (storeState: StoreState) => {
  return {
    items: storeState.cart.items,
  }
}

export const CartDropdown = connect(mapStateToProps)(_CartDropdown)
