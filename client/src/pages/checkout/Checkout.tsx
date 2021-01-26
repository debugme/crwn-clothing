import { FunctionComponent } from 'react'
import { CartItemProps, CheckoutItemContainer, StripeButton } from '../../components'
import {
  StyledCheckout,
  StyledCheckoutHeader,
  StyledHeaderBlock,
  StyledTotal
} from './Styles'

export interface CheckoutProps {
  items: CartItemProps[]
  total: number
}

export const Checkout: FunctionComponent<CheckoutProps> = (
  props: CheckoutProps
): JSX.Element => {
  const { items, total } = props
  const build = (item: CartItemProps) => (
    <CheckoutItemContainer key={item.id} item={item} />
  )
  const itemList = items.map(build)

  const labelList = ['Product', 'Description', 'Quantity', 'Price', 'Remove']
  const headerList = labelList.map((label) => (
    <StyledHeaderBlock key={label}>
      <span>{label}</span>
    </StyledHeaderBlock>
  ))

  return (
    <StyledCheckout>
      <StyledCheckoutHeader>{headerList}</StyledCheckoutHeader>
      {itemList}
      <StyledTotal>TOTAL: ${total}</StyledTotal>
      <StripeButton price={total} />
    </StyledCheckout>
  )
}
