import { FunctionComponent } from 'react'

import {
  StyledCartItem,
  StyledImage,
  StyledItemDetails,
  StyledName,
} from './Styles'

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
    <StyledCartItem>
      <StyledImage src={imageUrl} alt={name} />
      <StyledItemDetails>
        <StyledName>{name}</StyledName>
        <span>
          {quantity} x ${price}
        </span>
      </StyledItemDetails>
    </StyledCartItem>
  )
}
