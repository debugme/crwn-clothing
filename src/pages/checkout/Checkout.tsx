import { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { StoreState } from '../../redux/rootReducer'

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelectors'

import './Checkout.scss'
import { CartItemProps, CheckoutItem } from '../../components'

export interface CheckoutProps {
  items: CartItemProps[]
  total: number
}

export const _Checkout: FunctionComponent<CheckoutProps> = (
  props: CheckoutProps
): JSX.Element => {
  const { items, total } = props
  const build = (item: CartItemProps) => (
    <CheckoutItem key={item.id} item={item} />
  )
  const itemList = items.map(build)

  return (
    <div className="checkout">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {itemList}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector<StoreState, CheckoutProps>({
  items: selectCartItems,
  total: selectCartTotal,
})

export const Checkout = connect(mapStateToProps, null)(_Checkout)
