import { FunctionComponent } from 'react'

import { AddItemToCartActionCreator } from '../../redux/cart/cartActionCreators'

import {
  StyledImage,
  StyledButton,
  StyledCollectionCard,
  StyledCollectionFooter,
  StyledName,
  StyledPrice,
} from './Styles'

export interface CollectionItem {
  id: number
  name: string
  imageUrl: string
  price: number
}

export interface CollectionCardProps {
  item: CollectionItem
  addItemToCart: AddItemToCartActionCreator
}

export const CollectionCard: FunctionComponent<CollectionCardProps> = (
  props: CollectionCardProps
): JSX.Element => {
  const { item, addItemToCart } = props
  const { name, imageUrl, price } = item
  const handleClick = () => addItemToCart(item)

  return (
    <StyledCollectionCard>
      <StyledImage imageUrl={imageUrl} />
      <StyledCollectionFooter>
        <StyledName>{name}</StyledName>
        <StyledPrice>{price}</StyledPrice>
      </StyledCollectionFooter>
      <StyledButton inverted onClick={handleClick}>
        Add to cart
      </StyledButton>
    </StyledCollectionCard>
  )
}
