import { FunctionComponent } from 'react'

import './CartItem.scss'

export interface CartItemProps {
  id: number
  name: string
  imageUrl: string
  price: number
  quantity: number
}

export const CartItem: FunctionComponent<CartItemProps> = (
  props: CartItemProps
): JSX.Element => {
  const { imageUrl, price, name, quantity } = props
  return (
    <div className="cart-item">
      <img className="image" src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}
