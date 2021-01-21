import { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { CartItemProps, CheckoutItem, StripeButton } from '../../components'

import { StoreState } from '../../redux/rootReducer'

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelectors'

import './Checkout.scss'

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

  const labelList = ['Product', 'Description', 'Quantity', 'Price', 'Remove']
  const headerList = labelList.map((label) => (
    <div key={label} className="header-block">
      <span>{label}</span>
    </div>
  ))

  return (
    <div className="checkout">
      <div className="checkout-header">{headerList}</div>
      {itemList}
      <div className="total">TOTAL: ${total}</div>
      <StripeButton price={total} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector<StoreState, CheckoutProps>({
  items: selectCartItems,
  total: selectCartTotal,
})

export const Checkout = connect(mapStateToProps, null)(_Checkout)
