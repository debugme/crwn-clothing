import { createSelector } from 'reselect'

import { CartItemProps } from '../../components'
import { StoreState } from '../rootReducer'
import { CartState } from './cartReducer'

export const selectCart = (storeState: StoreState) => storeState.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart: CartState) => cart.items
)

export const selectCartIsVisible = createSelector(
  [selectCart],
  (cart: CartState) => cart.isVisible
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (items: CartItemProps[]) =>
    items.reduce(
      (count: number, item: CartItemProps) => count + item.quantity,
      0
    )
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  (items: CartItemProps[]) =>
    items.reduce(
      (total: number, item: CartItemProps) =>
        total + item.price * item.quantity,
      0
    )
)
