import { createSelector } from 'reselect'

import { CartItemProps } from '../../components'
import { StoreState } from '../rootReducer'
import { CartState } from './cartReducer'

export const selectCart = (storeState: StoreState) => storeState.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart: CartState) => cart.items
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (items: CartItemProps[]) =>
    items.reduce(
      (count: number, item: CartItemProps) => count + item.quantity,
      0
    )
)
